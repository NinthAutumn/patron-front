<template>
  <div class="support-modal dialog dialog__container">
    <div
      class="dialog__close"
      @click="$emit('close')"
    ></div>
    <div class="support-modal__container dialog__content">
      <div class="dialog__header">
        <div class="flex flex--align flex--between">
          <h3>Support</h3>
          <div
            class="button button--close"
            @click="$emit('close')"
          >
            <fa icon="times"></fa>
          </div>
        </div>
      </div>
      <div class="flex flex--right">
        <style-switch
          v-model="method"
          label="Crypto"
          label-left="Fiat"
        ></style-switch>
      </div>
      <form v-if="!method">
        <label for>Tip Amount</label>
        <div
          class="input input--normal input--white flex flex--align"
          style="overflow:hidden;"
        >
          <div class="input__dollar">$</div>
          <input
            v-model="form.charge"
            type="number"
            placeholder="tip amount"
            style="height:100%;border:none;width:100%;flex-grow:1;font-size:1.5rem;    outline: 0;"
          />
        </div>
        <label for>Your Name or Nickname (Empty for Anonymous)</label>
        <input
          v-model="form.name"
          type="text"
          placeholder="Your name or Nickname"
          class="input--normal input--white input"
        />
        <div
          class="flex flex--between flex--align"
          style="margin:1rem 0;"
        >
          <label for="privacy">Private</label>
          <input
            v-model="form.privacy"
            type="checkbox"
            name="privacy"
            style="height:20px;width:20px;"
            id="privacy"
          />
        </div>
        <label for>Message</label>
        <textarea
          v-model="form.message"
          type="text"
          placeholder="Message left with the donation/tip"
          class="input--textarea input--white input"
        />
        <div class="support-modal__options">
          <div
            class="support-modal__option support-modal__option--stripe"
            :class="`support-modal__option--${!method?'visible':'hidden'}`"
          >
            <input
              v-model="form.full_name"
              type="text"
              placeholder="Name on card"
              class="input--normal input--white input"
            />
            <div class="support-modal__stripe input input--normal input--white">
              <div id="stripe-card-element"></div>
            </div>
          </div>
        </div>
        <div
          style="margin-top:2rem;"
          @click="submitHandler"
          class="button button--big button--secondary button--very-round"
        >Support Project</div>
      </form>
      <div
        class="support-modal__crypto"
        v-else
      >
        <utility-qr-card
          v-if="selected_crypto"
          :dataText="cryptos.find(item=>item.id==selected_crypto).external_id"
        ></utility-qr-card>
        <select
          name
          v-model="selected_crypto"
          class="input input--normal input--white"
        >
          <option
            :value="null"
            disabled
          >Select Crypto Currency</option>
          <option
            :value="crypto.id"
            v-for="crypto of cryptos"
            :key="crypto.id"
          >{{crypto.meta.name}}({{crypto.meta.network}} network)</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import { v1 } from "uuid";
export default {
  props: {
    project: Object,
  },
  async created() {
    this.$stripe.load();
  },
  watch: {
    async method(val) {
      if (!val) {
        this.$nextTick().then(this.loadStripe);
      }
    },
  },
  computed: {
    cryptos() {
      return this.project.payout_methods
        .filter((item) => !!item)
        .filter((item) => item.type == "crypto");
    },
  },
  data: () => ({
    method: false,
    stripe: null,
    card: null,
    transaction_code: "",
    selected_crypto: null,
    form: {
      message: "",
      charge: "",
      name: "",
      full_name: "",
      privacy: false,
    },
  }),
  methods: {
    showError(error) {
      this.$toast.error(error);
    },
    async successHandler(intent_id) {
      const { error } = await this.$http.$post(`/v1/transactions/one-time`, {
        message: this.form.message,
        name: this.form.name,
        project_id: this.project.id,
        transaction_code: this.transaction_code,
        privacy: this.form.privacy,
        stripe_intent_id: intent_id,
      });
      this.$emit("success");
    },
    async submitHandler() {
      this.transaction_code = v1();
      const { client_secret, error } = await this.$http.$post(
        `/v1/stripe/intent/one-time`,
        {
          charge: Number(this.form.charge),
          project_id: this.project.id,
          saved: true,
          transaction_code: this.transaction_code,
        }
      );
      const { error: confirm_error, paymentMethod } =
        await this.stripe.createPaymentMethod({
          type: "card",
          card: this.card,
          billing_details: {
            name: this.form.full_name,
          },
        });
      console.log(confirm_error);
      const { paymentIntent, error: confirmError } =
        await this.stripe.confirmCardPayment(
          client_secret,
          { payment_method: paymentMethod.id },
          { handleActions: false }
        );
      console.log(paymentIntent);
      if (confirmError) {
        this.showError(confirmError.message);
      } else {
        if (paymentIntent.status === "requires_action") {
          const { error: confirm_new_error } = await stripe.confirmCardPayment(
            client_secret
          );
          if (confirm_new_error) {
            this.showError(confirm_new_error.message);
          } else {
            await this.successHandler(paymentIntent.id);
          }
        } else {
          await this.successHandler(paymentIntent.id);
        }
      }
    },
    loadStripe() {
      const id = this.project.payout_methods
        .filter((item) => !!item)
        .find((item) => item.type == "stripe")?.external_id;
      this.stripe = this.$stripe.import(id);
      this.selected_crypto = this.cryptos?.[0]?.id || null;
      const elements = this.stripe.elements();
      let color = "#32325d";

      let style = {
        base: {
          color: "#0093b8",
          fontSize: "18px",
          // backgroundColor: 'black',
          // padding: "10px",
        },
      };
      this.card = elements.create("card", { style });
      this.card.mount("#stripe-card-element");
    },
  },
  async mounted() {
    this.loadStripe();
  },
  components: {},
};
</script>

<style lang="scss">
.support-modal {
  $self: &;
  @media screen and (min-width: 751px) {
    #{$self}__container {
      width: 40rem !important;
      max-height: 70rem;
    }
  }
  &__option {
    margin-top: 1rem;
    &--visible {
      display: block;
      visibility: visible;
    }
    &--hidden {
      visibility: hidden;
      display: none;
    }
  }
  &__stripe {
    margin-top: 1rem;
    padding: 1rem;
  }
}
</style>

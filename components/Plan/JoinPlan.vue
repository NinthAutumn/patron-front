<template>
  <div class="dialog dialog__container join-plan">
    <div
      class="dialog__close"
      @click="$emit('close')"
    ></div>
    <div class="dialog__content join-plan__container">
      <h3>Join {{plan.title}}</h3>

      <label for>How many months to Subscribe?</label>
      <input
        type="number"
        v-model="form.count"
        min="1"
        class="input input--normal input--white"
      />
      <div class="join-plan__stripe-container">
        <label for>Payment</label>
        <input
          v-model="form.full_name"
          type="text"
          style="margin-bottom:0rem;"
          placeholder="Name on card"
          class="input--normal input--white input"
        />
        <div class="join-plan__stripe input input--normal input--white">
          <div id="stripe-card-element-plan"></div>
        </div>
      </div>
      <div
        class="button button--big button--secondary button--very-round"
        style="margin-top:2rem;"
        @click="subscribeHandler"
      >Pay ${{Number(form.count)*plan.price}} to Subscribe</div>
    </div>
  </div>
</template>

<script>
import { v1 } from "uuid";

export default {
  data: () => ({
    form: {
      full_name: "",
      count: 1,
    },
  }),
  async created() {
    this.$stripe.load();
  },
  methods: {
    showError(error) {
      this.$toast.error(error);
    },
    async successHandler(intent_id) {
      const { error } = await this.$http.$post(`/v1/subscriptions`, {
        tier_id: this.plan.id,
        transaction_code: this.transaction_code,
        payment_intent_id: intent_id,
      });
    },
    async subscribeHandler() {
      this.transaction_code = v1();
      const { client_secret, error } = await this.$http.$post(
        `/v1/stripe/intent/subscription`,
        {
          tier_id: this.plan.id,
          count: this.form.count,
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
  },
  async mounted() {
    const id = this.project.payout_methods.find(
      (item) => item.type == "stripe"
    )?.external_id;
    this.stripe = this.$stripe.import(id);

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
    this.card.mount("#stripe-card-element-plan");
  },
  props: {
    project: Object,

    plan: Object,
  },
};
</script>

<style lang="scss">
.join-plan {
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  &__container {
    min-width: 30rem;
  }
  &__stripe-container {
    padding: 1rem;
    background: var(--light-primary);
    margin-top: 1rem;
  }
  &__stripe {
    margin-top: 1rem;
    padding: 1rem;
  }
}
</style>

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
          class="button button--big button--secondary button--very-round"
        >Support Project</div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  async created() {
    this.$stripe.load();
  },
  data: () => ({
    method: false,
    stripe: null,
    card: null,
    form: {
      message: "",
      charge: "",
      full_name: "",
    },
  }),
  async mounted() {
    this.stripe = this.$stripe.import();

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

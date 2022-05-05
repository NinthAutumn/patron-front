<template>
  <div class="crypto-form">
    <div class="crypto-form__container">
      <form @submit.prevent="submitHandler">
        <label for>Currency Name</label>
        <input
          type="text"
          required
          v-model="form.name"
          placeholder="bitcoin"
          class="input input--normal input--white"
        />
        <label for>Currency Network</label>
        <input
          type="text"
          v-model="form.network"
          required
          placeholder="bitcoin"
          class="input input--normal input--white"
        />
        <label for>Currency Address</label>
        <input
          v-model="form.address"
          required
          placeholder="bc1q39rz9mh5gaxp74ts87nsvnk7jduzl2n5u36pp0"
          type="text"
          class="input input--normal input--white"
        />
        <button
          style="width:100%;"
          type="submit"
          class="button button--big button--primary button--very-round"
        >Add Method</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    form: { network: "", name: "", address: "" },
  }),
  methods: {
    async submitHandler() {
      await this.$http.$post("/v1/creators/payout-method", {
        external_id: this.form.address,
        type: "crypto",
        meta: {
          network: this.form.network,
          name: this.form.name,
        },
      });
      this.form = { network: "", name: "", address: "" };
      this.$emit("added");
    },
  },
};
</script>

<style lang="scss">
.crypto-form {
  max-width: 30rem;
}
</style>

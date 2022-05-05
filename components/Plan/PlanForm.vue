<template>
  <div class="plan-form dialog dialog__container">
    <div
      class="dialog__close"
      @click="$emit('close')"
    ></div>
    <form
      class="dialog__content plan-form__container"
      @submit.prevent="submitHandler"
    >
      <div class="dialog__header flex flex--between flex--align">
        <h3>Create new Tier</h3>
        <div
          class="button button--close"
          @click="$emit('close')"
        >
          <fa icon="times"></fa>
        </div>
      </div>
      <label for>Name</label>
      <input
        type="text"
        class="input input--normal input--white"
        v-model="form.title"
        required
        maxlength="100"
      />
      <label for>Description</label>
      <textarea
        v-model="form.description"
        required
        class="input input--textarea input--white"
      ></textarea>
      <label for>Price per Month</label>
      <input
        v-model="form.price"
        type="number"
        required
        min="1"
        class="input input--normal input--white"
      />
      <!-- <label for=""></label>
      <input type="text" v-model="form.cover">-->
      <button
        type="submit"
        style="width:100%;margin-top:2rem;"
        class="button button--big button--primary button--very-round"
      >Create Plan</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data: () => ({
    form: {
      title: "",
      description: "",
      price: 0,
    },
  }),
  methods: {
    async submitHandler() {
      await this.$http.$post("/v1/subscriptions/tiers", {
        ...this.form,
        project_id: this.project.id,
      });
      this.form = {
        title: "",
        description: "",
        price: 0,
      };
      this.$toast.success("Successfully created a Tier");
    },
  },
};
</script>

<style lang="scss">
.plan-form {
  $self: &;
  @media screen and (min-width: 751px) {
    #{$self}__container {
      width: 40rem !important;
      max-height: 70rem;
    }
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>

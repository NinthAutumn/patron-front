<template>
  <div class="plan-page">
    <div
      class="flex flex--right"
      v-if="user.id&&user.creator.id== project.creator_id"
    >
      <div
        @click="form=true"
        class="button button--green button--normal button--very-round"
      >
        <fa
          icon="edit"
          style="margin-right:1rem;"
        ></fa>New Plan
      </div>
    </div>
    <plan-list
      v-if="project"
      :project="project"
    ></plan-list>
    <lazy-plan-form
      v-if="form"
      @close="form=false"
      :project="project"
    ></lazy-plan-form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "auth/getAuth",
    }),
  },
  data: () => ({
    form: false,
  }),
  props: {
    project: Object,
  },
};
</script>

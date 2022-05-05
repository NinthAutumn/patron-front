<template>
  <div
    class="project-main"
    style="margin-top:2rem;"
  >
    <h3>Feed</h3>

    <div class="flex flex--right project-main__leave">
      <div
        @click="$emit('support')"
        class="button button--primary--light button--normal button--very-round"
      >
        <fa
          icon="edit"
          style="margin-right:1rem;"
        ></fa>Leave a Message
      </div>
    </div>
    <!-- <card-style style="margin-bottom: 2rem">
      <goal-card style="margin-bottom: 1rem"></goal-card>
      <div class="support-card">
        <div style="display: flex">
          <button-card color="secondary">Support</button-card>
          <share-button></share-button>
        </div>
      </div>
    </card-style>

    <card-style>
      <div class="project-main__about">
        <h2>Description</h2>
        <p>{{ project.description }}</p>
      </div>
    </card-style>-->

    <feed-list :project="project"></feed-list>
  </div>
</template>

<script>
import GoalCard from "@/components/Goal";
import ShareButton from "@/components/ShareButton";
export default {
  props: {
    project: Object,
  },
  components: {
    GoalCard,
    ShareButton,
  },
};
</script>

<style lang="scss">
.project-main {
  @media screen and (min-width: 501px) {
    max-width: var(--desktop-width);
    width: 100%;
  }
  &__leave {
    @media screen and (max-width: 750px) {
      display: block;
    }
  }
  h3 {
    @media screen and (min-width: 751px) {
      display: none;
    }
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
}
</style>

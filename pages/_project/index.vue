<template>
  <div class="project-main container-padding">
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

    <card-style>
      <h2></h2>
    </card-style>
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
}
</style>

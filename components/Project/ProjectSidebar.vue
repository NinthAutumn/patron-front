<template>
  <div class="project-sidebar">
    <div class="project-sidebar__content">
      <img
        :src="project.creator.avatar||require('~/assets/img/default_profile.svg')"
        alt
        height="100"
        width="100"
        class="avatar"
      />
      <h1 class="project-sidebar__username">
        {{project.name}}
        <span
          style="font-size:1.2rem"
        >by {{project.creator.name}}</span>
      </h1>
      <div class="project-sidebar__stats">
        <div class="project-sidebar__stat">
          <div class="project-sidebar__value">10000</div>
          <div class="project-sidebar__label">Followers</div>
        </div>
        <div class="project-sidebar__stat">
          <div class="project-sidebar__value">10000</div>
          <div class="project-sidebar__label">Members</div>
        </div>
        <div class="project-sidebar__stat">
          <div class="project-sidebar__value">10000</div>
          <div class="project-sidebar__label">Tips</div>
        </div>
      </div>
    </div>
    <!-- <div class="project-sidebar__goal"> -->
    <goal-card style="margin-top:2rem;"></goal-card>
    <!-- </div> -->
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  components: {
    GoalCard: () => import("@/components/Goal/SideBar"),
  },
};
</script>

<style lang="scss">
.project-sidebar {
  padding: 1rem 2rem;
  // height: 50rem;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  border-radius: 1rem;
  max-width: 100%;

  justify-content: space-between;
  background: var(--container-background-color);
  // @include themify($themes) {
  //   background: themed("containerBackgroundColor");
  // }
  &__goal {
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
  h1 {
    margin-bottom: 1rem;
    text-align: center;
  }

  &__stats {
    background: var(--background-color);
    padding: 1rem;
    display: flex;
    justify-content: space-between;

    // flex-direction: column;
  }
  &__stat {
    text-align: center;
  }
  &__label {
    font-size: 1.2rem;
  }
  &__value {
    font-size: 1.6rem;
  }
  &__follower {
    font-size: 1.6rem;
    text-align: center;
  }
  img {
    align-self: center;
  }
  &__content {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}
</style>

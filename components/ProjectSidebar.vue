<template>
  <div class="project-sidebar">
    <div class="project-sidebar__content">
      <img
        :src="'https://via.placeholder.com/100'"
        alt
        height="100"
        width="100"
        class="avatar"
      />
      <h1 class="project-sidebar__username">{{project.name}}</h1>
      <div class="project-sidebar__follower">フォロワー 10000人</div>
      <div class="project-sidebar__follower">会員 10000人</div>
      <div class="project-sidebar__follower">集計投げ銭 ５０００円</div>
    </div>
    <!-- <div class="project-sidebar__goal"> -->
    <goal-card></goal-card>
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
  height: 50rem;
  width: 30rem;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  transform: translateY(-100px);
  justify-content: space-between;
  @include themify($themes) {
    background: themed("containerBackgroundColor");
  }
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

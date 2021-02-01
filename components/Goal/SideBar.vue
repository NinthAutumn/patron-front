<template>
  <div class="sidebar-goal">
    <h3>ゴール</h3>
    <div class="sidebar-goal__list">
      <div
        class="sidebar-goal__item"
        v-for="goal of goals"
        :key="goal.id"
      >
        <h4>{{goal.title}}</h4>
        <progress-bar
          :bar-border-radius="100"
          bar-color="#3ECF8E"
          size="huge"
          :val="(goal.current/goal.goal)*100"
          bg-color="white"
        ></progress-bar>
        <p>{{goal.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";

export default {
  props: {
    goals: {
      type: Array,
      default: () => [
        {
          current: 50,
          type: "money",
          goal: 100,
          description: "",
          id: 0,
        },
      ],
    },
  },

  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss">
.sidebar-goal {
  padding: 1rem;
  background: #eee;
  border-radius: 1rem;
  @include themify($themes) {
    //   background: themed("labelTextColor");
  }
}
</style>

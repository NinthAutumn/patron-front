<template>
  <div class="goal-card">
    <!-- <h2>ゴール</h2> -->
    <progress-bar
      :bar-border-radius="100"
      bar-color="#3ECF8E"
      size="huge"
      :val="50"
    ></progress-bar>
    <div>ゴール</div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
export default {
  components: {
    ProgressBar,
  },
};
</script>

<style lang="scss">
</style>

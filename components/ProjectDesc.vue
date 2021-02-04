<template>
  <div class="project-desc">
    <div class="project-desc__actions">
      <h2>情報</h2>
      <div class="flex-divider">
        <button-card
          color="primary--light"
          style="margin-right:1rem;"
        >フォローする</button-card>
        <share-button></share-button>
      </div>
    </div>
    <div class="project-desc__content">
      <p class="project-desc__desc">{{project.description}}</p>
    </div>
  </div>
</template>

<script>
import ShareButton from "@/components/ShareButton";
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  components: {
    ShareButton,
  },
};
</script>

<style lang="scss">
.project-desc {
  padding: 1rem 2rem;
  @include themify($themes) {
    background: themed("containerBackgroundColor");
  }
  .flex-divider {
    display: flex;
  }
  flex-grow: 1;
  margin-left: 1rem;
  transform: translateY(-50px);
  border-radius: 1rem;
  height: 30rem;
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.6rem;
  }
}
</style>

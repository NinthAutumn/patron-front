<template>
  <div class="dp-header">
    <div class="dp-header__banner">
      <div class="dp-header__image">
        <img
          class="banner"
          height="200"
          :src="'https://via.placeholder.com/1200x200'"
          lazy
          alt
        />
      </div>
    </div>
    <div class="dp-header__content">
      <project-sidebar :project="project"></project-sidebar>
      <project-desc :project="project"></project-desc>
    </div>
  </div>
</template>

<script>
import ProjectSidebar from "@/components/ProjectSidebar";
import ProjectDesc from "@/components/ProjectDesc";
export default {
  props: {
    project: Object,
  },
  components: {
    ProjectSidebar,
    ProjectDesc,
  },
};
</script>

<style lang="scss">
.dp-header {
  max-width: var(--desktop-width);
  &__banner {
    // position: relative;
    height: 200px;
  }
  &__banner .banner {
    // width: 100%;
    margin: 0 auto;
    max-width: 100%;
    height: 200px;
  }
  img {
  }
  &__content {
    display: flex;
  }
  &__image {
    width: 100%;
    position: absolute;
    left: 0;
    top: 40px;
    background: white;
    display: flex;
    // @media screen and (max-width: 1100px) {
    //   max-width: var(--desktop-width);
    // }
  }
}
</style>

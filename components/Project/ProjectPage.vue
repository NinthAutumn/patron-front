<template>
  <div class="dp-header">
    <div class="dp-header__banner">
      <div
        class="dp-header__image"
        :style="{backgroundImage:`url(${project.banner||'https://via.placeholder.com/1200x500'})`}"
      ></div>
    </div>
    <div
      class="dp-header__content"
      :class="{'dp-header__content--shop':$route.path.match('/shop')}"
    >
      <project-sidebar
        class="dp-header__side"
        :project="project"
      ></project-sidebar>
      <project-desc
        class="dp-header__desc"
        :project="project"
      ></project-desc>

      <div class="dp-header__child">
        <project-navs class="dp-header__nav"></project-navs>

        <nuxt-child :project="project"></nuxt-child>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  components: {},
};
</script>

<style lang="scss">
.dp-header {
  max-width: var(--desktop-width);
  &__banner {
    max-width: 100%;

    // position: relative;
    height: 200px;
  }
  &__banner .banner {
    // width: 100%;
    max-width: 100%;
    height: 200px;
  }
  img {
  }
  &__child {
    grid-area: child;
    padding: 2rem 2rem;

    display: flex;
    box-sizing: border-box;
    max-width: 100%;

    flex-direction: column;
    background: var(--container-background-color);
  }
  &__content {
    display: grid;
    box-sizing: border-box;
    z-index: 1;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.5fr;
    gap: 1rem;
    grid-template-areas: "side main main" "side child child" "side child child";
    @media screen and (max-width: 750px) {
      grid-template-columns: 1fr !important;
      grid-template-rows: 1fr !important;
      grid-template-areas: "side" "main" "child" !important;
    }
    @media screen and(min-width:751px) {
      transform: translateY(-50px);
    }
    &--shop {
      grid-template-areas: "side main main" "child child child" "child child child";
    }
  }
  &__nav {
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
  &__side {
    grid-area: side;
    z-index: 1;
  }
  &__desc {
    grid-area: main;
  }
  &__image {
    width: 100%;
    position: absolute;
    left: 0;
    top: 40px;
    background: white;
    display: flex;
    height: 30rem;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and(max-width:750px) {
      background-size: contain;
    }
    // @media screen and (max-width: 1100px) {
    //   max-width: var(--desktop-width);
    // }
  }
}
</style>

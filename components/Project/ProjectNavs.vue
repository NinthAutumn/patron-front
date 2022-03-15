<template>
  <div class="project-navs">
    <div class="project-navs__list flex flex--align">
      <div
        class="project-navs__item"
        v-for="nav of navs"
        :key="nav.key"
      >
        <nuxt-link :to="nav.link">{{nav.key}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        { link: `/${this.$route.params.project}/`, key: "Feed" },
        { link: `/${this.$route.params.project}/plans`, key: "Plans" },
        { link: `/${this.$route.params.project}/posts`, key: "Posts" },
        { link: `/${this.$route.params.project}/shop`, key: "Shop" },
      ],
    };
  },
};
</script>

<style lang="scss">
.project-navs {
  &__item {
    .nuxt-link-exact-active {
      background: var(--primary);
      color: white;
      border-radius: 10rem;
    }
    a {
      padding: 0.5rem 2rem;

      text-decoration: none;
    }
    // margin-right: 2rem;
    // border-radius: 10rem;
  }
}
</style>

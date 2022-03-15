<template>
  <div
    class="creator-project"
    @click="$router.push(`/${project.page_url}`)"
  >
    <div class="creator-project__container">
      <!-- <div class="creator-project__avatar">
        <img
          :src="project.avatar||require('~/assets/img/default_profile.svg')"
          height="50"
          width="50"
          alt
        />
      </div>-->
      <div
        class="creator-project__banner"
        :style="{
    backgroundImage: `url(${project.banner||'https://via.placeholder.com/1200x500'})`
}"
      ></div>
      <div class="creator-project__title">{{project.name}}</div>
      <label for>Description:</label>
      <div
        class="creator-project__desc"
        v-if="project.description"
      >{{project.description}}</div>
      <div
        class="creator-project__desc"
        style="text-align:center"
        v-else
      >*No Description Available*</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
};
</script>

<style lang="scss">
.creator-project {
  &__container {
    position: relative;
    min-height: 20rem;
    width: 100%;
  }
  &__avatar {
    position: relative;
    z-index: 1;
    img {
      z-index: inherit;
    }
  }
  &__title {
    font-size: 1.6rem;
  }
  &__desc {
    // white-space: nowrap;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    -webkit-line-clamp: 2;
  }
  &__banner {
    z-index: 0;
    height: 10rem;
    // position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>

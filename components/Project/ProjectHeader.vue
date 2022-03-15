<template>
  <div class="project-header">
    <div class="project-header__banner">
      <img
        height="150"
        width="100%"
        :src="project.banner||'https://via.placeholder.com/1200x500'"
        alt
      />
    </div>
    <div class="project-header__content container-padding">
      <card-style style="width: 100%">
        <div class="project-header__avatar-block">
          <img
            class="project-header__avatar avatar avatar--normal"
            :src="project.creator.avatar||require('~/assets/img/default_profile.svg')"
            alt
            width="100"
            height="100"
          />
        </div>
        <div class="project-header__card">
          <h1 class="project-header__name">{{ project.name }}</h1>
        </div>
      </card-style>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      required: true,
      type: Object,
    },
  },
};
</script>

<style lang="scss">
.project-header {
  position: relative;
  max-width: 100%;

  &__banner {
    max-width: 100%;
  }
  &__card {
    width: 100%;
  }
  &__content {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0 !important;
  }
  &__desc {
    font-size: 1.2rem;
  }
  &__avatar-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30px;
  }
  &__avatar {
    top: -70px;
    position: absolute;
    border-radius: 100rem;
  }
  &__name {
    @include themify($themes) {
      color: var(---link-text-color);
    }
    margin-bottom: 1rem;
  }
}
</style>

<template>
  <div class="search-component">
    <nuxt-link
      tag="div"
      to="/search"
      class="search-component__container"
    >
      <span class="search-component__icon">
        <fa icon="search"></fa>
      </span>
      <p>{{$t('form.search_placeholder')}}</p>
    </nuxt-link>
  </div>
</template>

<style lang="scss">
.search-component {
  //   height: 80px;
  padding: 2rem;
  &__container {
    display: flex;
    align-items: center;
    // justify-content: space-between;
    font-size: 1.6rem;
    @include themify($themes) {
      background: rgb(243, 243, 243);
      color: themed("linkTextColor");
    }
    padding: 1rem 2rem;
    border-radius: 100px;
    text-align: center;
  }
  p {
    color: inherit;
    font-weight: bold;
    // margin: ;
    margin: 0 auto;
  }
  &__icon {
    @include themify($themes) {
      color: themed("linkTextColor");
    }
    font-size: inherit;
  }
}
</style>
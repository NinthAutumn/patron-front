<template>
  <div class="service-list">
    <div class="service-list__container">
      <lazy-hydrate on-idle>
        <div class="service-list__item service-list__item--sub">
          <h2>{{$t('basic.all_subscription')}}</h2>
          <button-card
            @click="$router.push('/pricing#sub')"
            size="small"
            shadow
            color="secondary"
          >{{$t('basic.read_more')}}</button-card>
          <img
            height="145"
            width="186"
            class="service-list__img service-list__img--sub"
            :src="require('~/assets/svg/sub-big.svg')"
            alt
          />
        </div>
      </lazy-hydrate>
      <lazy-hydrate when-visible>
        <div class="service-list__item service-list__item--tip">
          <h2>{{$t('basic.donation')}}</h2>
          <button-card
            @click="$router.push('/pricing#tip')"
            size="small"
            color="green"
          >{{$t('basic.read_more')}}</button-card>
          <img
            class="service-list__img"
            height="158"
            width="258"
            :src="require('~/assets/svg/tip-big.svg')"
            alt
          />
        </div>
      </lazy-hydrate>
      <lazy-hydrate when-visible>
        <div class="service-list__item service-list__item--shop">
          <h2>{{$t('basic.shop')}}</h2>
          <button-card
            @click="$router.push('/pricing#shop')"
            size="small"
            shadow
            color="primary"
          >{{$t('basic.read_more')}}</button-card>
          <img
            height="174"
            width="239"
            class="service-list__img service-list__img--shop"
            :src="require('~/assets/svg/shop-big.svg')"
            alt="ショップを描写している画像"
          />
        </div>
      </lazy-hydrate>
    </div>
  </div>
</template>
<script >
import LazyHydrate from "vue-lazy-hydration";

export default {
  components: {
    LazyHydrate,
  },
};
</script>
<style lang="scss">
@media screen and (max-width: 700px) {
  .service-list {
    &__container {
      display: flex;
      flex-direction: column;
    }
    &__item {
      @include themify($themes) {
        background: var(---text-background-color);
        // box-shadow: themed('smallBoxShadow');
      }
      border-radius: 1rem;
      position: relative;
      height: 150px;
      padding: 1rem;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    button {
      z-index: 1;
      margin-right: auto;
    }
    h2 {
      @include themify($themes) {
        color: var(---link-text-color);
      }
      font-weight: bold;
    }
    &__img {
      position: absolute;
      right: 1rem;
      // bottom: 0.5rem;
      &--shop {
        transform: scale(0.7);
      }
    }
  }
}
@media screen and (min-width: 700px) {
}
</style>

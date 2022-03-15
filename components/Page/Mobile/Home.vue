<template>
  <div class="mobile-home">
    <div
      class="mobile-home__container mobile-home__container--secondary container-padding"
    >
      <h1 class="color--success">{{$t('home.header')}}</h1>
      <h3>{{$t('home.slogan')}}</h3>
      <button-card
        size="normal"
        id="main-button"
        @click="$router.push('/auth/login')"
      >
        {{$t('basic.start')}}
        <img
          height="14"
          width="22"
          id="button-right"
          :src="require('~/assets/svg/right.svg')"
          alt
        />
      </button-card>
      <img
        height="100"
        width="143"
        id="main-svg"
        :src="require('~/assets/svg/home-1.svg')"
        alt
      />
    </div>
    <div
      class="mobile-home__container mobile-home__container--small container-padding"
    >
      <search-card></search-card>
    </div>
    <div
      class="mobile-home__container mobile-home__container--large container-padding"
    >
      <!-- <lazy-hydrate when-visible> -->
      <service-list></service-list>
      <!-- </lazy-hydrate> -->
    </div>
    <div
      class="mobile-home__container mobile-home__container--large container-padding"
    >
      <h2 style="margin-bottom:2rem;">{{$t('home.how_to_start')}}</h2>
      <step-list></step-list>
    </div>
    <div
      class="mobile-home__container mobile-home__container--large container-padding"
    >
      <h2 style="margin-bottom:2rem;">{{$t('home.get_started')}}</h2>
      <claim-url></claim-url>
    </div>
  </div>
</template>
<script>
// import LazyHyrdrate from "vue-lazy-hydration";
import SearchCard from "@/components/Search";
import ServiceList from "@/components/ServiceList";
import StepList from "@/components/StepList";
import ClaimUrl from "@/components/ClaimUrl";
export default {
  components: {
    // LazyHydrate,
    SearchCard,
    ServiceList,
    StepList,
    ClaimUrl,
  },
};
</script>
<style lang="scss" >
#button-right {
  margin-left: 3rem;
  margin-top: 0.8rem;
}
#main-svg {
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 0;
}
#main-button {
  margin-top: auto;
  margin-right: auto;
}
.mobile-home {
  &__container {
    position: relative;
    height: 200px;

    display: flex;
    flex-direction: column;
    &--secondary {
      background: $secondary;
    }
    &--small {
      height: 100px;
    }
    &--large {
      height: 100%;
    }
  }
  h3 {
    z-index: 1;
    color: white;
  }
  h1 {
    @include themify($themes) {
      color: var(--success-text-color);
    }
    margin-bottom: 0;
    // color: ;
  }
}
</style>

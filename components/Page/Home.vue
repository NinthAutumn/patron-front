<template>
  <div class="desktop-home">
    <div class="desktop-home__container desktop-home__container--secondary">
      <div class="desktop-home__card page-container desktop-home__card--main">
        <div class="desktop-home__content">
          <h1 class="color--success">{{$t('home.header')}}</h1>
          <h3 v-html="$t('home.slogan_long')"></h3>
          <div class="desktop-home__claim">
            <claim-url
              button-size="big"
              size="large"
              :button-placeholder="$t('basic.start')"
              @selected="claimHandler"
            ></claim-url>
          </div>
        </div>
        <div class="desktop-home__content-image">
          <img
            height="250"
            :src="require('~/assets/svg/home-1.svg')"
            alt
          />
        </div>
      </div>
    </div>
    <div
      class="desktop-home__container"
      style="margin-bottom:3rem;"
    >
      <div class="desktop-home__card page-container">
        <service-cards></service-cards>
      </div>
    </div>
    <div class="desktop-home__container">
      <div class="desktop-home__card page-container">
        <h2>{{$t('home.find_creator')}}</h2>
        <search-card></search-card>
      </div>
    </div>
    <div class="desktop-home__container">
      <div class="desktop-home__card page-container">
        <h2>{{$t('home.how_to_start')}}</h2>
        <div
          class="flex-divider"
          style="display:flex;"
        >
          <img
            :src="require('~/assets/svg/big-list.svg')"
            alt
          />
          <step-list></step-list>
        </div>
      </div>
    </div>
    <div class="desktop-home__container page-container">
      <div
        class="desktop-home__card"
        style="margin:2rem 0;"
      >
        <h2>{{$t('home.get_started')}}</h2>
        <claim-url
          button-size="big"
          size="large"
          :button-placeholder="$t('basic.start')"
          @selected="claimHandler"
        ></claim-url>
      </div>
    </div>
  </div>
</template>
<script>
import ClaimUrl from "@/components/ClaimUrl";
import ServiceCards from "@/components/ServiceCards";
import SearchCard from "@/components/SearchDesktop";
import StepList from "@/components/StepList";
export default {
  components: {
    ClaimUrl,
    ServiceCards,
    SearchCard,
    StepList,
  },
  methods: {
    claimHandler(url) {},
  },
};
</script>
<style lang="scss">
.desktop-home {
  &__container {
    display: flex;
    justify-content: center;
    &--secondary {
      background: var(--secondary);
      margin-top: -10px;
      height: 35rem;
    }
    @media screen and (max-width: 1036px) {
      padding: 0 2rem;
    }
  }
  &__content-image {
    display: flex;
    align-items: flex-end;
  }
  &__card {
    padding: 2rem 0;
    padding-bottom: 0;
    &--main {
      display: flex;
    }
  }
  &__claim {
    max-width: 50rem;
  }
  &__content {
    padding-bottom: 1rem;
    padding-right: 2rem;
  }
  h3 {
    z-index: 1;
    font-size: 1.8rem;
    font-weight: 400;
    color: white;
    margin-bottom: 3rem;
  }
  h2 {
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
  }
  h1 {
    @include themify($themes) {
      color: var(--success-text-color);
    }
    margin: 2rem 0;
    font-size: 3rem;
    // margin-bottom: 0;
    // color: ;
  }
}
</style>
<template>
  <div class="desktop-home">
    <div class="desktop-home__container desktop-home__container--secondary">
      <div class="desktop-home__card desktop-home__card--main">
        <div class="desktop-home__content">
          <h1 class="color--success">自分の情熱・趣味に資金を供給しよう！</h1>
          <h3>
            熱中的ファンたちに月・年額・投げ銭であなたの活動を新たな方法でサポートを貰おう！
            投げ銭で資金・支援集めにおいて当社のサービス料金は
            <strong
              class="color color--primary"
            >ずっと無料</strong> そして、いつでも無料で引出し可能。サブスクリプションは業界最安サービス料金3%から利用が可能です。
          </h3>
          <div class="desktop-home__claim">
            <claim-url
              button-size="big"
              size="large"
              button-placeholder="始める"
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
    <div class="desktop-home__container">
      <div class="desktop-home__card">
        <service-cards></service-cards>
      </div>
    </div>
  </div>
</template>
<script>
import ClaimUrl from "@/components/ClaimUrl";
import ServiceCards from "@/components/ServiceCards";
export default {
  components: {
    ClaimUrl,
    ServiceCards,
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
      background: $secondary;
      margin-top: -10px;
      height: 30rem;
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
    max-width: 1100px;
    width: 100rem;
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
    margin-bottom: 2rem;
  }
  h1 {
    @include themify($themes) {
      color: themed("successTextColor");
    }
    margin: 2rem 0;
    font-size: 3rem;
    // margin-bottom: 0;
    // color: ;
  }
}
</style>
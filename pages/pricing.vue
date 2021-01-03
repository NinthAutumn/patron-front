<template>
  <main class="service-page container-padding">
    <card-style class="service-page__container">
      <h1>サービス一覧</h1>
      <div class="service-page__service" id="sub">
        <h2>年・月間会員制サブスクリプション</h2>
        <p>
          オンジンでは誰でもいつでも自分のサブスクリプション・ファンクラブ・サロンを始めることができます
          他のサブスクサービスと違い、月間に加え年間会員を募集することが可能です。
          <img
            class="service-page__img service-page__img--right"
            :src="require('~/assets/svg/sub-big.svg')"
            alt
          />
          また、年間会員は月間と異なり、手数料がたったの3%+決済料金*、業界前代未聞の手数料になります、月間会員は5%+決済料金です。
        </p>
        <button-card
          @click="$router.push('/pricing#tip')"
          size="small"
          color="secondary"
          :style="{
            marginRight: $device.isMobile ? '0' : 'auto',
            marginLeft: $device.isMobile ? 'auto' : '0',
          }"
          >今から始める</button-card
        >
        <div class="service-page__disclaimer">
          *決済料金は決済方法によって異なります
          <br />
          <span>
            ペイパル決済手数料は
            <a
              href="https://www.paypal.com/jp/webapps/mpp/merchant/paypal-seller-fees"
              >こちらで見る</a
            >
            <br />
          </span>
          <span>ストライプ決済手数料は 3.6%</span>
        </div>
      </div>
      <div class="service-page__service" id="tip">
        <h2>投げ銭・チップ</h2>
        <p>
          オンジンでは誰でもいつでもだれから
          <strong>手数料なし</strong>で投げ銭を受け取ることができます*。
          ユーザーがチップ・投げ銭をしたときメッセージ・画像・GIF・動画を残すことができそれに対しクリエーターとして拝見や返信を行うことが可能です。
          <img
            class="service-page__img service-page__img--half service-page__img--left"
            :src="require('~/assets/svg/tip-big.svg')"
            alt
          />
          ですが、必ずしも何かをしないといけないわけではなく、投げ銭をした相手は見返りを必要としません。
        </p>
        <button-card
          @click="$router.push('/pricing#tip')"
          size="small"
          color="green"
          >今から始める</button-card
        >
        <div class="service-page__disclaimer">
          *決済料金は決済方法によって異なります
          <br />
          <span>
            ペイパル決済手数料は
            <a
              href="https://www.paypal.com/jp/webapps/mpp/merchant/paypal-seller-fees"
              >こちらで見る</a
            >
            <br />
          </span>
          <span>ストライプ決済手数料は 3.6%</span>
        </div>
      </div>
      <div class="service-page__service" id="shop">
        <h2>ショップ</h2>
        <img
          class="service-page__img service-page__img--half service-page__img--right"
          :src="require('~/assets/svg/shop-big.svg')"
          alt
        />
        <p>
          オンジンでは自分のデジタルショップをかんたんに誰でもが開設することが可能です。手数料たったの5%+決済手数料*。
          また、サブスクリプションと連携ができ様々な方法で会委員特許をあたえることができます。
          例えば、月額500円会員だけショップで毎月新たなアイテムを一つ無料で購入可能といったサービスを実現できます。
        </p>
        <button-card
          @click="$router.push('/pricing#tip')"
          size="small"
          color="primary"
          >今から始める</button-card
        >
        <div class="service-page__disclaimer">
          *決済料金は決済方法によって異なります
          <br />
          <span>
            ペイパル決済手数料は
            <a
              href="https://www.paypal.com/jp/webapps/mpp/merchant/paypal-seller-fees"
              >こちらで見る</a
            >
            <br />
          </span>
          <span>ストライプ決済手数料は 3.6%</span>
        </div>
      </div>
    </card-style>
  </main>
</template>

<style lang="scss">
.service-page {
  &__service {
    margin: 1rem 0;
    position: relative;
  }
  &__container {
    margin-top: 1rem;
    @media screen and (min-width: 700px) {
      max-width: 50rem;
      margin: 0 auto;
    }
  }
  h2 {
    color: $primary;
    margin-bottom: 1rem;
    // word-break: break-all;
  }
  &__img {
    // position: absolute;

    // opacity: 0.3;
    z-index: -1;
    // bottom: 0;
    // right: 0;
    &--right {
      float: right;
      clear: right;
    }
    &--left {
      float: left;
    }

    &--half {
      width: 60%;
    }
  }
  &__disclaimer {
    font-size: 1.2rem;
    text-decoration: none;
    text-align: center;
    margin: 1rem 0;
  }
  button {
    margin-top: 1rem;
  }
  span {
    text-align: left;
  }
  a {
    text-decoration: none;
    font-size: inherit;
    font-weight: bold;
  }
  button {
    margin-left: auto;
  }
  p {
    font-weight: 500;
  }
}
</style>

<template>
  <div class="step-list">
    <div
      class="step-list__item"
      v-for="(step,index) of steps"
      :key="index"
    >
      <div class="step-list__index">{{index+1}}.</div>
      <div class="step-list__content">
        <div class="step-list__title">{{step.title}}</div>
        <p
          class="step-list__desc"
          v-html="step.desc"
        ></p>
      </div>
    </div>
    <div class="line line--left"></div>
    <div class="line line--right"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    steps: [
      {
        title: "アカウントを作る",
        desc:
          "アカウントは簡単にいつでも無料で作ることができ、５分程で作ることができます。",
      },
      {
        title: "決済サービスアカウントを繋げる",
        desc:
          "アカウント作成後、決済サービスを選択し自分のアカウントを繋げます。現在オンジンでサポートされている決済サービスは<strong class='color color--success'>ペイパル</strong>と<strong class='color color--success'>ストライプ</strong>です。",
      },
      {
        title: "ページリンクをシェアして完了",
        desc:
          "アカウント作成時に選んだページアドレスを自分のファン・視聴者・サポーターにシェアする。",
      },
    ],
  }),
};
</script>

<style lang="scss">
.line {
  position: absolute;
  height: 100%;
  // width: 1px;
  border: 2px solid rgb(224, 224, 224);
  top: 0;
  &--left {
    left: 2rem;
  }
  &--right {
    right: 2rem;
  }

  border-radius: 100px;

  z-index: -1;
}
.step-list {
  position: relative;
  &__item {
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 2rem;
    @include themify($themes) {
      background: themed("containerBackgroundColor");
      // boxshadow: themed("boxShadow");
    }
    display: flex;
  }
  &__index {
    font-size: 1.8rem;
    font-weight: bold;
  }
  &__desc {
  }
  &__content {
    margin-left: 2rem;
  }
  &__title {
    font-weight: bold;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
}
</style>

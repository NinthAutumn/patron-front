<template>
  <div class="onboard-payout">
    <h1>支援の受け方を選択・記入</h1>
    <div class="onboard-payout__actions">
      <div class="onboard-payout__switch">
        <switch-card
          v-model="paypal"
          label="ペイパル"
        ></switch-card>
      </div>
      <div v-if="paypal">
        <h3>ペイパルアカウントでダイレクトに投げ銭を受け取ることができます</h3>
        <div class="onboard-payout__paypals">
          <div class="onboard-payout__paypal">
            <input
              placeholder="ペイパルアカウントのEメールアドレス"
              type="text"
            />
            <div class="onboard-payout__icon">
              <fa :icon="{ iconName: 'paypal', prefix: 'fab' }"></fa>
            </div>
          </div>
          <div class="onboard-payout__or">or</div>
          <button-card>ビジネスアカウント</button-card>
        </div>
        <div class="onboard-payout__info">
          オンジンアカウントのEメールと異なることがあります。
          <br />サブスク・ショップの利用はペイパルビジネスアカウントに繋げる必要があります。
        </div>
      </div>

      <div class="onboard-payout__switch">
        <switch-card
          v-model="stripe"
          label="ストライプ"
        ></switch-card>
        <div class="question-tip">
          <fa
            icon="question-circle"
            @click.stop="toggleStripeTipe"
          ></fa>
        </div>
      </div>

      <div
        class="onboard-payout__stripe"
        v-if="stripe"
      >
        <button-card
          color="secondary"
          @click="stripeHandler"
          :icon="{ prefix: 'fab', iconName: 'cc-stripe' }"
        >Connect To Stripe</button-card>
      </div>
      <button-card style="margin-left: auto; margin-top: 1rem">次へ進む</button-card>
    </div>
    <dialog-card v-if="stripeTip">
      <div class="stripe-tip">
        <div class="stripe-tip__header">
          <div class="stripe-tip__left-icon">
            <fa icon="question-circle"></fa>
          </div>
          <div
            class="stripe-tip__right-icon"
            @click="toggleStripeTipe"
          >
            <fa icon="times"></fa>
          </div>
        </div>
        <p>
          ストライプとはクレジット・デビットカード決済サービスで、Apple
          Pay・グーグルペイなどの決済方法もサポートされています。
        </p>
      </div>
    </dialog-card>
  </div>
</template>

<script>
import SwitchCard from "@/components/Style/Switch";
export default {
  data: () => ({
    stripe: false,
    stripeTip: false,
    paypal: true,
  }),

  methods: {
    async stripeHandler() {
      const link = await this.$http.$post(`/v1/creators/stripe/link`);
      // window.location.href = link.url;
    },
    stepHandler(step) {
      this.$emit("step", step);
    },
    toggleStripeTipe() {
      this.stripeTip = !this.stripeTip;
    },
  },
  components: {
    SwitchCard,
    DialogCard: () => import("@/components/Utility/DialogCard"),
  },
};
</script>

<style lang="scss">
.onboard-payout {
  .stripe-tip {
    &__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
    &__left-icon {
      color: $secondary;
    }
    &__right-icon {
      color: var(--primary);
      cursor: pointer;
    }
    @media screen and (min-width: 701px) {
      max-width: 20rem;
    }

    font-size: 1.6rem;
  }
  .question-tip {
    font-size: 1.3rem;
    margin-left: 1rem;
    cursor: pointer;
  }
  &__actions {
    // margin-top: 2rem;
  }
  &__or {
    margin: 0 1rem;
  }
  &__stripe {
    display: flex;
    justify-content: center;
    // padding
    // display:flex;
    // justify-content: center;
    // align-items: center;
  }
  &__paypals {
    display: flex;

    align-items: center;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }
  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  &__switch {
    margin: 2rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__paypal {
    display: flex;
    height: 3.5rem;
    width: 100%;
    border-radius: 10rem;
    border: 2px solid #0070ba;
    overflow: hidden;
  }
  &__info {
    text-align: right;
    font-size: 1.2rem;
    // margin-left: auto;
    margin-top: 0.5rem;
    color: $light-secondary;
    @media screen and (max-width: 500px) {
      text-align: center;
    }
  }
  &__icon {
    color: #0070ba;
    width: 3rem;
    font-size: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__paypal input {
    height: 100%;
    border-radius: 10rem;
    box-sizing: border-box;

    width: 100%;
    font-size: 1.5rem;
    padding-left: 2rem;
    border: none;
  }
  input:active,
  input:focus {
    outline: none;
  }
}
</style>

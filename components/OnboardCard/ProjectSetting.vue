<template>
  <div class="project-setting">
    <div class="project-setting__container">
      <h1>プロジェクトの設定</h1>
      <claim-url @selected="selectedHandler" v-if="step === 1"></claim-url>
      <div v-else class="project-setting__main">
        <div class="project-setting__card">
          <label for="avatar">アバター</label>
          <upload-avatar></upload-avatar>
          <label for="title">タイトル</label>
          <input
            type="text"
            name="title"
            placeholder="プロジェクトタイトル"
            class="input input--normal input--white"
          />
          <label for="description">情報</label>
          <textarea
            type="text"
            name="description"
            placeholder="プロジェクトに関する情報"
            class="input input--white input--textarea"
          />
        </div>
        <div class="project-setting__card project-setting__card--switch">
          <switch-card
            v-model="crowd"
            label="クラファン"
            label-left="フツウ"
          ></switch-card>
        </div>
        <div class="project-setting__card" v-if="crowd">
          <label for="goal-amount">ゴール金額</label>
          <input
            name="goal-amount"
            type="text"
            placeholder="100000"
            class="input input--white input--normal"
          />
          <label for="goal-date">ゴール日程</label>
          <input
            class="input input--white input--normal"
            type="date"
            name="goal-date"
            id="goal-date"
          />
        </div>
        <div class="project-setting__card">
          <button-card
            @click="stepHandler('payout-method')"
            style="margin-left: auto"
            >次へ進む</button-card
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    crowd: false,
    step: 1,
    form: {
      url: "",
      title: "",
      description: "",
      crowd_funding: false,
    },
  }),
  methods: {
    async selectedHandler(input) {
      const available = await this.$store.dispatch(
        "project/isPageUrlAvailable",
        input
      );
      if (!available) {
        return;
      }
      this.step = 2;
      this.input = input;
    },
    async stepHandler(step) {
      if (step === "payout-method") {
        await this.$store.dispatch("project/postProject", form);
      }
      this.$emit("step", step);
    },
  },
  components: {
    ClaimUrl: () => import("@/components/ClaimUrl"),
    SwitchCard: () => import("@/components/Style/Switch"),
    UploadAvatar: () => import("@/components/UploadAvatar"),
  },
};
</script>

<style lang="scss">
.project-setting {
  &__card {
    margin-top: 2rem;
    &--switch {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>

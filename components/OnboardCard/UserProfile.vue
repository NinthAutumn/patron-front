<template>
  <div class="user-profile">
    <h1>プロファイル設定</h1>
    <div class="user-profile__card">
      <upload-avatar v-model="form.file"></upload-avatar>
      <label for="about">自分について</label>
      <textarea
        v-model="form.bio"
        placeholder="自分についてなんでも。。。"
        class="input input--textarea input--white"
      ></textarea>
      <label for="">性別</label>
      <div class="user-profile__gender">
        <input
          type="radio"
          name="gender"
          v-model="form.gender"
          id="male"
          value="male"
        />
        <label for="male">男性</label>
        <input
          type="radio"
          name="gender"
          v-model="form.gender"
          id="female"
          value="female"
        />
        <label for="female">女性</label>
        <input
          type="radio"
          name="gender"
          v-model="form.gender"
          id="other"
          value="other"
        />
        <label for="other">その他</label>
      </div>
    </div>
    <button-card style="margin-left: auto; margin-top: 1rem"
      >設定をセーブする</button-card
    >
    <div class="info">
      このステップをスキップする
      <div class="info__icon">
        <fa icon="caret-right"></fa>
      </div>
    </div>
  </div>
</template>

<script>
import UploadAvatar from "@/components/UploadAvatar";
export default {
  components: {
    UploadAvatar,
  },
  data: () => ({
    form: {
      gender: "other",
      bio: "",
      file: "",
    },
  }),
};
</script>

<style lang="scss">
.info {
  font-size: 1.2rem;
  // text-align: center;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  &__icon {
    margin-left: 1rem;
  }
}
.user-profile {
  input[type="radio"] {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0;
    margin-right: 0.5rem;
  }
  &__gender {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    label {
      font-size: 1.5rem;
      margin-bottom: 0;
      margin-right: 1.5rem;
    }
  }
}
</style>

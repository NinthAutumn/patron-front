<template>
  <div class="user-profile">
    <h1>{{$t('onboarding.profile_setting')}}</h1>
    <div class="user-profile__card">
      <upload-avatar v-model="form.avatar"></upload-avatar>
      <label for="about">{{$t('form.about_me')}}</label>
      <textarea
        v-model="form.bio"
        :placeholder="$t('form.about_me_placeholder')"
        class="input input--textarea input--white"
      ></textarea>
      <label for>{{$t('form.first_name')}}</label>
      <input
        type="text"
        v-model="form.first_name"
        :placeholder="$t('form.first_name_placeholder')"
        class="input input--normal input--white"
      />
      <label for>{{$t('form.last_name')}}</label>
      <input
        v-model="form.last_name"
        type="text"
        :placeholder="$t('form.last_name_placeholder')"
        class="input input--normal input--white"
      />
      <label for>{{$t('form.gender')}}</label>
      <div class="user-profile__gender">
        <input
          type="radio"
          name="gender"
          v-model="form.gender"
          id="male"
          value="male"
        />
        <label for="male">{{$t('form.male')}}</label>
        <input
          type="radio"
          name="gender"
          v-model="form.gender"
          id="female"
          value="female"
        />
        <label for="female">{{$t('form.female')}}</label>
        <input
          type="radio"
          name="gender"
          v-model="form.gender"
          id="other"
          value="other"
        />
        <label for="other">{{$t('form.others')}}</label>
      </div>
    </div>
    <button-card
      @click="submitHandler"
      style="margin-left: auto; margin-top: 1rem"
    >{{$t('onboarding.save_setting')}}</button-card>
    <div
      class="info"
      @click="skipHandler"
    >
      {{$t('onboarding.skip')}}
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
  methods: {
    async uploadFile() {
      let fd = new FormData();
      fd.append("file", this.form.avatar);
      const { image_url } = await this.$http.$post("/v1/files", fd);
      return image_url;
    },
    async submitHandler() {
      let avatar = null;
      if (this.form.avatar) {
        avatar = await this.uploadFile();
      }
      console.log(avatar);
      await Promise.all([
        this.$http.$patch(`/v1/users/profile`, {
          ...this.form,
          avatar,
        }),
        this.$http.$patch(`/v1/users/onboarding/finish`),
      ]);
      this.$router.push("/user");
    },
    async skipHandler() {
      await this.$http.$patch(`/v1/users/onboarding/finish`);
      this.$router.push("/user");
    },
  },
  data: () => ({
    form: {
      gender: "other",
      bio: "",
      avatar: "",
      first_name: "",
      phone_Number: "",
      last_name: "",
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
  cursor: pointer;
  user-select: none;
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

<template>
  <div class="project-setting">
    <div class="project-setting__container">
      <h1>{{$t('onboarding.project_setting')}}</h1>
      <claim-url
        @selected="selectedHandler"
        v-if="step === 1"
      ></claim-url>
      <div
        class="project-setting__main"
        v-else
      >
        <div class="project-setting__card">
          <label for="avatar">Creator Avatar</label>
          <upload-avatar v-model="form.avatar"></upload-avatar>
          <label for>Banner</label>
          <div class="project-setting__banner">
            <div class="project-setting__banner-back"></div>
            <label
              for="banner-upload"
              class="project-setting__banner-label"
            >
              <img :src="banner_img||'https://via.placeholder.com/1200x200'" />
              <div class="project-setting__banner-add">
                <p>Change Banner</p>
                <fa icon="plus"></fa>
              </div>
            </label>
            <input
              id="banner-upload"
              type="file"
              accept="image/*"
              @change="onFileChange"
            />
          </div>
          <label for="title">Your Alias as a Creator</label>
          <input
            type="text"
            name="title"
            v-model="form.name"
            placeholder="Creator Username"
            class="input input--normal input--white"
          />
          <label for="title">Project Title</label>
          <input
            type="text"
            name="title"
            v-model="form.title"
            placeholder="Project Title"
            class="input input--normal input--white"
          />
          <label for="description">Description</label>
          <textarea
            type="text"
            name="description"
            v-model="form.description"
            placeholder="Description about your project"
            class="input input--white input--textarea"
          />
        </div>
        <!-- <div class="project-setting__card project-setting__card--switch">
          <switch-card
            v-model="crowd"
            label="クラファン"
            label-left="フツウ"
          ></switch-card>
        </div>
        <div
          class="project-setting__card"
          v-if="crowd"
        >
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
        </div>-->
        <div class="project-setting__card">
          <button-card
            @click="stepHandler('payout-method')"
            style="margin-left: auto"
          >Continue</button-card>
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
    banner_img: "",
    form: {
      page_url: "",
      title: "",
      avatar: "",
      name: "",
      description: "",
      crowd_funding: false,
      banner: "",
    },
  }),
  methods: {
    onFileChange(e) {
      const file = e.target.files || e.dataTransfer.files;
      // return console.log(this.files);
      this.form.banner = file[0];
      this.banner_img = window.URL.createObjectURL(this.form.banner);
    },
    async selectedHandler(input) {
      const available = await this.$store.dispatch(
        "project/isPageUrlAvailable",
        input
      );
      if (!available) {
        return;
      }
      this.step = 2;
      this.form.page_url = input;
    },
    async uploadAvatar(img) {
      let fd = new FormData();
      fd.append("file", img);
      const { image_url } = await this.$http.$post("/v1/files", fd);
      return image_url;
    },
    async stepHandler(step) {
      if (step === "payout-method") {
        let avatar = null,
          banner = null;
        if (this.form.avatar) {
          avatar = await this.uploadAvatar(this.form.avatar);
        }
        if (this.form.banner) {
          banner = await this.uploadAvatar(this.form.banner);
        }
        await this.$http.$post("/v1/creators", {
          avatar: avatar,
          name: this.form.name,
        });
        await this.$http.$post("/v1/projects", {
          ...this.form,
          banner,
          name: this.form.title,
        });
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
  $self: &;
  &__banner {
    cursor: pointer;
    max-width: 100%;
    position: relative;

    img {
      max-width: 100%;
    }
    &:hover {
      #{$self}__banner-add {
        visibility: visible;
      }
      #{$self}__banner-back {
        visibility: visible;
      }
    }
  }
  &__banner-back {
    visibility: hidden;
    transition: 200ms;

    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.219);
    width: 100%;
    height: 100%;
  }
  &__banner-add {
    visibility: hidden;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background: white;
    padding: 1rem;
    border-radius: 1rem;
  }
  &__banner-label {
    // font-size: 1.6rem;
  }
  label {
    font-size: 1.6rem;
  }
  &__card {
    margin-top: 2rem;
    &--switch {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>

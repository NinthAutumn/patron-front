<template>
  <div class="creator-form">
    <div class="creator-form__container">
      <h1>Become A Creator</h1>

      <claim-url
        v-model="form.page_url"
        buttonPlaceholder="Check"
        @selected="selectedHandler"
      ></claim-url>
      <div class="project-setting__main">
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
          <label for>Category</label>
          <select
            name
            required
            class="input input--normal input--white"
            v-model="form.category"
          >
            <option
              disabled
              selected
              :value="null"
            >Select Your Project Category</option>
            <option
              v-for="category of categories"
              :key="category.id"
              :value="category.id"
            >{{category.name}}</option>
          </select>
          <label for="creator_name">Your Alias as a Creator</label>
          <input
            type="text"
            id="creator_name"
            name="creator_name"
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
        <div class="project-setting__card flex flex--right">
          <button-card @click="submitHandler">Become A Creator</button-card>
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
      category: null,
      banner: "",
    },
    categories: [],
  }),
  async created() {
    this.categories = await this.$http.$get(`/v1/projects/categories/list`);
  },
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
        this.$toast.error("This url is already taken or is Unavailable");
        return;
      }
      this.$toast.success("This url is available");
      this.form.page_url = input;
    },
    async uploadAvatar(img) {
      let fd = new FormData();
      fd.append("file", img);
      const { image_url } = await this.$http.$post("/v1/files", fd);
      return image_url;
    },
    async submitHandler() {
      let avatar = null,
        banner = null;
      if (this.form.avatar) {
        avatar = await this.uploadAvatar(this.form.avatar);
      }
      if (this.form.banner) {
        banner = await this.uploadAvatar(this.form.banner);
      }
      await this.$http.$post("/v1/creators", {
        avatar: this.form.avatar,
        name: this.form.name,
      });
      await this.$http.$post("/v1/projects", {
        ...this.form,
        banner,
        name: this.form.title,
      });
      this.$router.push("/creators");
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
</style>

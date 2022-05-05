<template>
  <form class="project-form">
    <h3 style="text-align:center;">Create New Project</h3>
    <label for="url">Project URL</label>
    <input
      type="text"
      name="url"
      required
      v-model="form.page_url"
      placeholder="Project URL"
      class="input input--normal input--white"
    />
    <label for="title">Project Title</label>
    <input
      type="text"
      name="title"
      required
      v-model="form.title"
      placeholder="Project Title"
      class="input input--normal input--white"
    />
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
    <label for="description">Description</label>
    <textarea
      type="text"
      required
      name="description"
      v-model="form.description"
      placeholder="Description about your project"
      class="input input--white input--textarea"
    />
    <label for>Project Banner</label>
    <div
      style="margin-top:1rem;"
      class="project-form__banner"
    >
      <div class="project-form__banner-back"></div>
      <label
        for="banner-upload"
        class="project-form__banner-label"
      >
        <img :src="banner_img||'https://via.placeholder.com/1200x500'" />
        <div class="project-form__banner-add">
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
    <div class="project-form__error">{{error}}</div>
    <div
      class="project-form__add"
      style="margin-top:2rem;"
    >
      <div
        @click="submitHandler"
        class="button button--normal button--primary button--very-round"
      >Create Project</div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    banner_img: "",
    error: "",
    form: {
      page_url: "",
      title: "",
      description: "",
      banner: "",
      category: null,
    },
    categories: [],
  }),
  async created() {
    this.categories = await this.$http.$get(`/v1/projects/categories/list`);
  },
  methods: {
    async selectedHandler(input) {
      const available = await this.$store.dispatch(
        "project/isPageUrlAvailable",
        input
      );
      if (!available) {
        return false;
      }
      return true;
    },
    async uploadAvatar(img) {
      let fd = new FormData();
      fd.append("file", img);
      const { image_url } = await this.$http.$post("/v1/files", fd);
      return image_url;
    },
    onFileChange(e) {
      const file = e.target.files || e.dataTransfer.files;
      // return console.log(this.files);
      this.form.banner = file[0];
      this.banner_img = window.URL.createObjectURL(this.form.banner);
    },
    async submitHandler() {
      this.error = "";
      let avatar = null,
        banner = null;
      if (!(await this.selectedHandler(this.form.page_url))) {
        return (this.error = "URL is already taken");
      }
      if (this.form.banner) {
        banner = await this.uploadAvatar(this.form.banner);
      }
      const { error } = await this.$http.$post("/v1/projects", {
        ...this.form,
        banner,
        name: this.form.title,
      });
      if (error) {
        this.$toast.error(error);
      }
    },
  },
};
</script>

<style lang="scss">
.project-form {
  $self: &;
  &__error {
    color: var(--error);
    text-align: center;
    margin: 1rem 0;
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
}
</style>

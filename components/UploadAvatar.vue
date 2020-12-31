<template>
  <div class="upload-avatar">
    <div class="upload-avatar__current">
      <img
        class="upload-avatar__img"
        :src="selected || defaultImage"
        height="150"
        width="150"
        v-if="!edit"
      />
    </div>

    <div class="upload-avatar__upload" v-if="!edit">
      <label
        for="file-upload"
        class="custom-file-upload"
        v-text="
          !loading
            ? !selected
              ? 'アバターを変更'
              : `アバターを投稿`
            : '投稿中...'
        "
      >
        <fa style="margin-right: 0.5rem" icon="plus"></fa>
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        @change="onFileChange"
      />
    </div>
    <div class="upload-avatar__edit" v-else-if="edit">
      <Cropper
        :src="selected"
        :stencilComponent="$options.components.CircleStencil"
        @change="onChange"
      />
      <div
        class="upload-avatar__use"
        v-text="'アバター編集を投稿'"
        @click="uploadAvatar"
      ></div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data: () => ({
    edit: false,
    selected: "",
    loading: false,
    file: "",
    defaultImage: "https://img.jpmtl.com/profile.png",
  }),
  methods: {
    ...mapActions({}),
    async onFileChange(e) {
      this.loading = true;
      // this.$nuxt.$loading.start();

      try {
        this.file = e.target.files || e.dataTransfer.files;
        // return console.log(this.files);
        this.file = this.file[0];
        const url = window.URL.createObjectURL(this.file);
        this.selected = url;
        this.loading = false;
        return (this.edit = !this.edit);
      } catch (error) {
        console.log(error);
      }
      this.defDrawings = this.drawings;
      this.loading = false;
    },
    //   ...mapActions({
    //   upload: "upload/uploadAvatar",
    //   fetchDrawings: "drawing/fetchAllDrawings"
    // }),
    async uploadAvatar() {
      const url = window.URL.createObjectURL(this.file);
      this.selected = url;
      this.edit = !this.edit;
      return;
      // const { url } = await this.upload(this.files);
      // this.$emit("input", url);
      // this.$emit("close");
    },
    onChange({ coordinates, canvas }) {
      canvas.toBlob((blob) => {
        this.file = blob;
      });
    },
  },
};
</script>

<style lang="scss">
.vue-advanced-cropper {
  width: 27rem;
  height: 27rem;
}
input[type="file"] {
  display: none;
}
.upload-avatar {
  img {
  }
  &__img {
    border-radius: 100rem;
    margin: 0 auto;
    display: block;
  }
  &__current {
  }
  &__upload {
    margin: 1rem 0;
    text-align: center;
  }
  &__use {
    font-size: 1.4rem;
    padding: 0.5rem 2rem;
    background-color: $secondary;
    color: white;
    border-radius: 0.5rem;
    margin-top: 1rem;
    &:hover {
      cursor: pointer;
    }
  }
  &__edit {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
.custom-file-upload {
  user-select: none;
  font-size: 1.4rem;

  &:hover {
    // font-size: 1.4rem;
    // font-size: inherit;
    cursor: pointer;
    color: $secondary !important;
    background-color: #fff;
  }
  box-shadow: 0 2px 5px 0 rgba(60, 66, 87, 0.1), 0 1px 1px 0 rgba(0, 0, 0, 0.07);
  color: white !important;
  // margin: 1rem 0;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: $secondary;
}
</style>

<template>
  <div class="upload-attach">
    <div class="upload-attach__upload input input--normal input--white">
      <label for="upload-attach">
        <fa
          icon="file"
          style="margin-right:1rem;"
        ></fa>Upload Files
      </label>
      <input
        type="file"
        name="upload-attach"
        id="upload-attach"
        accept="*"
        multiple
        @change="onFileChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    files: [],
  }),
  methods: {
    async onFileChange(e) {
      const files = [...(e.target.files || e.dataTransfer.files)];
      this.$emit("selected", files);
    },
  },
};
</script>

<style lang="scss">
.upload-attach {
  &__upload {
    label {
      user-select: none;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      //   &:hover {
      //     cursor: pointer;
      //     color: $secondary;
      //     background-color: #fff;
      //   }
      font-size: 1.6rem;
      color: var(--primary);
      // border: 1px solid $secondary;
      //   box-shadow: 0 2px 5px 0 rgba(60, 66, 87, 0.1),
      //     0 1px 1px 0 rgba(0, 0, 0, 0.07);
      //   color: white;
      //   margin-bottom: 0;
      //   // display: flex;
      //   // align-items: center;
      //   // justify-content: center;
      //   padding: 0.5rem 1rem;
      //   border-radius: 0.5rem;
      //   background-color: $secondary;
    }

    input[type="file"] {
      display: none;
    }
  }
}
</style>

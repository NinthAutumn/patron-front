<template>
  <div class="post-form">
    <div class="post-form__container">
      <form @submit.prevent="submitHandler">
        <label for>Title</label>
        <input
          type="text"
          v-model="form.title"
          class="input input--normal input--white"
        />
        <label for>Content</label>
        <textarea
          type="text"
          v-model="form.content"
          class="input input--textarea input--white"
        />
        <label for>Minimum Plan Amount (0 for everyone)</label>
        <input
          type="number"
          v-model="form.min_price"
          class="input--normal input--white input"
        />
        <label for>Links</label>
        <table class="post-form__links">
          <thead>
            <tr>
              <th>Link</th>
              <th>Text</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(link,index) of form.links"
              :key="index"
            >
              <td>
                <input
                  type="text"
                  v-model="link.link"
                />
              </td>
              <td>
                <input
                  type="text"
                  v-model="link.text"
                />
              </td>
              <td @click="form.links = form.links.filter(item=>item!=link)">
                <fa icon="minus"></fa>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  v-model="link.link"
                />
              </td>
              <td>
                <input
                  type="text"
                  v-model="link.text"
                />
              </td>
              <td @click="addLinkHandler">
                <fa icon="plus"></fa>
              </td>
            </tr>
          </tbody>
        </table>
        <label style="margin-top:2rem;display:block;">Tags ( separated by comma)</label>
        <input
          type="text"
          v-model="tags"
          class="input input--normal input--white"
        />
        <div class="post-form__tags">
          <div
            class="post-form__tag"
            v-for="tag of form.tags"
            :key="tag"
          >{{tag}}</div>
        </div>

        <label style="margin-top:2rem;display:block;">Attachments</label>
        <div class="post-form__files">
          <div
            class="post-form__file"
            v-for="file of form.files"
            :key="file"
          >
            <div class="post-form__file-name">{{file.file.name}}</div>
            <div class="post-form__min-price">
              <label for>Minimum Price (0 for everyone)</label>
              <input
                type="number"
                v-model="file.min_price"
                class="input input--normal input--white"
              />
            </div>
            <div
              style="font-size:1.6rem;"
              @click="form.files = form.files.filter(item=>item !=file)"
              class="flex flex--align flex--center"
            >
              <fa icon="times"></fa>
            </div>
          </div>
        </div>
        <post-upload-attachments
          style="margin-top:1rem;"
          @selected="selectFileHandler"
        ></post-upload-attachments>

        <div
          class="flex flex--between flex--align"
          @click="form.mature = !form.mature"
        >
          <label
            for="mature"
            style="margin-top:2rem;display:block;"
          >Mature Content</label>
          <input
            type="checkbox"
            v-model="form.mature"
            id="mature"
            style="height:2rem;width:2rem;"
            name="nature"
          />
        </div>
        <button
          type="submit"
          style="width:100%;margin-top:2rem;"
          class="button button--primary button--big button--very-round"
        >Submit Post</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    project: Object,
  },
  data: () => ({
    link: {
      text: "",
      link: "",
    },
    tags: "",
    form: {
      title: "",
      content: "",
      min_price: 0,
      links: [],
      files: [],
      tags: [],
      mature: false,
    },
  }),
  watch: {
    tags(val) {
      this.form.tags = [...new Set(val.split(","))];
      this.tags = [...new Set(val.split(","))].join();
    },
  },
  methods: {
    async selectFileHandler(files) {
      this.form.files = [
        ...this.form.files,
        ...files.map((file) => ({
          file: file,
          min_price: 0,
          attachment: true,
        })),
      ];
    },
    async uploadFile(img) {
      let fd = new FormData();
      fd.append("file", img);
      const { image_url } = await this.$http.$post("/v1/files", fd);
      return image_url;
    },
    async submitHandler() {
      for (const file of this.form.files) {
        file.location = await this.uploadFile(file.file);
      }
      await this.$http.post("/v1/posts", {
        ...this.form,
        project_id: this.project.id,
      });
    },
    addLinkHandler() {
      if (!this.link.link) return this.$toast.error("Link is required");
      if (!this.link.text) this.link.text = this.link.link;
      this.form.links.push(this.link);

      this.link = {
        text: "",
        link: "",
      };
    },
  },
};
</script>

<style lang="scss">
.post-form {
  max-width: 50rem;
  h3 {
    font-size: 2.5rem;
    text-align: center;
  }
  &__file {
    padding: 1rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
    box-shadow: var(--very-small-box-shadow);
    box-sizing: border-box;
    max-width: 15rem;
  }
  &__files {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    margin-right: -1rem;
    margin-bottom: -1rem;
  }
  &__tags {
    display: flex;
    flex-wrap: wrap;
    margin-right: -1rem;
    margin-bottom: -1rem;
  }
  &__tag {
    margin-right: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
    background: var(--background-color);
    color: var(--primary);
  }
  table {
    input {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>

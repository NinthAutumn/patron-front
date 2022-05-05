<template>
  <div class="project-posts">
    <div
      class="dialog dialog__container project-posts__form"
      v-if="form"
    >
      <div
        class="dialog__close"
        @click="form=false"
      ></div>
      <div class="dialog__content">
        <div class="dialog__header flex flex--align flex--between">
          <h3>Submit a Post</h3>
          <div
            class="button button--close"
            @click="form=false"
          >
            <fa icon="times"></fa>
          </div>
        </div>
        <lazy-post-form
          :project="project"
          @close="form=false"
        ></lazy-post-form>
      </div>
    </div>
    <div class="project-posts__container">
      <div
        class="flex flex--right"
        v-if="user.id&&user.creator.id== project.creator_id"
      >
        <div
          class="button button--green button--normal button--very-round"
          @click="form=true"
        >
          <fa
            icon="edit"
            style="margin-right:1rem;"
          ></fa>New Post
        </div>
      </div>
      <div class="project-posts__list">
        <post-card
          v-for="post of posts"
          :key="post.id"
          :post="post"
          @liked="likedHandler"
          :project="project"
        ></post-card>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      user: "auth/getAuth",
    }),
  },
  props: {
    project: Object,
  },
  data: () => ({
    posts: [],
    form: false,
    limit: 20,
    page: 1,
  }),
  methods: {
    async likedHandler(id) {
      await this.$http.$post(`/v1/posts/${id}/vote`);
      this.posts = this.posts.map((post) => {
        post.liked = !post.liked;
        post.likes = post.liked ? post.likes + 1 : post.likes - 1;
        return post;
      });
    },
  },
  async mounted() {
    this.posts = await this.$http.$get(
      `/v1/posts/list?project_id=${this.project.id}&page=${this.page++}&limit=${
        this.limit
      }`
    );
  },
};
</script>

<style lang="scss">
.project-posts {
  &__form {
    @media screen and (min-width: 751px) {
      .dialog__content {
        // width: 40rem !important;
        max-height: 70rem;
      }
    }
  }
}
</style>

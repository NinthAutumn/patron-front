<template>
  <div class="post-card">
    <div class="post-card__container">
      <div class="flex flex--align">
        <div class="post-card__avatar">
          <img
            :src="project.creator.avatar"
            alt="user avatar"
            width="40"
            height="40"
          />
        </div>
        <div class="post-card__title">{{post.title}}</div>
      </div>
      <div class="post-card__content">{{post.content}}</div>

      <hr />
      <div class="post-card__link-list">
        <label for>Attached Links</label>
        <div class="post-card__links">
          <div
            class="post-card__link"
            v-for="link of post.links"
            :key="link"
          >
            <a
              target="_blank"
              :href="link.link"
            >{{link.text}}</a>
          </div>
        </div>
      </div>
      <div
        class="post-card__attachment-list"
        style="margin-top:2rem;"
      >
        <label for>Attachments</label>
        <div class="post-card__attachments">
          <a
            :href="attachment.location"
            target="_blank"
            class="post-card__attachment"
            v-for="attachment of post.attachments"
            :key="attachment"
          >
            <div class="post-card__file-name">{{attachment.name||'Download'}}</div>
          </a>
        </div>
      </div>

      <div class="post-card__footer">
        <div class="post-card__likes">{{post.likes}}</div>
        <div
          class="post-card__like"
          @click="$emit('liked',post.id)"
          :class="{'post-card__like--liked':post.liked}"
        >
          <fa icon="heart"></fa>
        </div>
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
    post: Object,
  },
};
</script>

<style lang="scss">
.post-card {
  box-shadow: var(--very-small-box-shadow);
  border-radius: 1rem;
  margin: 2rem 0;
  padding: 1rem;
  &__avatar {
    margin-right: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    img {
      border-radius: 10rem;
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &__likes {
    font-size: 1.6rem;
    margin-right: 1rem;
  }
  &__like {
    margin-right: 2rem;
    cursor: pointer;
    font-size: 2rem;
    &:hover {
      color: var(--error);
    }
    &--liked {
      color: var(--error);
    }
  }
  &__username {
    font-size: 1.4rem;
  }
  &__title {
    font-size: 2rem;
    font-weight: bold;
  }
  &__links {
  }
  &__content {
    font-size: 1.6rem;
    opacity: 0.8;
    margin: 1rem 0;
  }
  &__attachments {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  &__attachment {
    padding: 1rem;
    font-size: 1.6rem;
    background: var(--background-color);
    border-radius: 1rem;
    width: 100%;
    display: block;
    max-width: 20rem;
    text-align: center;
    text-decoration: none;
  }
  &__link {
    font-size: 1.6rem;
    color: var(--primary);
  }
}
</style>

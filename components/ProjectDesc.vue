<template>
  <div class="project-desc">
    <div class="project-desc__actions">
      <h2>情報</h2>
      <div class="flex-divider">
        <button-card
          color="primary--light"
          style="margin-right:1rem;"
        >フォローする</button-card>
        <share-button></share-button>
      </div>
    </div>
    <div class="project-desc__content">
      <p class="project-desc__desc">{{project.description}}</p>
    </div>
    <div class="project-desc__footer">
      <div class="project-desc__socials">
        <div
          @click="socialHandler(social.link)"
          class="project-desc__social"
          v-for="social of socials"
          :key="social.type"
        >
          <fa :icon="socialIcon[social.type]"></fa>
        </div>
      </div>
      <button-card
        class="project-desc__support"
        size="big"
        color="secondary"
      >サポートする</button-card>
    </div>
  </div>
</template>

<script>
import ShareButton from "@/components/ShareButton";
export default {
  data: () => ({
    socialIcon: {
      facebook: { iconName: "facebook", prefix: "fab" },
      line: { iconName: "line", prefix: "fab" },
      reddit: { iconName: "reddit", prefix: "fab" },
      twitter: { iconName: "twitter", prefix: "fab" },
    },
    socials: [
      { link: "https://facebook.com", type: "facebook" },
      { link: "https://line.com", type: "line" },
      { link: "https://reddit.com", type: "reddit" },
      { link: "https://twitter.com", type: "twitter" },
    ],
  }),
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  methods: {
    socialHandler(link) {
      window.open(link);
    },
  },
  components: {
    ShareButton,
  },
};
</script>

<style lang="scss">
.project-desc {
  padding: 1rem 2rem;
  @include themify($themes) {
    background: themed("containerBackgroundColor");
  }
  .flex-divider {
    display: flex;
  }
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-left: 1rem;
  transform: translateY(-50px);
  border-radius: 1rem;
  height: 30rem;
  &__socials {
    display: flex;
  }
  &__social {
    font-size: 2rem;
    width: 4rem;
    cursor: pointer;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border-radius: 10rem;
    margin-right: 1rem;
  }
  &__footer {
    display: flex;
    align-items: center;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  &__support {
    margin-left: auto;
  }
  &__footer {
    margin-top: auto;
  }
  h2 {
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  p {
    font-size: 1.6rem;
  }
}
</style>

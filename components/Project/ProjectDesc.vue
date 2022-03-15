<template>
  <div class="project-desc">
    <div class="project-desc__actions">
      <h2>Description</h2>
      <div class="flex-divider">
        <button-card
          color="primary--light"
          class="project-desc__follow"
          style="margin-right:1rem;"
        >Follow</button-card>
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
        @click="support=true"
      >Support Project</button-card>
    </div>
    <project-support-modal
      @close="support=false"
      v-if="support"
    ></project-support-modal>
  </div>
</template>

<script>
import ShareButton from "@/components/ShareButton";
export default {
  data: () => ({
    support: false,
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

  display: flex;
  box-sizing: border-box;
  max-width: 100%;

  flex-direction: column;
  background: var(--container-background-color);

  border-radius: 1rem;
  height: 30rem;
  .flex-divider {
    display: flex;
  }
  &__follow {
    @media screen and(max-width:750px) {
      display: none;
    }
  }
  &__socials {
    display: flex;
    @media screen and(max-width:750px) {
      display: none;
    }
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

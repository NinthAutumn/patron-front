<template>
  <div class="share-button">
    <div
      class="share-button__main share-button__icon"
      @click.stop="toggleModal"
    >
      <fa icon="share"></fa>
    </div>
    <div class="share-button__list" v-if="modal" v-click-outside="toggleModal">
      <div
        v-for="item of list"
        :key="item.name"
        @click="redirectToLink(item.link)"
        class="share-button__item share-button__icon"
      >
        <fa :icon="item.icon"></fa>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleModal() {
      this.modal = !this.modal;
    },
    redirectToLink: (link) => window.open(link),
  },
  props: {
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      modal: false,
      list: [
        {
          name: "twitter",
          icon: { iconName: "twitter", prefix: "fab" },
          link: `http://twitter.com/share?text=こんなプロジェクトオンジンで見つけたました${this.project.name}、支援してみませんか？&url=https://onjin.jp/${this.$route.params.project}&hashtags=hashtag1,hashtag2,hashtag3`,
        },

        {
          name: "facebook",
          icon: { iconName: "facebook", prefix: "fab" },
          link: `http://twitter.com/share?text=text goes here&url=https://onjin.jp/${this.$route.params.project}&hashtags=hashtag1,hashtag2,hashtag3`,
        },
        {
          name: "line",
          icon: { iconName: "line", prefix: "fab" },
          link: `http://twitter.com/share?text=text goes here&url=https//onjin.jp/${this.$route.params.project}&hashtags=hashtag1,hashtag2,hashtag3`,
        },
        {
          name: "instagram",
          icon: { iconName: "instagram", prefix: "fab" },
          link: `http://twitter.com/share?text=text goes here&url=https//onjin.jp/${this.$route.params.project}&hashtags=hashtag1,hashtag2,hashtag3`,
        },
        {
          name: "email",
          icon: "envelope",
          link: `http://twitter.com/share?text=text goes here&url=https//onjin.jp/${this.$route.params.project}&hashtags=hashtag1,hashtag2,hashtag3`,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.share-button {
  margin-left: auto;
  position: relative;
  &__icon {
    height: 3.5rem;
    width: 3.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    border-radius: 10rem;
  }
  &__list {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    background: white;
    border-radius: 10rem;
    @include themify($themes) {
      box-shadow: themed("boxShadow");
    }
    display: flex;
  }
  &__main {
    @include themify($themes) {
      box-shadow: themed("boxShadow");
      // color:themed('')
      background-color: $primary-back;
      color: themed("linkTextColor");
    }
  }
}
</style>

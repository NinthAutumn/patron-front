<template>
  <div class="dp-header">
    <div class="dp-header__banner">
      <div
        @mouseenter="edit=true"
        @mouseleave="edit=false"
        class="dp-header__image"
        :style="{backgroundImage:`url(${banner_img||project.banner||'https://via.placeholder.com/1200x500'})`}"
      >
        <label
          class="dp-header__edit"
          for="change-banner"
          v-if="edit&&user.id&&user.creator.id== project.creator_id"
        >
          <input
            type="file"
            name="change-banner"
            accept="image/*"
            @change="onFileChange"
            id="change-banner"
          />
          <p>Change Banner</p>
        </label>
      </div>
    </div>
    <div
      class="dp-header__content"
      :class="{'dp-header__content--shop':$route.path.match('/shop')}"
    >
      <project-sidebar
        class="dp-header__side"
        :project="project"
      ></project-sidebar>
      <project-desc
        @support="support=true"
        class="dp-header__desc"
        :project="project"
      ></project-desc>

      <div class="dp-header__child">
        <project-navs class="dp-header__nav"></project-navs>

        <nuxt-child
          @support="support=true"
          :project="project"
        ></nuxt-child>
      </div>
    </div>
    <lazy-project-support-modal
      :project="project"
      @close="support=false"
      v-if="support"
      @success="successHandler"
    ></lazy-project-support-modal>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    project: Object,
  },
  computed: {
    ...mapGetters({
      user: "auth/getAuth",
    }),
  },
  methods: {
    async successHandler() {
      await this.$store.dispatch("project/fetchFeeds", {
        project_id: this.project.id,
        limit: 15,
        page: 1,
      });
      this.support = false;
    },
    onFileChange(e) {
      const file = e.target.files || e.dataTransfer.files;
      // return console.log(this.files);
      this.file = file[0];
      this.banner_img = window.URL.createObjectURL(this.file);
    },
  },
  data: () => ({
    support: false,
    edit: false,
    banner_img: null,
    file: null,
  }),
  components: {},
};
</script>

<style lang="scss">
.dp-header {
  max-width: var(--desktop-width);
  &__banner {
    max-width: 100%;
    // width: 100vw;
    // position: relative;
    height: 200px;
    input[type="file"] {
      width: 100%;
      height: 100%;
    }
  }
  &__banner .banner {
    // width: 100%;
    max-width: 100%;
    height: 200px;
  }
  img {
  }
  &__edit {
    position: absolute;
    left: 0;
    height: 100%;
    width: 100%;
    top: 0;
    place-content: center;
    display: grid;
    background: rgb(0, 0, 0);
    z-index: 10;
    p {
      font-size: 2rem !important;

      color: white;
    }
  }
  &__child {
    grid-area: child;
    padding: 2rem 2rem;

    display: flex;
    box-sizing: border-box;
    max-width: 100%;

    flex-direction: column;
    background: var(--container-background-color);
  }
  &__content {
    display: grid;
    box-sizing: border-box;
    z-index: 1;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 0.5fr 1fr;
    gap: 1rem;
    grid-template-areas: "side main main" "side child child" "side child child" ". child child";
    @media screen and (max-width: 750px) {
      grid-template-columns: 1fr !important;
      grid-template-rows: 1fr !important;
      grid-template-areas: "side" "main" "child" !important;
    }

    &--shop {
      grid-template-areas: "side main main" "child child child" "child child child";
    }
  }
  &__nav {
    @media screen and (max-width: 750px) {
      display: none;
    }
  }
  &__side {
    grid-area: side;
    @media screen and(min-width:751px) {
      transform: translateY(-50px);
    }
    z-index: 1;
  }
  &__desc {
    grid-area: main;
    @media screen and(min-width:751px) {
      transform: translateY(-50px);
    }
  }
  &__image {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;

    @media screen and (min-width: 751px) {
      top: 40px;
    }
    background: white;
    display: flex;
    height: 30rem;
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and(max-width:750px) {
      background-size: contain;
    }
    // @media screen and (max-width: 1100px) {
    //   max-width: var(--desktop-width);
    // }
  }
}
</style>

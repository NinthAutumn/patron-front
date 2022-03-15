<template>
  <div class="creator-page page-container">
    <div class="creator-page__container container-padding">
      <div class="creator-page__content">
        <creator-profile-card
          :creator="creator"
          :user="user"
        ></creator-profile-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      creator: "creator/getCreator",
      user: "auth/getAuth",
    }),
  },
  async asyncData({ store }) {
    await store.dispatch("creator/fetchCreator");
  },
};
</script>

<style lang="scss">
</style>

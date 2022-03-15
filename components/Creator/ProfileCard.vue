<template>
  <div class="creator-profile">
    <div class="creator-profile__container">
      <div class="creator-profile__green"></div>
      <div
        class="creator-profile__header flex flex--col flex--align flex--center"
      >
        <div class="creator-profile__avatar">
          <img
            :src="user.avatar||require('~/assets/img/default_profile.svg')"
            height="100"
            width="100"
          />
        </div>
        <div class="creator-profile__detail">
          <h1>{{creator.name}}</h1>
          <p></p>
        </div>
      </div>
      <h3>Payment Methods</h3>
      <div class="creator-profile__methods">
        <button-card
          v-if="!creator.stripe_account_id"
          color="secondary"
          @click="stripeHandler"
          :icon="{ prefix: 'fab', iconName: 'cc-stripe' }"
        >Connect To Stripe</button-card>
      </div>

      <h3>Projects</h3>
      <div class="creator-profile__projects">
        <creator-project
          :project="project"
          :key="project.id"
          v-for="project of creator.projects"
        ></creator-project>
      </div>
      <div class="creator-profile__add">
        <div
          class="button button--normal button--secondary button--very-round"
          @click="add_project=true"
        >
          <fa
            icon="plus"
            style="margin-right:2rem;"
          ></fa>New Project
        </div>
      </div>
    </div>
    <div
      class="dialog dialog__container"
      v-if="add_project"
    >
      <div
        class="dialog__close"
        @click="add_project=false"
      ></div>
      <div
        class="dialog__content"
        style="max-width:50rem;max-height:100rem;"
      >
        <div class="dialog__header">
          <div class="flex flex--right flex--align">
            <div
              class="button button--close"
              @click="add_project=false"
            >
              <fa icon="times"></fa>
            </div>
          </div>
        </div>
        <project-form @close="add_project=false"></project-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    creator: Object,
    user: Object,
  },
  data: () => ({
    add_project: false,
  }),
  methods: {
    async stripeHandler() {
      const res = await this.$http.$get(`/v1/creators/stripe/link`);
      // return;
      // window.location.href = res.url;
    },
  },
};
</script>

<style lang="scss">
.creator-profile {
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  &__add {
    @media screen and (min-width: 751px) {
      display: flex;
      justify-content: flex-end;
    }
  }
  &__projects {
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    @media screen and (max-width: 750px) {
      grid-template-columns: repeat(1, 1fr);
    }
    gap: 1rem;
  }
  &__container {
    padding: 2rem;
    background: var(--container-background-color);
    padding-top: 5rem;
    position: relative;
    height: 100%;
  }
  &__green {
    top: 0;
    content: "";
    left: 0;
    z-index: 0;
    height: 7rem;
    width: 100%;
    position: absolute;
    background: var(--success);
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
  }
  @media screen and (min-width: 751px) {
    &__header {
      //   position: absolute;
      //   top: 3.5rem;
      width: 100%;
      //   left: 0;
    }
  }
  &__header {
    z-index: 1;
  }

  &__avatar {
    border-radius: 10rem;
    z-index: 1;

    overflow: hidden;
  }
}
</style>

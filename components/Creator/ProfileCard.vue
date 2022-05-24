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
      <h3>Fiat Payment Methods</h3>
      <div class="creator-profile__methods">
        <div class="creator-profile__method">
          <button-card
            v-if="!creator.payout_methods.filter(item=>!!item).find(item=>item.type=='stripe')"
            color="secondary"
            @click="stripeHandler"
            :icon="{ prefix: 'fab', iconName: 'cc-stripe' }"
          >Connect To Stripe</button-card>
          <button-card
            v-else
            color="secondary"
            @click="gotoDashboard"
            :icon="{ prefix: 'fab', iconName: 'cc-stripe' }"
          >Stripe Dashboard</button-card>
        </div>
      </div>
      <h3>Crypto Payment Methods</h3>

      <div class="creator-profile__cryptos">
        <div
          class="creator-profile__crypto"
          v-for="crypto of cryptos"
          :key="crypto.id"
        >
          <div class="creator-profile__qr">
            <utility-qr-card :dataText="crypto.external_id"></utility-qr-card>
          </div>
          <div
            class="creator-profile__crypto-name"
          >{{crypto.meta.name}}({{crypto.meta.network}})</div>
          <div class="creator-profile__crypto-address">{{crypto.external_id}}</div>
          <div class="flex flex--align flex--center">
            <div
              class="button button--close"
              @click="removeMethodHandler(crypto.id)"
            >
              <fa icon="minus"></fa>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex--align">
        <div
          class="button button--primary button--normal button--very-round"
          @click="crypto_form=true"
        >
          <fa
            icon="plus"
            style="margin-right:2rem;"
          ></fa>Add Crypto Method
        </div>
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
      v-if="crypto_form"
    >
      <div
        class="dialog__close"
        @click="crypto_form=false"
      ></div>
      <div class="dialog__content">
        <div class="dialog__header flex flex--between flex--align">
          <h3>Add Crypto Currency</h3>
          <div
            class="button button--close"
            @click="crypto_form=false"
          >
            <fa icon="times"></fa>
          </div>
        </div>

        <creator-crypto-form @added="refreshCreator"></creator-crypto-form>
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
    crypto_form: false,
  }),
  computed: {
    cryptos() {
      return this.creator.payout_methods
        .filter((item) => !!item)
        .filter((item) => item.type == "crypto");
    },
  },
  methods: {
    refreshCreator() {
      this.$emit("refresh");
    },
    async removeMethodHandler(payout_id) {
      await this.$http.$delete(`/v1/creators/payout-method/${payout_id}`);
      this.refreshCreator();
    },
    async gotoDashboard() {
      const res = await this.$http.$get(`/v1/creators/stripe/login-link`);
      // return;
      console.log(res);
      window.location.href = res.url;
    },
    async stripeHandler() {
      const res = await this.$http.$get(`/v1/creators/stripe/link`);
      // return;
      window.location.href = res.url;
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
  &__crypto {
    max-width: 25rem;
    font-size: 1.6rem;
    padding: 1rem;
    box-shadow: var(--very-small-box-shadow);
    border-radius: 0.5rem;
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
  &__crypto-address {
    overflow: hidden;
    max-width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: --webkit-box;
  }
  &__cryptos {
    display: flex;
    flex-wrap: wrap;
    margin-right: -1rem;
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

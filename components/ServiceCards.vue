<template>
  <div class="service-cards">
    <nuxt-link
      class="service-cards__card"
      v-for="card of cards"
      :key="card.title"
      tag="div"
      :to="card.link"
    >
      <h4>{{card.title}}</h4>
      <img
        :src="card.img"
        height="90"
        alt
      />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: this.$t("basic.donation"),
          img: require("~/assets/svg/tip-big.svg"),
          class: "tip",
          link: "/pricing#tip",
        },
        {
          title: this.$t("basic.subscription"),
          img: require("~/assets/svg/sub-big.svg"),
          class: "sub",
          link: "/pricing#sub",
        },
        {
          title: this.$t("basic.store"),
          img: require("~/assets/svg/shop-big.svg"),
          class: "sub",
          link: "/pricing#shop",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.service-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(15rem, 25rem));
  @media screen and (max-width: 1038px) {
    grid-gap: 20px;
  }
  width: 100%;
  justify-content: space-between;
  //   justify-content: space-between;

  h4 {
    font-size: 2rem;
    text-decoration: none;
  }
  img {
    align-self: flex-end;
    transform: scale(1.4) translateY(10px);
    transition: 200ms;
  }
  &__card {
    &:hover {
      img {
        transition: 200ms;
        transform: scale(1.2) translateY(10px);
      }
    }
    @include themify($themes) {
      background: themed("containerBackgroundColor");
      //   box-shadow: var(--very-small-box-shadow);
    }
    cursor: pointer;
    padding: 1rem;
    border-radius: 3rem;
    height: 11rem;
    // width: 100%;
    // max-width: 25rem;
    display: flex;
    flex-direction: column;
  }
}
</style>

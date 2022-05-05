<template>
  <div class="user-subscription user-subscription__container">
    <div class="user-subscription__banner">
      <img
        :src="subscription.project.banner"
        alt="project banner"
        @click="$router.push(`/${subscription.project.page_url}`)"
      />
    </div>
    <div class="user-subscription__header">
      <div class="user-subscription__title">Tier: {{subscription.tier.title}}</div>
      <div
        class="user-subscription__pricing"
      >${{subscription.tier.price}} / month</div>
    </div>
    <div class="user-subscription__footer">
      <div
        class="user-subscription__project"
      >Project: {{subscription.project.name}}</div>
      <div
        class="user-subscription__expire"
      >Expire At: {{ $dateFns.format(new Date(subscription.expiry_date)) }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subscription: Object,
  },
};
</script>

<style lang="scss">
.user-subscription {
  max-width: 50rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
  }
  &__banner {
    display: grid;
    place-content: center;
    max-width: 100%;
    img {
      max-width: 100%;
    }
  }
  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.4rem;
    opacity: 0.8;
    margin-top: 1rem;
  }
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: var(--box-shadow);
}
</style>

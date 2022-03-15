<template>
  <div class="search-desktop">
    <div class="search-desktop__input">
      <div class="search-desktop__icon">
        <fa icon="search"></fa>
      </div>
      <input
        type="text"
        :placeholder="$t('form.search_placeholder')"
      />
    </div>
    <button-card size="big">{{$t('basic.search')}}</button-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.search-desktop {
  display: flex;
  width: 100%;
  margin: 2rem 0;
  &__input {
    display: flex;
    background: #f0f0f0;
    border-radius: 10rem;
    color: var(--primary);
    margin-right: 2rem;
    flex-grow: 1;
  }

  &__icon {
    height: 4rem;
    width: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }
  &__input input::placeholder {
    color: var(--primary);
    opacity: 0.8;
  }
  &__input input {
    flex-grow: 1;
    background: none;
    border: none;
    font-size: 1.8rem;
    color: var(--primary);
    padding: 0 2rem;
    font-weight: bold;
  }
  &__input input:active,
  &__input input:focus {
    outline: none;
  }
}
</style>


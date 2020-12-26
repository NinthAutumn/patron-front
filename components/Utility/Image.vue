<template>
  <div class="lazy-img">
    <div
      class="lazy-img__container"
      :class="{ 'lazy-img__container--aspect': aspectRatio !== 1 }"
      :style="{
        ...style,
        maxWidth: maxWidth + 'rem',
        width,
        height: height || '',
        'lazy-img__img--shadow': shadow > 0,
      }"
    >
      <!-- <picture class="lazy"> -->
      <!-- <source :media="src.media" :srcset="src.src" v-for="(src,index) in list" :key="index" /> -->
      <img
        class="lazy-img__img"
        :class="imgClasses"
        :src="nav ? src : lazySrc"
        @error="onError"
        ref="image"
        loading="lazy"
        :style="{ maxWidth: maxWidth, minWidth: minWidth }"
      />
      <!-- </picture> -->
    </div>
  </div>
</template>

<script >
/*
  @param src
    image url pointing at the source of the image
  @param width
    image width
  @param list
    image alternative sources with its media size such as (max-width) as media and image url as src


*/

export default {
  props: {
    src: {
      type: String,
    },
    width: Number,
    list: [Array, Object],
    height: String,
    maxWidth: [Number, String],
    maxHeight: Number,
    lazySrc: [String, Object],
    error: String,
    aspectRatio: {
      type: Number,
      default: 1,
    },
    minWidth: [Number, String],
    avatar: Boolean,
  },
  // setup({ aspectRatio, error }) {
  //   const lazy = ref<HTMLImageElement | null>(null)
  //   let style = {}
  //   function handler(observer: IntersectionObserver, isIntersecting: boolean) {}
  //   onMounted(() => {
  //     if (aspectRatio !== 1) {
  //       style = {
  //         '--aspect-ratio': aspectRatio
  //       }
  //     }
  //     let observer = new IntersectionObserver(entries => {
  //       const isIntersecting = Boolean(
  //         entries.find(entry => entry.isIntersecting)
  //       )
  //       handler(observer, isIntersecting)
  //     })
  //     if (lazy.value) {
  //       observer.observe(lazy.value)
  //     }
  //   })
  //   function onError(e: ErrorEvent) {
  //     if (lazy.value) {
  //       if (error) return (lazy.value.src = error)
  //       lazy.value.src = require('~/assets/img/error.png')
  //     }
  //   }
  //   return {
  //     style,
  //     target: ''
  //   }
  // }
  // data: () => ({
  //   style: {},
  //   target: ''
  // }),
  // methods: {
  //   onIntersection(imageEntites: ImageData) {}
  // },
  // mounted() {

  // }
};
</script>

<style lang="scss" scoped>
.lazy-img {
  [style*="--aspect-ratio"] > :first-child {
    width: 100%;
  }
  [style*="--aspect-ratio"] > img {
    height: auto;
  }
  @supports (--custom: property) {
    [style*="--aspect-ratio"] {
      position: relative !important;
    }
    [style*="--aspect-ratio"]::before {
      content: "";
      display: block;
      padding-bottom: calc(100% / (var(--aspect-ratio)));
    }
    [style*="--aspect-ratio"] > :first-child {
      position: absolute !important;
      top: 0;
      left: 0;
      height: 100%;
    }
  }
  $self: &;
  &__container {
    overflow: hidden;
    position: relative;
    &--aspect {
    }
    #{$self}__img {
      position: relative;
      // background: white;
      width: 100%;
      height: 100%;
      &--avatar {
        border-radius: 50%;
      }
    }
  }
}
</style>

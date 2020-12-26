import Vue from 'vue'

Vue.mixin({
  layout(ctx) {
    return ctx.isMobile ? 'MobileNav' : 'DesktopNav'
  }
})

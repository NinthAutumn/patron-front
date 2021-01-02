<template></template>

<script>
export default {
  layout(ctx) {
    return ctx.isMobile ? "Mobile/project" : "DesktopNav";
  },
};
</script>

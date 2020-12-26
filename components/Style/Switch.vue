<template>
  <div class="switch-main">
    <span
      class="switch-label switch-label--left"
      :class="{ 'switch-label--disabled': boolean }"
      v-if="labelLeft !== 'P'"
      >{{ labelLeft }}</span
    >
    <fa
      v-else
      class="switch-label switch-label--left"
      :class="{ 'switch-label--disabled': boolean }"
      :icon="{ iconName: 'paypal', prefix: 'fab' }"
    ></fa>
    <label class="switch">
      <input v-model="boolean" type="checkbox" />
      <span class="slider round"></span>
    </label>
    <span
      v-if="label !== 'S'"
      class="switch-label"
      :class="{ 'switch-label--disabled': !boolean }"
      >{{ label }}</span
    >
    <fa
      v-else
      class="switch-label"
      :class="{ 'switch-label--disabled': !boolean }"
      :icon="{ iconName: 'stripe-s', prefix: 'fab' }"
    ></fa>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      default: "$",
      type: String,
    },
    labelLeft: {
      default: "",
      type: String,
    },
    value: Boolean,
  },
  data: () => ({
    boolean: false,
  }),
  watch: {
    boolean(value) {
      this.$emit("input", value);
    },
  },
  mounted() {
    this.boolean = this.value;
  },
};
</script>

<style lang="scss" scoped>
.switch-main {
  display: flex;
  align-items: center;
}
label {
  margin-bottom: 0;
}
.switch-label {
  font-size: 1.4rem;
  font-weight: bold;
  margin-left: 1rem;
  color: $secondary;

  &--left {
    margin-left: 0rem !important;
    margin-right: 1rem;
  }
  &--disabled {
    opacity: 0.5;
  }
}
.switch-center {
  display: flex;
  justify-content: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 33.88px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

input:checked + .slider {
  background-color: $secondary;
}

input:focus + .slider {
  box-shadow: 0 0 1px $secondary;
}

input:checked + .slider:before {
  transform: translateX(13.5px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

<template>
  <teleport to="#tel" :disabled="disable"
    ><slot></slot>
    <button @click="disable = !disable">change tele state</button>
  </teleport>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const disable = ref(false);

    const isShow = () => {
      disable.value = false;
    };

    const isHide = () => {
      disable.value = true;
    };
    return { disable, isShow, isHide };
  }
};
</script>

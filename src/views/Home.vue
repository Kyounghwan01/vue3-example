<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <button @click="testCLick">inc</button>
  </div>
</template>

<script>
import { defineComponent, onMounted, getCurrentInstance, computed } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld
  },
  setup() {
    const { proxy } = getCurrentInstance();
    const testCLick = () => proxy.$store.commit("Counter/setCounter", 222);
    onMounted(() => {
      // composition api 사용시 global state
      console.log(proxy.$store.getters["Counter/time2"], 4444); // 'bar'
    });

    const ttt = computed(() => proxy.$store.getters["Counter/time2"]);

    return { testCLick, ttt };
  },
  mounted() {
    // optional api 사용시 global state
    console.log(this.foo);
  }
});
</script>

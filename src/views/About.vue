<template>
  <div class="about">
    <TeleportExample />
    <h1>This is an about page</h1>
    {{ counter }}
    <p>{{ test }}</p>
    <p>ddd{{ tt }}</p>
    <button @click="inc">inc</button>

    <button @click="moduleAInc">module inc</button>
    <p>{{ doubleCount }}</p>

    <button @click="globalFunc">testsets</button>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TeleportExample from "@/components/teleport/TeleportExample";
export default {
  components: {
    TeleportExample
  },
  setup() {
    const store = useStore();
    const counter = computed(() => store.state.Counter.counter);
    const tt = computed(() => store.state.moduleA.count);
    const test = computed(() => store.getters["Counter/time2"]);
    const doubleCount = computed(() => store.getters["moduleA/doubleCount"]);
    const inc = () => store.commit("Counter/setCounter", counter.value + 1);

    const moduleAInc = () => store.commit("moduleA/increment");

    const globalFunc = () => store.dispatch("moduleA/other");

    return {
      globalFunc,
      counter,
      inc,
      tt,
      test,
      moduleAInc,
      doubleCount
    };
  }
};
</script>

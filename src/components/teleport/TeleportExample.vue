<template>
  <div style="border: 1px solid">
    <h1>Teleport Example</h1>
    <!-- disabled false이면 텔레포트 div로 true면 import된 컴포넌트로 들어감 -->
    <teleport to="#destination" :disabled="disableTeleport">
      <p>It should be outside TeleportExample component.</p>
    </teleport>
    <teleport to="#destination">
      <p>Teleport text 2</p>
    </teleport>
    <button @click="disableTeleport = !disableTeleport">Toggle Teleport</button>

    <teleport to="#destination">
      <!-- 자식 엘리먼트 접근 -->
      <VModal ref="modal">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor itaque
        totam esse eius quia? Temporibus odit optio consequuntur. Debitis ut
        nesciunt accusamus quasi. Adipisci voluptate pariatur nam deleniti, quas
        similique!
      </VModal>
    </teleport>
    <button @click="showModal">Show Modal</button>
  </div>
</template>

<script>
import VModal from "./VModal";
import { ref } from "vue";
export default {
  components: {
    VModal
  },
  setup() {
    const teleport = ref("destination");
    const disableTeleport = ref(false);
    const modal = ref(null);
    function showModal() {
      modal.value.show();
    }
    return {
      disableTeleport,
      modal,
      showModal,
      teleport
    };
  }
};
</script>

<style></style>

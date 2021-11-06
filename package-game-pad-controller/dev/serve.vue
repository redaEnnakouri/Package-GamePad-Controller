<script>
import { defineComponent } from 'vue';
import PackageGamePadController from '@/package-game-pad-controller.vue';

export default defineComponent({
  name: 'ServeDev',
  components: {
    PackageGamePadController
  }
});
</script>

<template>
  <div id="app">
    <package-game-pad-controller />
  </div>
</template>

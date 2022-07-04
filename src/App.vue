<template>
  <div>
    <Son v-if="isShow" />
    <button @click="isShow = !isShow">点击销毁</button>
  </div>
</template>

<script>
import Son from "./components/Son.vue";
export default {
  name: "App",
  data() {
    return {
      isShow: true,
    };
  },
  components: {
    Son,
  },
};
</script>

<style>
</style>
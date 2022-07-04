<template>
  <div>
    <Ref ref="ref" />
  </div>
</template>

<script>
import Ref from "./components/Ref.vue";
export default {
  name: "App",
  components: {
    Ref,
  },
  mounted() {
    console.log(this.$refs.ref);
  },
};
</script>

<style>
</style>
<template>
  <div>
    <div ref="div">通过ref获取</div>
    <div ref="num">{{ num }}</div>
    <button @click="getNum">点击获取num</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  name: "Ref",
  mounted() {
    console.log(this.$refs.div);
  },
  methods: {
    getNum() {
      this.num++;
      console.log(this.num);
      console.log(this.$refs.num.innerHTML);
      this.$nextTick(() => {
        console.log(this.$refs.num.innerHTML);
      });
    },
  },
};
</script>

<style>
</style>
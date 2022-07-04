<template>
  <div>
    <button @click="fn" ref="btn">点击获取sum</button>
    <button @click="sum++">点击sum++{{ sum }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sum: 0,
      timer: null,
    };
  },
  methods: {
    fn() {
      console.log(this.sum);
    },
  },
  beforeCreate() {
    console.log(this.sum);
  },
  created() {
    console.log(this.sum);
  },
  beforeMount() {
    console.log(this.$refs.btn);
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log(1);
    }, 1000);
    console.log(this.$refs.btn);
  },
  beforeUpdate() {
    console.log(this.sum);
  },
  updated() {
    console.log(this.sum);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  destroyed() {
    console.log(this);
  },
};
</script>

<style>
</style>
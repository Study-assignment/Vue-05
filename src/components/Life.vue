<template>
  <div>
    <h1>1. 生命周期</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello Vue',
    };
  },
  //创建阶段
  //创建前
  beforeCreate() {
    console.log('beforeCreate');
    console.log(this.msg);
  },
  //created   创建结束后
  created() {
    console.log('created');
    console.log(this.msg); //可以获取到data中得数据
  },
  //挂载阶段
  beforeMount() {
    console.log('beforeMount');
  },
};
</script>

<style></style>

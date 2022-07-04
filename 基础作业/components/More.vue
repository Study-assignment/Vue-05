<template>
  <div>
    <p>1. 获取原生DOM元素</p>
    <h1 id="h" ref="myH">获取原生DOM元素</h1>

    <p>2. vue更新DOM是异步的</p>
    <p ref="myP">{{ count }}</p>
    <button @click="btn">点击count+1, 马上提取p标签内容</button>
  </div>
</template>

<script>
export default {
  beforeMount() {
    console.log(this.$refs.myP)
    this.$nextTick(() => {
      console.log(this.$refs.myP)
    })
  },
  mounted: {
    btn() {
      this.count++
      console.log(this.count)
      //   console.log(this.$refs.myP.innerText)

      // vuedom是异步更新的
      // DOM更新完会挨个触发$nextTick里的函数体
      this.$nextTick(() => console.log(this.$refs.myP.innerHTML)) //延时触发
    },
  },
}
</script>

<style></style>

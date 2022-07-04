<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue',
      timer: null,
    }
  },

  // 初始化阶段
  beforeCreate() {
    // 初始化之前，读取不到属性
    console.log(this.msg) // undefined
  },
  created() {
    // 初始化完成，数据代理完成
    console.log(this.msg) // Hello Vue
    this.timer = setInterval(() => {
      console.log('123456')
    }, 1000)
  },

  // 挂载阶段
  beforeMount() {
    // 挂载之前，虚拟dom完成，未转换成真实DOM
    console.log(document.querySelector('h1')) // null
  },
  mounted() {
    // 页面挂载完成 可以获取到真实DOM
    console.log(document.querySelector('h1')) // h1
  },

  // 更新阶段
  beforeUpdate() {
    // 数据更新完成 ，页面未更新
    console.log(this.msg)
    console.log(document.querySelector('h1'))
  },
  updated() {
    // 页面更新完成
    console.log(this.msg)
    console.log(document.querySelector('h1'))
  },

  // 销毁阶段
  beforeDestroy() {
    // 页面销毁之前，关闭定时器，解绑事件，取消订阅
    clearInterval(this.timer)
  },
  destroyed() {
    // 生命周期最后一个钩子，可以获取到vue实例
    console.log(this.msg)
  },
}
</script>

<style></style>

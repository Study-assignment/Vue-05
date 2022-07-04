<template>
  <div>
    <p>生命周期</p>
    <p id="myP">{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello Vue!',
      arr: [1, 2, 3, 4, 5, 6, 7],
      timer: null,
    }
  },
  beforeCreate() {
    console.log('beforeCreate===执行')
    // 是无法访问 data里数据 methods的方法no
    console.log(this.msg)
  },
  created() {
    console.log('created===执行')
    console.log(this.msg)

    this.timer = setInterval(() => {
      console.log(111)
    }, 1000)
  },

  beforeMount() {
    // 可以操作dom吗 不可以
    console.log('beforeMount===执行')
    console.log(document.getElementById('myP'))
  },
  mounted() {
    // 可以操作dom吗 可以
    console.log('mounted===执行')
    // 适用场景： 初始化操作，可以操作dom
  },

  beforeUpdate() {
    console.log('beforeUpdate===执行')
    console.log(this.arr[4])
    // 数据更新 页面不更新
  },
  updated() {
    console.log('updated===执行')
  }, // 数据更新 页面更新

  beforeDestroy() {
    console.log('beforeDestroy===执行')
    console.log(this.msg)
    clearInterval(this.timer)
    // 做一些收尾的工作
    // 清除定时器， 清除全局的函数
  },
  destroyed() {
    console.log('destroyed===执行')
  },
}
</script>

<style></style>

<template>
  <div>
    <input ref="myInp" type="text" placeholder="这是一个输入框" v-if="isShow" />
    <button v-else @click="btn">点击我进行搜索</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    btn() {
      this.isShow = true
      //   console.log(this.$refs.myInp) // undefined
      //vue dom 异步更新
      //this.$refs.myInp.focus()

      this.$nextTick(() => {
        console.log(this.$refs.myIn)
        this.$refs.myInp.focus()
      })
    },
  },
}
</script>

<style></style>

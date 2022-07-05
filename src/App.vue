<template>
  <div>
    <List
      :list="list"
      @search="getList"
      @delFn="delFnFn"
      @addMax="addMaxFn"
      @detailFn="detailFnFn"
      @click="addBody"
      @remClick="removeBody"
    />
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  data() {
    return {
      list: [],
    }
  },
  components: {
    List,
  },
  created() {
    this.getList()
  },
  methods: {
    getList(params = {}) {
      this.$axios({
        url: '/api/getbooks',
        params: params,
      }).then((res) => {
        this.list = res.data.data
      })
    },
    delFnFn(id) {
      this.$axios({
        url: '/api/delbook',
        params: { id },
      }).then(() => {
        this.getList()
      })
    },
    addMaxFn(obj) {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...obj,
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
        },
      }).then((res) => {
        alert(res.data.msg)
        if (res.data.status == 201) {
          this.getList()
        }
      })
    },
    detailFnFn(id) {
      this.$axios({
        url: '/api/getbooks',
        params: { id },
      }).then((res) => {
        const info = res.data.data && res.data.data[0]
        alert(
          `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
        )
      })
    },
    addBody() {
      document
        .querySelector('body')
        .setAttribute('style', 'background-color:black;')
    },
    removeBody() {
      document.querySelector('body').removeAttribute('style')
    },
  },
}
</script>

<style></style>

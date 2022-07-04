<template>
  <div class="App">
    <h2>图书管理列表</h2>
    <CreateBooks></CreateBooks>
    <SerchBooks @serchBook="serchBookFn" @isNull="isNullFn"></SerchBooks>
    <BookMain :list="isShow"></BookMain>
  </div>
</template>

<script>
import SerchBooks from './components/SerchBooks.vue'
import CreateBooks from './components/CreateBooks.vue'
import BookMain from './components/BookMain.vue'
export default {
  data() {
    return {
      list: [],
      isShow: [],
    }
  },
  components: {
    CreateBooks,
    SerchBooks,
    BookMain,
  },
  created() {
    this.getBookList()
  },
  methods: {
    // 获取图书列表
    getBookList() {
      this.$axios({
        url: '/api/getbooks',
      })
        .then((res) => {
          if (res.status !== 200) return alert(res.msg)
          this.list = res.data.data
          this.isShow = this.list
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 搜索图书
    serchBookFn(bname) {
      this.isShow = this.list.filter((item) => item.bookname === bname)
      if (this.isShow.length === 0) {
        this.isShow = this.list
        alert('未查找到该书，请重新输入')
      }
    },
    // 未搜到图书，默认显示
    isNullFn() {
      this.isShow = this.list
    },
  },
}
</script>

<style lang="less">
.App {
  text-align: center;
  width: 1100px;
  margin: 0 auto;
}
</style>

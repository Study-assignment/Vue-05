<template>
  <div id="app">
    <findBook @findBook="findBookFN"></findBook>
    <table class="table table-bordered">
      <bookTitle></bookTitle>
      <bookMain :list="list" @details="detailsfn"></bookMain>
    </table>
    <addBook></addBook>
  </div>
</template>

<script>
import bookTitle from './components/title.vue'
import bookMain from './components/main.vue'
import addBook from './components/addbook.vue'
import findBook from './components/findBook.vue'
export default {
  name: 'App',
  data() {
    return {
      list: [],
      list1: [],
    }
  },
  created() {
    this.$axios({
      url: '/api/getbooks',
    }).then((res) => {
      console.log(res.data.data)
      this.list = res.data.data
       this.list1 = res.data.data
    })
  },
  components: {
    bookTitle,
    bookMain,
    addBook,
    findBook,
  },
  methods: {
    detailsfn(id) {
      let ind = this.list.findIndex((item) => item.id == id)
      alert(
        `作者：${this.list[ind].author}\n书名：${this.list[ind].bookname}\n出版商：${this.list[ind].publisher}`
      )
    },
    findBookFn(val) {
      let arr = this.list.filter((item) => item.bookname == val)
      if (arr.length == 0) {
        this.list = this.list1
        return alert('查无此书')
      }
      this.list = arr
    },
  },
}
</script>

<style></style>

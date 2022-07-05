<template>
  <div>
    <div class="app">
      <input
        type="text"
        class="inp"
        placeholder="搜索-书本名称"
        v-model="bookname"
        @keyup.enter="findBook"
      />
      <button class="add" @click="isAddFn">新增</button>
      <BookList :books="books" @seebook="seeFn" />
      <AddBooks v-show="isAdd" @add="addBook" @esc="escAdd" />
      <Details v-show="isSee" :seebook="seebook" />
    </div>
  </div>
</template>

<script>
import Details from "./components/Details";
import AddBooks from "./components/AddBooks";
import BookList from "./components/BookList";
export default {
  name: "App",
  data() {
    return {
      books: "",
      bookname: "",
      isAdd: false,
      isSee: false,
      seebook: "",
    };
  },
  components: {
    AddBooks,
    BookList,
    Details,
  },
  methods: {
    //封装一个渲染页面的函数
    initBooks() {
      this.$axios({
        url: "/api/getbooks",
        method: "GET",
      }).then(
        (res) => {
          this.books = res.data.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    //搜索具体书名
    findBook() {
      this.$axios({
        url: "/api/getbooks",
        method: "GET",
        params: {
          bookname: this.bookname,
        },
      }).then(
        (res) => {
          console.log(res);
          this.books = res.data.data;
        },
        (err) => {
          console.log(err);
        }
      );
    },
    //打开遮罩层
    isAddFn() {
      this.isAdd = true;
    },
    //发起添加请求
    addBook(val) {
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: { ...val },
      }).then(
        (res) => {
          this.isAdd = false;
          this.initBooks();
        },
        (err) => {
          alert(err.data.msg);
        }
      );
    },
    //关闭添加页面
    escAdd() {
      this.isAdd = false;
    },
    //获取详情请求
    seeFn(id) {
      this.$axios({
        url: "/api/getbooks",
        params: {
          id,
        },
      }).then(
        (res) => {
          this.seebook = res.data.data[0];
          this.isSee = true;
        },
        (err) => {
          alert(err.msg);
        }
      );
    },
  },
  created() {
    //虚拟DOM创建完成后发起ajax准备使用数据渲染页面
    this.initBooks();
  },
  watch: {
    //监听输入框，防止搜索之后没有数据又回不到初始状态
    bookname: {
      deep: true,
      handler() {
        if (!this.bookname) {
          this.initBooks();
        }
      },
    },
  },
};
</script>

<style scoped>
.app {
  position: relative;
  width: 1200px;
  margin: 0 auto;
}
.inp {
  width: 200px;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 15px;
}
.add {
  display: flex;
  float: right;
  margin-right: 10px;
  height: 30px;
  width: 60px;
  margin-top: 15px;
  line-height: 30px;
  padding-left: 15px;
  background-color: rgb(34, 188, 248);
  border: rgb(34, 188, 248);
  color: aliceblue;
}
</style>
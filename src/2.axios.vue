<template>
  <div>
    <button @click="getBooks">点击获取所有书籍</button>
    <div>
      <span>请输入书名: <input type="text" v-model="bookname" /> </span>
      <button @click="findBook">获取书书籍</button>
    </div>
    <div>
      <span>请输入书名: <input type="text" v-model="Obj.bookname" /> </span>
      <span>请输入作者: <input type="text" v-model="Obj.author" /> </span>
      <span>请输入出版社: <input type="text" v-model="Obj.publisher" /> </span>
      <button @click="addFn">添加书籍</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      bookname: "",
      Obj: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },
  methods: {
    getBooks() {
      axios({
        url: "http://123.57.109.30:3006/api/getbooks",
      }).then((res) => {
        console.log(res);
      });
    },
    findBook() {
      axios({
        url: "http://123.57.109.30:3006/api/getbooks",
        params: {
          bookname: this.bookname,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    addFn() {
      axios({
        url: "http://123.57.109.30:3006/api/addbook",
        method: "POST",
        data: {
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
          ...this.Obj,
        },
      }).then(
        (res) => console.log(res),
        (err) => console.log(err)
      );
    },
  },
};
</script>

<style>
</style>
<template>
  <div>
    <div class="info">
      <input
        type="text"
        placeholder="搜索书本"
        @keyup.enter="searchBookList"
        v-model="SearchBookName"
      />
      书名：<input type="text" v-model="addBook.bookname" /> 作者：<input
        type="text"
        v-model="addBook.author"
      />
      出版社：<input type="text" v-model="addBook.publisher" />
      <button class="add" @click="addFn">新增</button>
    </div>
    <h1>图书管理列表</h1>
    <h1>图书</h1>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in bookList" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td><a href="#" @click="delFn(item.id)">删除详情</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      bookList: axios({
        url: 'http://www.liulongbin.top:3006/api/getbooks',
        method: 'GET',
        params: {
          data: this.bookList,
        },
      }).then((res) => {
        console.log(res);
        //将booklist得数据传到
        this.bookList = res.data.data;
      }),
      SearchBookName: [],
      addBook: {
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  methods: {
    addFn() {
      axios({
        url: 'http://www.liulongbin.top:3006/api/addbook',
        method: 'POST',
        data: {
          ...this.addBook,
        },
      }).then((res) => {
        console.log(res);
        // this.addBook = res.data.data;
      });
    },
    searchBookList() {
      axios({
        url: 'http://www.liulongbin.top:3006/api/getbooks',
        method: 'GET',
        params: {
          bookname: this.SearchBookName,
        },
      }).then((res) => {
        this.bookList = res.data.data;
      });
    },
    delFn(id) {
      axios({
        url: 'http://www.liulongbin.top:3006/api/delbook',
        method: 'GET',
        params: {
          id: id,
        },
      }).then((res) => {
        console.log(res);
        this.searchBookList();
      });
    },
  },
};
</script>

<style></style>

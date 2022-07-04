<template>
  <tr>
    <td>{{ item.id }}</td>
    <td>{{ item.bookname }}</td>
    <td>{{ item.author }}</td>
    <td>{{ item.publisher }}</td>
    <td>
      <a href="javaScript:;" @click="del(item.id)">删除</a>
      <a href="javaScript:;" @click="info">详情</a>
    </td>
  </tr>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    del(id) {
      this.$axios({
        url: '/api/delbook',
        params: { id },
      }).then((res) => {
        alert(res.data.msg)
        this.$parent.$parent.getBookList()
      })
    },
    info() {
      alert(`
      图书编号：${this.item.id}
      图书名称: ${this.item.bookname}
      图书作者：${this.item.author}
      图书出版社：${this.item.publisher}
      `)
    },
  },
}
</script>

<style scoped>
a {
  margin: 5px;
  text-decoration: none;
}
</style>

<template>
  <div>
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
      <tr v-for="item in books" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.bookname }}</td>
        <td>{{ item.author }}</td>
        <td>{{ item.publisher }}</td>
        <td class="aa">
          <a href="javascript:;" @click="del(item.id)">删除</a>
          <a href="javascript:;" @click="see(item.id)">详情</a>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="!books[0]">
      <tr>
        <td colspan="5">没有查到书籍哦！！！</td>
      </tr>
    </tfoot>
  </div>
</template>

<script>
export default {
  name: "BookList",
  data() {
    return {};
  },
  props: ["books"],
  methods: {
    del(id) {
      this.$axios({
        url: "/api/delbook",
        method: "GET",
        params: {
          id,
        },
      }).then(
        (res) => {
          alert(res.data.msg);
          this.$parent.initBooks();
        },
        (err) => {
          alert(err.msg);
        }
      );
    },
    see(id) {
      this.$emit("seebook",id);
    },
  },
};
</script>

<style scope>
thead {
  background-color: skyblue;
}
tbody tr:hover {
  background-color: #d2c8c8;
}

th,
td {
  border: 1px solid #d1d1d1;
  width: 240px;
  height: 30px;
  text-align: center;
}
.aa {
  display: flex;
  justify-content: space-evenly;
}
</style>
<template>
  <div id="Bigbox">
    <div class="header" v-show="!isIf">
      <h1>图书管理列表</h1>
      <input
        placeholder="搜索-书本名称"
        type="search"
        @keydown.enter="enterFn"
        v-model="bookname"
      />
      <button @click="btn">新增</button>
    </div>
    <table v-show="!isIf">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <a href="#" @click.prevent="del(item.id)">删除</a>&nbsp;&nbsp;<a
              href="#"
              @click.prevent="detail(item.id)"
              >详情</a
            >
          </td>
        </tr>
      </tbody>
      <tfoot v-if="list.length <= 0">
        <tr>
          <td colspan="5" style="text-align: center">暂无数据</td>
        </tr>
      </tfoot>
    </table>
    <AddBook v-if="isIf" @add="addFn" @hide="hideFn" />
  </div>
</template>

<script>
import AddBook from './AddBook.vue'
export default {
  components: {
    AddBook,
  },
  data() {
    return {
      bookname: '',
      isIf: false,
    }
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    enterFn() {
      const params = {}
      this.bookname ? (params.bookname = this.bookname) : ''
      this.$emit('search', params)
    },
    del(id) {
      this.$emit('delFn', id)
    },
    btn() {
      this.isIf = true
      this.$emit('click')
    },
    addFn(obj) {
      this.$emit('addMax', obj)
      this.$emit('remClick')
    },
    hideFn(val) {
      this.isIf = false
      this.$emit('remClick')
    },
    detail(id) {
      this.$emit('detailFn', id)
    },
  },
}
</script>

<style scoped>
#Bigbox {
  width: 1200px;
  margin: 0 auto;
}
#Bigbox .header input {
  width: 160px;
  height: 30px;
  margin-top: 50px;
  margin-bottom: 20px;
  border-radius: 4px;
  outline: none;
  border-color: #b8daff;
  text-align: center;
}
#Bigbox .header input::placeholder {
  text-align: center;
}
#Bigbox .header button {
  float: right;
  width: 80px;
  height: 30px;
  margin-top: 50px;
  border-color: #b8daff;
  border-radius: 4px;
}
</style>

<template>
  <table cellSpacing="0" cellPadding="0">
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
      <BookInfo v-for="item in list" :key="item.id" :item="item"></BookInfo>
    </tbody>
  </table>
</template>

<script>
import BookInfo from './BookInfo.vue'
export default {
  components: { BookInfo },
  props: ['list'],
}
</script>

<style lang="less">
table {
  width: 1100px;
  td,
  th {
    width: 80px;
    height: 30px;
    text-align: center;
    border: 1px solid #ccc;
  }
}
</style>

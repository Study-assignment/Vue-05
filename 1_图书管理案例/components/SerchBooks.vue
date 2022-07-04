<template>
  <div class="serch">
    <input
      type="text"
      placeholder="搜索--书本名称"
      v-model.trim="bookName"
      @keyup.enter="serchBook"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookName: '',
    }
  },
  methods: {
    serchBook() {
      if (this.bookName.length === 0) {
        this.$emit('isNull')
        return alert('请输入内容')
      }
      this.$emit('serchBook', this.bookName)
      this.bookName = ''
    },
  },
}
</script>

<style lang="less" scoped>
.serch {
  float: left;
  margin-bottom: 5px;
  transform: translateX(10px);
  input {
    height: 25px;
  }
}
</style>

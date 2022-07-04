<template>
  <div class="add">
    <input type="text" placeholder="书名" v-model.trim="bookInfo.bookname" />
    <input type="text" placeholder="作者" v-model.trim="bookInfo.author" />
    <input type="text" placeholder="出版社" v-model.trim="bookInfo.publisher" />
    <button @click="addbook" :disabled="isclick">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isclick: false,
      bookInfo: {
        bookname: '',
        author: '',
        publisher: '',
      },
    }
  },
  methods: {
    addbook() {
      if (
        this.bookInfo.bookname.length === 0 ||
        this.bookInfo.author.length === 0 ||
        this.bookInfo.publisher.length === 0
      ) {
        return alert('请填写完整')
      }
      this.isclick = true
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: this.bookInfo,
      }).then(
        (res) => {
          console.log(res.data)
          alert(res.data.msg)
          this.isclick = false
          this.$parent.getBookList()
        },
        (err) => {
          alert(err.data.msg)
          this.isclick = false
        }
      )
      this.bookInfo.bookname = ''
      this.bookInfo.author = ''
      this.bookInfo.publisher = ''
    },
  },
}
</script>

<style lang="less" scoped>
.add {
  input {
    margin: 5px;
    border: 1px solid #ccc;
    height: 30px;
  }
  button {
    height: 30px;
    border: 1px solid black;
    background-color: skyblue;
  }
}
</style>

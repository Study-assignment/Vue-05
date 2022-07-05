<template>
  <div id="small" style="">
    <h3>添加图书</h3>
    <input placeholder="填写图书名称" type="text" v-model="obj.bookname" />
    <br />
    <input placeholder="填写作者" type="text" v-model="obj.author" />
    <br />
    <input placeholder="填写出版社" type="text" v-model="obj.publisher" />
    <br />
    <button @click="add" class="first">确认提交</button>
    <button @click="falseAdd">取消</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    }
  },
  methods: {
    add() {
      if (
        !this.obj.bookname.trim() ||
        !this.obj.author.trim() ||
        !this.obj.publisher.trim()
      ) {
        return alert('Please enter a book message')
      }
      this.$emit('add', this.obj)
      this.$emit('hide', false)
    },
    falseAdd() {
      this.$emit('hide', false)
    },
  },
}
</script>

<style scoped>
#small {
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background-color: #578;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
#small h3 {
  padding-top: 40px;
  margin-bottom: 50px;
}
#small input {
  margin-bottom: 20px;
  width: 220px;
  height: 30px;
  border-radius: 4px;
  outline: none;
  border-color: #b8daff;
  text-align: center;
}
#small input::placeholder {
  text-align: center;
}
#small button {
  width: 80px;
  height: 30px;
  margin-top: 30px;
  border-color: #b8daff;
  border-radius: 4px;
}
.first {
  margin-right: 20px;
}
</style>

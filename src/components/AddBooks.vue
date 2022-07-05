<template>
  <div class="mask1">
    <div class="mask"></div>
    <div class="addDiv">
      <div class="esc" @click="esc">X</div>
      <div class="inpDiv">
        <input type="text" placeholder="请输入书名" v-model="bookname" />
        <input type="text" placeholder="请输入作者" v-model="author" />
        <input type="text" placeholder="请输入出版社" v-model="publisher" />
      </div>
      <button @click="addBook">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddBooks",
  data() {
    return {
      bookname: "",
      author: "",
      publisher: "",
    };
  },
  methods: {
    addBook() {
      if (!this.bookname || !this.author || !this.publisher) {
        return alert("数据不能有空值");
      }
      this.$emit("add", {
        bookname: this.bookname,
        author: this.author,
        publisher: this.publisher,
      });
      this.bookname = "";
      this.author = "";
      this.publisher = "";
    },
    esc() {
      this.$emit("esc");
      this.bookname = "";
      this.author = "";
      this.publisher = "";
    },
  },
};
</script>

<style scoped>
.esc {
  position: absolute;
  font-size: 30px;
  right: 20px;
  top: 5px;
  text-align: center;
  width: 40px;
  cursor: pointer;
}
.addDiv {
  position: absolute;
  left: 300px;
  top: 250px;
  width: 600px;
  height: 400px;
  background-color: skyblue;
  padding-left: 100px;
}
input {
  width: 400px;
  height: 40px;
  margin-top: 50px;
  border-radius: 5px;
}
button {
  height: 45px;
  width: 80px;
  margin-top: 40px;
  margin-left: 160px;
  line-height: 30px;
  background-color: rgb(53, 195, 21);
  border: rgb(34, 188, 248);
  color: aliceblue;
}

.mask {
  position: absolute;
  left: -400px;
  top: -500px;
  width: 3000px;
  height: 1500px;
  background: rgba(0, 0, 0, 0.7);
}
</style>
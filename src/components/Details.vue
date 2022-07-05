<template>
  <div class="mask1">
    <div class="mask"></div>
    <div class="bookDetailed">
      <div class="esc" @click="escSee">X</div>
      <h2>图书详情</h2>
      <p>
        图书序号:<i>{{ seebook.id }}</i>
      </p>
      <p>
        书名:<i>{{ seebook.bookname }}</i>
      </p>
      <p>
        作者:<i>{{ seebook.author }}</i>
      </p>
      <p>
        出版社:<i>{{ seebook.publisher }}</i>
      </p>
      <button @click="escSee">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Details",
  props: ["seebook"],
  methods: {
    escSee() {
      this.$parent.isSee = false;
    },
  },
};
</script>

<style scoped>
h2 {
  margin-top: 15px;
  text-align: center;
}
p {
  margin-top: 38px;
  margin-left: 40px;
}
.esc {
  position: absolute;
  font-size: 30px;
  right: 20px;
  top: 5px;
  text-align: center;
  width: 40px;
  cursor: pointer;
}
.bookDetailed {
  position: absolute;
  left: 300px;
  top: 250px;
  width: 600px;
  height: 400px;
  background-color: skyblue;
}

.mask {
  position: absolute;
  left: -400px;
  top: -500px;
  width: 3000px;
  height: 1500px;
  background: rgba(0, 0, 0, 0.7);
}
button {
  height: 45px;
  width: 80px;
  margin-top: 40px;
  margin-left: 260px;
  line-height: 30px;
  background-color: rgb(53, 195, 21);
  border: rgb(34, 188, 248);
  color: aliceblue;
}
</style>
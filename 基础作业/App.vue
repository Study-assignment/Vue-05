<template>
  <div>
    <h1>1. 生命周期</h1>
    <Life />
    <hr />

    <h1>2. axios使用</h1>
    <UseAxios />
    <hr />

    <h1>3. $refs的使用</h1>
    <More />
    <hr />

    <h1>4. $nextTick使用场景</h1>
    <Tick />
    <hr />

    <h1>5. 组件对象里name属性</h1>
    <Com />
  </div>
</template>

<script>
import Life from './components/Life'
import UseAxios from './components/UseAxios.vue'
import More from './components/More.vue'
import Tick from './components/Tick.vue'

export default {
  data() {
    return {
      show: true,
    }
  },
  components: {
    Life,
    UseAxios,
    More,
    Tick,
  },
}
</script>

<style></style>

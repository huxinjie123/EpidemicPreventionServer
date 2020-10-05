<template>
  <div>
    方案编写
    <div class="red-block" v-permission="['visitor']"></div>
  </div>
</template>

<script>
export default {
  name: "SchemeList",
  data() {
    return {};
  },

  methods: {}
};
</script>
<style lang='scss' scoped>
.red-block {
  width: 100px;
  height: 100px;
  background-color: red;
}
.blue-block {
  width: 100px;
  height: 100px;
  background-color: blue;
}
</style>
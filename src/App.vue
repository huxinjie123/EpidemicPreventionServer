<template>
  <div id="app">
    <router-view to="/login" />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul,
li,
ol {
  list-style: none;
}
#app {
  width: 100%;
  height: 100%;
  -o-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
</style>

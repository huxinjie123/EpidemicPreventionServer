<template>
  <div id="container-page">
    <header-nav :isActivePage.sync="isActivePage"></header-nav>
    <div class="main-wrap">
      <aside-nav class="side-nav" :isActivePage="isActivePage"></aside-nav>
      <router-view class="page-wrap"></router-view>
    </div>
  </div>
</template>

<script>
import HeaderNav from "./HeaderNav";
import AsideNav from "./AsideNav";
export default {
  name: "Container",
  data() {
    return {
      isActivePage: "1",
      test: "safa"
    };
  },

  methods: {},

  mounted() {},
  components: {
    HeaderNav,
    AsideNav
  }
};
</script>
<style lang="scss" scoped>
#container-page {
  width: 100%;
  height: 100%;
  .main-wrap {
    display: flex;
    width: 100%;
    height: calc(100% - 61px);
    .side-nav {
      width: 200px;
      height: 100%;
      order: 1;
    }
    .page-wrap {
      flex: 1;
      order: 2;
    }
  }
}
</style>

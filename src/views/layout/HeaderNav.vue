/**
 * @Author: yuankai
 * @Date: 2019-12-12 10:00:54
 * @Description: 头部导航栏
 */
<template>
  <div id="header-nav">
    <el-menu
      :default-active="isActiveIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="0" disabled>首页</el-menu-item>
      <el-menu-item index="1">方案管理</el-menu-item>
      <el-menu-item index="2">教学管理</el-menu-item>
      <el-menu-item index="3">考试中心</el-menu-item>
      <el-menu-item index="4">数据中心</el-menu-item>
      <el-menu-item index="5">控制中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  props: {
    isActivePage: {
      type: String,
      default: "1"
    }
  },
  data() {
    return {
      isActiveIndex: this.isActivePage,
      // headerNavList: [
      //   { label: "首页", value: "0" },
      //   { label: "方案管理", value: "1" },
      //   { label: "教学管理", value: "2" },
      //   { label: "考试中心", value: "3" },
      //   { label: "数据中心", value: "4" },
      //   { label: "控制中心", value: "5" }
      // ],
      headerNavRoutePath: [
        "/engin_certification/schemeList",
        "/engin_certification/mySyllabus",
        "/engin_certification/examinationPaperList",
        "/engin_certification/professionalData",
        "/engin_certification/roleManagement"
      ],
      tempHeaderRoute: "/engin_certification/schemeList"
    };
  },

  methods: {
    handleSelect(key) {
      this.$emit("update:isActivePage", key + "");
      this.tempHeaderRoute !== this.headerNavRoutePath[key - 1] &&
        this.$router.push({ path: this.headerNavRoutePath[key - 1] });
      this.tempHeaderRoute = this.headerNavRoutePath[key - 1];
    }
  }
};
</script>
<style lang="scss" scoped></style>

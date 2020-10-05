<template>
  <div class="container-box">
    <div class="card">
      <el-container>
        <el-header style="position:relative;">
          <div class="icon">
            <i class="el-icon-upload"></i>
            <div>
              <p>1510班级</p>
              <p>机械工程</p>
            </div>
          </div>

          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            router
            background-color="#EBEEF5"
            text-color="black"
            active-text-color="#199ED8"
          >
            <el-menu-item index="/engin_certification/teachingEducation/enter/activity">活动(0)</el-menu-item>
            <el-menu-item>成员(0)</el-menu-item>
            <el-menu-item>分组(0)</el-menu-item>
          </el-menu>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClassroomTeaching',
  data() {
    return {
      activeIndex: '/engin_certification/teachingEducation/enter/activity'
    }
  },

  methods: {}
}
</script>
<style lang="scss" scoped>
.container-box {
  background: #f2f2f2;
  overflow: auto;
  min-width: 900px;
  position: relative;
}
.card {
  margin: 100px auto;
  width: 850px;
}
.el-header {
  padding: 0;
}
.el-menu {
  padding-left: 200px;
  .el-menu-item {
    margin-right: 70px;
  }
  .el-menu-item:visited,
  .el-menu-item:active,
  .el-menu-item:link {
    background: #ebeef5 !important;
  }

  .el-menu-item:hover {
    background: #7bdcfe !important;
  }
  .el-menu-item:hover {
    color: #199ed8 !important;
  }
}
.icon {
  position: absolute;
  z-index: 1;
  top: -70px;
  left: 50px;
  .el-icon-upload {
    font-size: 120px;
    color: #81cd2f;
  }
  div {
    position: absolute;
    left: 120px;
    top: 20px;
    p {
      width: 150px;
    }
  }
}
.el-main {
  background: #ffffff;
  padding: 40px;
}

.el-breadcrumb {
  margin: 15px 0 0 15px;
}
</style>

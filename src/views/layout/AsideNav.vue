/**
 * @Author: yuankai
 * @Date: 2019-12-12 10:19:43
 * @Description: 侧边栏导航
 */
<template>
  <div id="aside-nav">
    <el-menu
      ref="subMenu"
      default-active="1"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
    >
      <div v-for="(item,index) in sideNavLists[isActivePage]" :key="index">
        <el-submenu :index="item.index" v-if="item.children">
          <template slot="title">
            <span>{{item.label}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item
              v-for="(child,index) in item.children"
              :key="index"
              :index="child.index"
            >{{child.label}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item :index="item.index" v-else>
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "AsideNav",
  props: {
    isActivePage: {
      type: String,
      default: "1"
    }
  },
  watch: {
    isActivePage(newVal, oldVal) {
      newVal === "2" &&
        this.$nextTick(() => {
          this.$refs.subMenu.open("1");
        });
    }
  },
  data() {
    return {
      sideNavLists: [
        [{ label: "首页tab", value: "home1", index: "1" }],
        [
          { label: "方案列表", value: "schemeList", index: "1" },
          { label: "待审核", value: "waitCheck", index: "2" }
        ],
        [
          {
            label: "教学大纲",
            value: "teachingProgram",
            index: "1",
            children: [
              { label: "我的大纲", value: "mySyllabus", index: "1-1" },
              { label: "全部大纲", value: "allSyllabus", index: "1-2" },
              { label: "审核大纲", value: "examineSyllabus", index: "1-3" }
            ]
          },
          {
            label: "课程教学",
            value: "classroomTeaching",
            index: "2",
            children: [
              { label: "教学日历", value: "teachingCalendar", index: "2-1" },
              { label: "课堂教学", value: "teachingEducation", index: "2-2" }
            ]
          },
          { label: "评价体系", value: "evaluationSystem", index: "3" },
          { label: "教学资料", value: "resourcesMaterial", index: "4" }
        ],
        [
          { label: "试卷列表", value: "examinationPaperList", index: "1" },
          { label: "考试列表", value: "examinationList", index: "2" },
          { label: "阅卷列表", value: "markingList", index: "3" },
          { label: "题库管理", value: "questionManagement", index: "4" }
        ],
        [
          { label: "专业数据", value: "professionalData", index: "1" },
          { label: "学生个体分析", value: "studentsAnalysis", index: "2" }
        ],
        [
          { label: "角色权限设置", value: "roleManagement", index: "1" },
          { label: "用户管理", value: "userManagement", index: "2" },
          { label: "归档用户", value: "userArchiving", index: "3" },
          {
            label: "基础信息表",
            value: "basicInformationTable",
            index: "4",
            children: [
              { label: "学院设置", value: "collegeManagement", index: "4-1" },
              { label: "专业设置", value: "majorManagement", index: "4-2" },
              { label: "课程设置", value: "courseManagement", index: "4-3" }
            ]
          }
        ]
      ],
      tempRoute: "" // 临时路由,已经在本页禁止跳转
    };
  },

  methods: {
    /**
     * @description:选择对应sideNav并进行路由跳转
     * @param {type}
     * @return:
     */
    handleSelect(key) {
      key = key + "";
      let routeName = "";
      let arr = this.sideNavLists[this.isActivePage];
      arr.map(item => {
        item.index === key && (routeName = item.value);
        item.children &&
          item.children.map(item1 => {
            item1.index === key && (routeName = item1.value);
          });
      });
      console.log(routeName);
      this.tempRoute !== routeName &&
        this.$router.push({ path: `/engin_certification/${routeName}` });
      this.tempRoute = routeName;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang='scss' scoped>
#aside-nav {
  width: 100%;
  height: 100%;
  .el-menu {
    height: 100%;
  }
}
</style>
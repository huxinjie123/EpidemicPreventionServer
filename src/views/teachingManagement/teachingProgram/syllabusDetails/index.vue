<template>
  <div class="syllabus-details">
    <div class="nav-wrap">
      <div class="nav-left">数据结构教学大纲</div>
      <el-button-group>
        <el-button size="mini" @click="goBack">返回</el-button>
        <el-button type="primary" size="mini" @click="commitSyllabus">提交</el-button>
      </el-button-group>
    </div>
    <!-- 主体信息 -->
    <div class="content-wrap">
      <div class="syllabus-main">
        <component :is="currentName"></component>
      </div>
      <syllabusAside
        class="syllabus-aside"
        :titleList="titleList"
        @handleCheckList="handleCheckList"
        :currentName="currentName"
      ></syllabusAside>
    </div>
  </div>
</template>

<script>
//引入侧边组件和目录对应组件
import syllabusAside from "../components/SyllabusAside";
import CourseInformation from "../components/CourseInformation";
import CourseIntroduction from "../components/CourseIntroduction";
import TeachingAims from "../components/TeachingAims";
import CourseContent from "../components/CourseContent";
import CourseTrainingSystem from "../components/CourseTrainingSystem";
import PeriodsAssignment from "../components/PeriodsAssignment";
import TeachingContentPlan from "../components/TeachingContentPlan";
import TeachingResources from "../components/TeachingResources";
import ExamineMode from "../components/ExamineMode";
export default {
  name: "SyllabusDetails",
  components: {
    syllabusAside,
    CourseInformation,
    CourseIntroduction,
    TeachingAims,
    CourseContent,
    CourseTrainingSystem,
    PeriodsAssignment,
    TeachingContentPlan,
    TeachingResources,
    ExamineMode
  },
  data() {
    return {
      // 右侧边栏目录信息
      titleList: [
        { index: "1", code: "courseInformation", name: "课程基本信息" },
        { index: "2", code: "courseIntroduction", name: "课程简介" },
        { index: "3", code: "teachingAims", name: "教学目的及要求" },
        { index: "4", code: "courseContent", name: "课程内容" },
        { index: "5", code: "courseTrainingSystem", name: "课程培养能力体系" },
        { index: "6", code: "periodsAssignment", name: "教学时数分配" },
        { index: "7", code: "teachingContentPlan", name: "教学内容安排" },
        {
          index: "8",
          code: "teachingResources",
          name: "课参考教材和主要参考资料程内容"
        },
        { index: "9", code: "examineMode", name: "课程考试与成绩评定方法" }
      ],
      currentName: "CourseInformation"
    };
  },

  methods: {
    /**
     * 返回上一层
     */
    goBack() {
      this.$router.push({ name: "mySyllabus" });
    },
    /**
     * 右侧边栏目录选中事件
     * name 每条数据的名称 通过code进行跳转
     */
    handleCheckList(code, name) {
      this.currentName = code;
    },
    /**
     * 提交大纲
     */
    commitSyllabus(){
      this.$message.info("提交大纲");
    }
  }
};
</script>
<style lang='scss' scoped>
.syllabus-details {
  padding: 10px;
  .nav-wrap {
    width: 100%;
    height: 40px;
    padding: 3px 0;
    border-bottom: 1px solid #e6e6e6;
    .nav-left {
      float: left;
    }
    .el-button-group {
      float: right;
    }
  }
  .content-wrap {
    position: relative;
    padding-top: 10px;
    height: calc(100% - 40px);
    .syllabus-main {
      width: calc(100% - 240px);
      height: 100%;
    }
    .syllabus-aside {
      width: 240px;
      position: absolute;
      border-left: 1px solid #ccc;
      top: 10px;
      right: 0px;
      z-index: 999;
    }
  }
}
</style>
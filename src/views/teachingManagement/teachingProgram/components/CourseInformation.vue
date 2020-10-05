<template>
  <div class="courseInformation">
    <div class="wrap-content">
      <el-form ref="form" :model="form" label-width="125px" class="wrap-list">
        <el-form-item label="大纲名称：">
          <el-input v-model="form.syllabusName" placeholder="请输入大纲名称" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="课程名称：">
          <el-input v-model="form.courseName" placeholder="请输入课程名称" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="课程编号：">
          <el-input v-model="form.code" placeholder="请输入课程编号" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="课程性质：">
          <el-input v-model="form.nature" placeholder="请输入课程性质" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="课程学时：">
          <el-input v-model="form.period" placeholder="请输入课程学时" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="课程学分：">
          <el-input v-model="form.score" placeholder="请输入课程学分" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="开课学院：">
          <el-input v-model="form.college" placeholder="请输入开课学院" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="适用专业：">
          <el-input v-model="form.major" placeholder="请输入适用专业" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="课程负责人：">
          <el-input v-model="form.person" placeholder="请输入课程负责人" class="search_head_input"></el-input>
        </el-form-item>
        <el-form-item label="开课学期：">
          <el-input v-model="form.semester" placeholder="请输入开课学期" class="search_head_input"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="course-bottom">
      <el-button type="primary" size="mini" @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseInformation",
  data() {
    return {
      //表单数据
      form: {
        syllabusName: "",
        courseName:"",
        code:"",
        nature:"",
        period:"",
        score:"",
        college:"",
        major:"",
        person:"",
        semester:""
      }
    };
  },

  methods: {
    /**
     * 保存
     */
    submit(){
      let req={
        syllabusName:this.form.syllabusName,
        courseName:this.form.courseName,
        code:this.form.code,
        nature:this.form.nature,
        period:this.form.period,
        score:this.form.score,
        college:this.form.college,
        major:this.form.major,
        person:this.form.person,
        semester:this.form.semester,
      }
      console.log(req);
    },
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.courseInformation {
  width: 700px;
  margin: 0 auto;
  .wrap-content {
    .wrap-list {
      display: flex;
      flex-wrap: wrap;
      .search_head_input {
        width: 180px;
      }
    }
  }
  .course-bottom {
    margin-top: 50px;
    text-align: center;
  }
}
</style>

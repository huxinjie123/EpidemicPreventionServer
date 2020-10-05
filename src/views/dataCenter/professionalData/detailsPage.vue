/*
 * @Author: LL
 * @Last Modified time: 2019-12-16 16:37:52
 * @description: 数据中心 详情页
 */

<template>
  <div class="dataCenter">
    <div class="topSearch">
      <el-input v-model="input" placeholder="请输入课程名称" class="ipt"></el-input>
      <el-button type="primary" size="small">搜索</el-button>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" height="200" >
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="date" label="课程类型"></el-table-column>
        <el-table-column prop="name" label="课程名称"></el-table-column>
        <el-table-column prop="province" label="授课教师"></el-table-column>
        <el-table-column prop="city" label="考试次数"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="courseData"
            >课程数据</el-button>
            <el-button type="text" size="small">课程分析</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsPage",
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "计算机应用基础",
          name: "java语言基础",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "计算机应用基础",
          name: "java语言基础",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
    };
  },

  methods: {
    courseData(index, rows) {
    this.$router.push({name:"curriculumData"})
    }
  }
};
</script>
<style lang='scss' scoped>
.topSearch {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin: 15px;
  .ipt {
    width: 280px !important;
    margin-right: 15px;
  }
}
.main{
  margin:15px;
}
</style>
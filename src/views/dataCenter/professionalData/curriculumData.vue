/*
 * @Author: LL
 * @Last Modified time: 2019-12-16 16:37:32
 * @description: 数据中心 课程数据
 */

<template>
  <div class="dataCenter">
    <el-tabs type="card">
      <el-tab-pane label="考试" name="first"></el-tab-pane>
      <el-tab-pane label="测试" name="second"></el-tab-pane>
      <el-tab-pane label="作业" name="third"></el-tab-pane>
      <el-tab-pane label="问答" name="fourth"></el-tab-pane>
    </el-tabs>
    <div class="topSearch">
      <el-input v-model="input" placeholder="请输入考试类型" class="ipt"></el-input>
      <el-input v-model="input" placeholder="请输入考试时间" class="ipt"></el-input>
      <el-button type="primary" size="small">搜索</el-button>
    </div>
    <div class="main">
      <el-table :data="tableData" style="width: 100%" height="200">
        <el-table-column type="index" label="序号"></el-table-column>
        <el-table-column prop="date" label="课程类型"></el-table-column>
        <el-table-column prop="name" label="课程名称"></el-table-column>
        <el-table-column prop="province" label="授课教师"></el-table-column>
        <el-table-column prop="city" label="考试次数"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="examinationData">考试分析</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "CurriculumData",
  data() {
    return {
      input: "",
      //activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },

  methods: {
    examinationData(index, rows) {
      this.$router.push({ name: "examinationAnalysis" });
    },
    handleClick(tab, event) {
      console.log(tab, event);
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
.main {
  margin: 15px;
}
</style>
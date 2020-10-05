<template>
  <div class="examineMode">
    <div class="examine-box">
      <h3>成绩评定方式</h3>
      <div class="examine-content">
        <b>平时成绩 X</b>
        <div class="examine-input">
          <el-input-number
            v-model="examineNumber"
            size="small"
            :controls="false"
            style="width:100px"
            :min="0"
            :max="100"
            @change="changeExamineNumber"
          ></el-input-number>
          <i>%</i>
        </div>
        <b>+ 期末成绩 X</b>
        <div class="examine-input">
          <el-input-number
            v-model="finalNumber"
            size="small"
            :controls="false"
            style="width:100px"
            :min="0"
            :max="100"
            @change="changeFinalNumber"
          ></el-input-number>
          <i>%</i>
        </div>
        <b>= 总成绩</b>
      </div>
    </div>
    <div class="examine-box">
      <h3>指标占比</h3>
      <div class="examine-content">
        <b>作业测评 X</b>
        <div class="examine-input">
          <el-input-number
            v-model="homeworkEvaluation"
            size="small"
            :controls="false"
            style="width:100px"
            :min="0"
            :max="100"
          ></el-input-number>
          <i>%</i>
        </div>
        <b>+ 考试成绩 X</b>
        <div class="examine-input">
          <el-input-number
            v-model="examineResults"
            size="small"
            :controls="false"
            style="width:100px"
            :min="0"
            :max="100"
          ></el-input-number>
          <i>%</i>
        </div>
        <b>+ 实验</b>
        <div class="examine-input">
          <el-input-number
            v-model="experimentNumber"
            size="small"
            :controls="false"
            style="width:100px"
            :min="0"
            :max="100"
          ></el-input-number>
          <i>%</i>
        </div>
        <b>= 总占比</b>
      </div>
    </div>
    <div class="examine-bottom">
      <el-button type="primary" size="mini" @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExamineMode",
  data() {
    return {
      examineNumber: "", //平时成绩
      finalNumber: "", //期末考试
      homeworkEvaluation: "", //作业测评
      examineResults: "", //考试成绩
      experimentNumber: "" //实验
    };
  },

  methods: {
    /**
     * val=平时成绩的值 100-val=期末考试
     */
    changeExamineNumber(val) {
      this.finalNumber = 100 - val;
    },
    /**
     * val=期末考试的值 100-val=平时成绩
     */
    changeFinalNumber(val) {
      this.finalexamineNumberNumber = 100 - val;
    },
    /**
     * 保存
     */
    submit() {
      let req = {
        examineNumber: this.examineNumber,
        finalNumber: this.finalNumber,
        homeworkEvaluation: this.homeworkEvaluation,
        examineResults: this.examineResults,
        experimentNumber: this.experimentNumber
      };
      console.log(req);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.examineMode {
  width: 650px;
  margin: 0 auto;
  padding: 20px;
  .examine-box {
    margin-bottom: 10px;
    h3 {
      font-size: 16px;
      font-weight: normal;
    }
    .examine-content {
      margin: 10px;
      b {
        font-size: 14px;
      }
      .examine-input {
        display: inline-block;
        position: relative;
        .el-input-number {
          position: relative;
        }
        i {
          font-style: normal;
          position: absolute;
          top: 25%;
          right: 5px;
          font-size: 12px;
        }
      }
    }
  }
  .examine-bottom {
    margin-top: 100px;
    text-align: center;
  }
}
</style>

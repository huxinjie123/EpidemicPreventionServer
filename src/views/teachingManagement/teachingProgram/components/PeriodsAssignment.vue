<template>
  <div class="periodsAssignment">
    <div class="per-tableHeader">
      <el-row type="flex" justify="space-between">
        <el-col class="per-one">课程教学内容</el-col>
        <el-col class="per-two">
          <el-row class="per-two-header">
            <span>学时分配</span>
          </el-row>
          <el-row class="per-two-content" type="flex" justify="space-between">
            <el-col>
              <span>讲授</span>
            </el-col>
            <el-col>
              <span>实践</span>
            </el-col>
            <el-col>
              <span>自主学习</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col class="per-there">
          <span>实践课使用场地类型</span>
        </el-col>
        <el-col class="per-four">备注</el-col>
      </el-row>
    </div>
    <div class="per-tableContent">
      <el-row type="flex" justify="space-around">
        <el-col class="per-catalog">1.章节1</el-col>
        <el-col class="per-teaching">
          <el-input-number v-model="teachNumber" size="small" :min="0" :max="10"></el-input-number>
        </el-col>
        <el-col class="per-teaching">
          <el-input-number v-model="practiceNumber" size="small" :min="0" :max="10"></el-input-number>
        </el-col>
        <el-col class="per-teaching">
          <el-input-number v-model="learningNumber" size="small" :min="0" :max="10"></el-input-number>
        </el-col>
        <el-col class="per-field">
          <el-select v-model="field" placeholder="请选择场地" size="small">
            <el-option
              v-for="(item,index) in fieldList"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col class="per-infor">
          <el-input type="textarea" :rows="1" placeholder="请输入备注" v-model="remarks" size="small"></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="per-bottom">
      <el-button type="primary" size="mini" @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeriodsAssignment",
  data() {
    return {
      //讲授
      teachNumber: 0,
      //实践
      practiceNumber: 0,
      //自主学习
      learningNumber: 0,
      //使用场地类型
      field: "",
      fieldList: [
        {
          value: "选项1",
          label: "场地1"
        },
        {
          value: "选项2",
          label: "场地2"
        }
      ],
      //备注
      remarks:"",
    };
  },

  methods: {
    /**
     * 保存
     */
    submit(){
      let req={
        teachNumber:this.teachNumber,
        practiceNumber:this.practiceNumber,
        learningNumber:this.learningNumber,
        field:this.field,
        remarks:this.remarks,
      }
      console.log(req);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.periodsAssignment {
  width: 1000px;
  margin: 0 auto;
  .per-tableHeader {
    width: 100%;
    height: 56px;
    line-height: 56px;
    text-align: center;
    border-bottom: 1px solid #ececec;
    .per-one {
      width: 220px;
      min-width: 220px;
    }
    .per-two {
      width: 405px;
      min-width: 405px;
      .per-two-header {
        line-height: 30px;
      }
      .per-two-content {
        line-height: 26px;
      }
    }
    .per-there {
      width: 200px;
      min-width: 200px;
    }
    .per-four {
      width: 145px;
      min-width: 145px;
    }
  }
  .per-tableContent {
    width: 100%;
    margin-top: 20px;
    .per-catalog {
      width: 220px;
      min-width: 220px;
      padding: 6px 25px;
      font-size: 14px;
      background: #F5F7FA;
    }
    .per-teaching {
      width: 135px;
      min-width: 135px;
    }
    .per-field {
      width: 200px;
      min-width: 200px;
    }
    .per-infor {
      width: 145px;
      min-width: 145px;
    }
  }
  .per-bottom{
    margin-top: 50px;
    text-align: center;
  }
}
</style>

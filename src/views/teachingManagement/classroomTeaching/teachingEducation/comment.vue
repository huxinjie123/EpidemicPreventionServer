<template>
  <div>
    <el-row>
      <el-col class="left" :span="18">
        <i class="el-icon-video-camera-solid"></i>
        <el-tag type="info" effect="plain">已结束</el-tag>
        <p>作业 2019-10-20</p>
        <div>共10人参与</div>
      </el-col>
      <el-col class="right" :span="6">
        <div>
          <i class="el-icon-video-play"></i>
          <span style="margin-right:15px;">导出数据</span>
          <i class="el-icon-video-camera-solid"></i>
          <span>投屏模式</span>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-divider direction="vertical" class="divider-vertical"></el-divider>
      <span>作业详情</span>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.</p>
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <el-col :span="16">
        <el-divider direction="vertical" class="divider-vertical"></el-divider>
        <span>作业详情</span>
      </el-col>
      <el-col :span="8">
        <el-button type="primary">批量评分</el-button>
        <el-button type="primary">学生参与情况</el-button>
      </el-col>
    </el-row>
    <el-form
      :model="resultForm"
      :rules="resultFormRules"
      ref="resultFormRef"
      label-width="100px"
      label-position="top"
    >
      <el-form-item class="resource">
        <el-radio-group v-model="resultForm.resource">
          <el-radio label="全部"></el-radio>
          <el-radio label="只看未评作业 "></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-row class="user">
        <i class="el-icon-user"></i>
        <div>
          <span>程琳彤</span>
          <br />
          <span>23451234</span>
        </div>
      </el-row>
      <el-row class="user-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis
          <el-divider></el-divider>12月09日15:24提交
        </p>
      </el-row>
      <el-form-item label="老师评分" class="score">
        <el-row>
          <el-col :span="4">
            <el-input v-model="resultForm.score"></el-input>
          </el-col>
          <el-col :span="20">
            <el-radio-group v-model="watch_score">
              <el-radio-button label="满分"></el-radio-button>
              <el-radio-button label="90"></el-radio-button>
              <el-radio-button label="60"></el-radio-button>
              <el-radio-button label="50"></el-radio-button>
              <el-radio-button label="30"></el-radio-button>
              <el-radio-button label="20"></el-radio-button>
              <el-radio-button label="10"></el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row style="text-align:center;">
          <el-button type="primary">评分</el-button>
          <el-button type="info">取消</el-button>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      watch_score: '',
      resultForm: {
        resource: '',
        score: ''
      },
      resultFormRules: {}
    }
  },
  methods: {},
  watch: {
    watch_score(newVal) {
      if (newVal === '满分') {
        this.resultForm.score = '100'
      } else {
        this.resultForm.score = newVal
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-row {
  margin: 25px 20px 0;
  .left {
    i {
      font-size: 80px;
      background: #8dcf00;
    }
    .el-tag {
      position: absolute;
      top: 0;
      left: 100px;
    }
    p {
      position: absolute;
      top: 0;
      left: 165px;
    }
    div {
      position: absolute;
      top: 63px;
      left: 100px;
      color: #868686;
    }
  }
  .right {
    div {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(0, -50%);
      i {
        vertical-align: middle;
        font-size: 20px;
      }
      span {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
}
.el-row {
  .divider-vertical {
    font-size: 25px;
    width: 8px;
    background: #00bbdd;
    margin-left: 0 !important;
  }
  p {
    margin: 15px 0 0 20px;
  }
}
.el-form {
  margin-left: 20px;
  .resource {
    margin-top: 15px;
    background: #f2f2f2;
    padding-left: 20px;
  }
  .user {
    margin-left: 0;
    i {
      font-size: 40px;
      background: #cdebf1;
      border-radius: 50%;
      padding: 5px;
    }
    div {
      position: absolute;
      left: 60px;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  .user-content {
    background: #f2f2f2;
    margin: 20px 0 20px 50px;
    p {
      margin: 15px;
    }
  }
  .score {
    margin-left: 50px;
    >>> .el-form-item__content {
      background: #f2f2f2;
      padding: 15px;
    }
    .el-row {
      margin: 0;
      .el-radio-button {
        margin-left: 15px;
      }
      .el-radio-button >>> .el-radio-button__inner {
        border-radius: 5px;
        padding: 12px 10px;
        width: 60px;
        border: none;
        color: #74cede;
      }
    }
  }
}
</style>
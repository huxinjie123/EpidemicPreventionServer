<template>
  <div>
    <el-row class="header">
      <el-col :span="4">
        <i class="el-icon-video-camera-solid">
          <p>推送资料</p>
        </i>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-video-camera-solid" @click="goTask">
          <br />
          <p>布置作业</p>
        </i>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-video-camera-solid">
          <br />
          <p>答题讨论</p>
        </i>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-video-camera-solid">
          <br />
          <p>课堂提问</p>
        </i>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-video-camera-solid">
          <br />
          <p>头脑风暴</p>
        </i>
      </el-col>
      <el-col :span="4">
        <i class="el-icon-video-camera-solid">
          <br />
          <p>发起投票</p>
        </i>
      </el-col>
    </el-row>
    <el-divider></el-divider>

    <el-form :model="searchForm" :rules="searchFormRules" ref="searchFormRef">
      <el-form-item>
        <el-input placeholder="请输入内容">
          <el-button slot="append" icon="el-icon-search" @click="goTask"></el-button>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-radio-group v-model="searchForm.resource">
          <el-radio label="全部活动"></el-radio>
          <el-radio label="未开始"></el-radio>
          <el-radio label="进行中"></el-radio>
          <el-radio label="已结束"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
    <el-collapse v-model="collapse_active_name" accordion>
      <el-collapse-item title="乘风破浪组(1)" name="1">
        <el-row>
          <el-col class="left" :span="18">
            <i class="el-icon-video-camera-solid"></i>
            <el-tag type="danger" effect="plain">未开始</el-tag>
            <p>头脑风暴 2019-10-20</p>
            <div>共10人参与</div>
          </el-col>
          <el-col class="right" :span="6">
            <div>
              <i class="el-icon-video-play"></i>
              <span>开始活动</span>
              <i class="el-icon-more"></i>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col class="left" :span="18">
            <i class="el-icon-video-camera-solid"></i>
            <el-tag type="danger" effect="plain">未开始</el-tag>
            <p>答题讨论 2019-10-20</p>
            <div>共10人参与</div>
          </el-col>
          <el-col class="right" :span="6">
            <p>
              <i class="el-icon-video-camera-solid"></i>
              <span>投屏模式</span>
            </p>
            <div>
              <i class="el-icon-video-play"></i>
              <span>开始活动</span>
              <i class="el-icon-more"></i>
            </div>
          </el-col>
        </el-row>
        <el-divider></el-divider>
        <el-row>
          <el-col class="left" :span="18">
            <i class="el-icon-video-camera-solid" @click="goComment"></i>
            <el-tag type="info" effect="plain">已结束</el-tag>
            <p>作业 2019-10-20</p>
            <div>共10人参与</div>
          </el-col>
          <el-col class="right" :span="6">
            <p>
              <i class="el-icon-video-camera-solid"></i>
              <span>投屏模式</span>
            </p>
            <div>
              <i class="el-icon-video-play"></i>
              <span>开始活动</span>
              <i class="el-icon-more"></i>
            </div>
          </el-col>
        </el-row>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        resource: ''
      },
      searchFormRules: {},
      collapse_active_name: '1'
    }
  },
  methods: {
    goTask() {
      this.$router.push('/engin_certification/teachingEducation/enter/task')
    },
    goComment() {
      this.$router.push('/engin_certification/teachingEducation/enter/comment')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  .el-col {
    text-align: center;
    i {
      cursor: pointer;
      font-size: 60px;
      p {
        font-size: 16px;
      }
    }
  }
}
.el-radio {
  margin-right: 60px;
}
.el-collapse-item >>> .el-collapse-item__header {
  background: #f2f2f2 !important;
  padding: 0 10px;
}
.el-collapse-item {
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
      p {
        position: absolute;
        right: 15px;
        i {
          font-size: 25px;
        }
      }
      div {
        position: absolute;
        right: 0;
        bottom: 15px;
        i {
          vertical-align: middle;
          font-size: 20px;
        }
        span {
          display: inline-block;
          vertical-align: middle;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
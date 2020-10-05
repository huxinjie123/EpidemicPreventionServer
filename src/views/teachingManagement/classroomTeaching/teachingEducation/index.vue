<template>
  <div>
    <el-button type="primary" class="add-but" @click="addDialogVisible = true">新建</el-button>
    <el-calendar :first-day-of-week="7">
      <template slot="dateCell" slot-scope="scope">
        <el-popover
          placement="right"
          width="300"
          trigger="click"
          v-if="
            scope.data.day
              .split('-')
              .slice(2, 3)
              .join('-') === today
          "
        >
          <P class="margin-left">粒子物理基础课堂教学</P>
          <i class="el-icon-s-flag"></i>
          <span>1510班级</span>
          <p class="margin-left">授课教师: 宗鸣宇</p>
          <el-button type="primary" size="mini" class="enter" @click="enterTeaching">进入</el-button>
          <p slot="reference" class="data_box">
            {{
            scope.data.day
            .split('-')
            .slice(2, 3)
            .join('-')
            }}
          </p>
        </el-popover>
        <p class="data_box" v-else>
          {{
          scope.data.day
          .split('-')
          .slice(2, 3)
          .join('-')
          }}
        </p>
      </template>
    </el-calendar>
    <!-- 添加对话框 -->
    <el-dialog title="添加" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px"></el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TeachingCalendar',
  data() {
    return {
      addDialogVisible: false,
      addForm: {},
      addFormRules: {}
    }
  },
  methods: {
    enterTeaching() {
      this.$router.push('teachingEducation/enter')
    }
  },
  computed: {
    today() {
      const date = new Date()
      const today = (date.getDate() + '').padStart(2, '0')
      return today
    }
  }
}
</script>
<style lang="scss" scoped>
.add-but {
  margin: 15px;
}
.data_box {
  width: 100%;
  height: 100%;
}
.margin-left {
  margin-left: 15px;
}
.enter {
  float: right;
}
</style>

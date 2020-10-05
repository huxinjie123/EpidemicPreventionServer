<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>当前位置: 活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>创建作业/小组任务</el-breadcrumb-item>
    </el-breadcrumb>
    <el-form
      :model="taskForm"
      :rules="taskFormRules"
      ref="taskFormRef"
      label-width="100px"
      label-position="top"
      class="taskForm"
    >
      <el-form-item label="任务详情:" prop="comment" class="row_1">
        <el-input
          type="textarea"
          resize="none"
          v-model="taskForm.comment"
          :autosize="{ minRows: 6, maxRows: 6}"
          placeholder="再次输入本次作业/小组任务的文字描述"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-row class="row_2">
          <el-tag effect="plain">增加附件</el-tag>
          <span>最多可增加30个附件，单个文件限制200MB，建议大小6408*480</span>
        </el-row>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="taskForm.title"></el-input>
      </el-form-item>
      <el-form-item label="知识点" prop="knowledge">
        <el-select v-model="taskForm.knowledge" placeholder="请选择知识点">
          <el-option label="知识点一" value="值一"></el-option>
          <el-option label="知识点二" value="值二"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分组" prop="group">
        <el-select v-model="taskForm.group" placeholder="请选择分组">
          <el-option label="分组一" value="值一"></el-option>
          <el-option label="分组二" value="值二"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用途" prop="purpose">
        <el-radio-group v-model="taskForm.purpose">
          <el-radio label="不指定"></el-radio>
          <el-radio label="课前"></el-radio>
          <el-radio label="课中"></el-radio>
          <el-radio label="课后"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="评价方式" prop="way">
        <el-select v-model="taskForm.way" placeholder="请选择评价方式">
          <el-option label="评价方式一" value="值一"></el-option>
          <el-option label="评价方式二" value="值二"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="设置参考答案" prop="answer">
        <el-input
          type="textarea"
          resize="none"
          v-model="taskForm.answer"
          :autosize="{ minRows: 6, maxRows: 6}"
          placeholder="再次输入本次作业/小组任务的文字描述"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">创建</el-button>
        <el-button type="info" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskForm: {
        comment: '',
        title: '',
        knowledge: '',
        group: '',
        purpose: '',
        way: '',
        answer: ''
      },

      taskFormRules: {
        comment: [{ required: true, message: '请输入任务详情', trigger: 'blur' }],
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        knowledge: [{ required: true, message: '请选择知识点', trigger: 'blur' }],
        group: [{ required: true, message: '请选择分组', trigger: 'blur' }],
        purpose: [{ required: true, message: '请选择用途', trigger: 'blur' }],
        way: [{ required: true, message: '请选择评价方式', trigger: 'blur' }],
        answer: [{ required: true, message: '请设置参考答案', trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm() {},
    resetForm() {
      this.$refs.taskFormRef.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.textarea {
  font-size: 16px;
}
.row_2 {
  background: #f2f2f2;
  height: 60px;
  .el-tag {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 15px;
    font-size: 14px;
  }
  span {
    vertical-align: middle;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 100px;
  }
}
.taskForm {
  .el-form-item {
    .el-select {
      width: 100%;
    }
  }
}

.el-breadcrumb {
  position: absolute;
  top: 15px;
  left: 15px;
}
</style>
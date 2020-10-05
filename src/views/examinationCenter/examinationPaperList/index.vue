<template>
  <div>
    <div>
    <div class="new_box">
      <el-button type="primary" class="new_list" @click="addDialogVisible = true" size="small">新建</el-button>
      <el-button type="danger" class="del_list" @click="del()" size="small">删除</el-button>
    </div>
  <el-table
    :data="tableData"
    style="width: 100%;border-radius: 12px 12px 0 0;height: 706px;background:#F1F6FA;"
    :header-cell-style="{background:'#E0E7F4'}">
    <el-table-column
      type="selection"
      style="width: 2%">
    </el-table-column>
    <el-table-column
      prop="number"
      label="序号"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      prop="name"
      label="试卷名称"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      prop="listType"
      label="类型"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      prop="courses"
      label="所属课程"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      prop="person"
      label="课程负责人"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      prop="scope"
      label="试卷分数"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      prop="date"
      label="修改日期"
      style="width: 12%">
    </el-table-column>
    <el-table-column
      label="操作"
      style="width: 14%">
      <template>
        <el-button @click="addDialogVisible3 = true" icon="el-icon-search" circle type="info" size="small"></el-button>
        <el-button type="primary" icon="el-icon-edit" circle size="small" @click="addDialogVisible2 = true"></el-button>
        <el-button @click="del()" type="danger" size="small" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    title="添加"
    :visible.sync="addDialogVisible"
    width="50%">
    <span>
      <el-form label-width="100px" :model="addForm" :rules="addFormRules" ref="addFormRef">
        <el-form-item label="序号" prop="number">
          <el-input style="width: 50%" v-model="addForm.number"></el-input>
        </el-form-item>
        <el-form-item label="试卷名称" prop="name">
          <el-input style="width: 50%" v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="listType">
          <el-input style="width: 50%" v-model="addForm.listType"></el-input>
        </el-form-item>
        <el-form-item label="所属课程" prop="courses">
          <el-input style="width: 50%" v-model="addForm.courses"></el-input>
        </el-form-item>
        <el-form-item label="课程负责人" prop="person">
          <el-input style="width: 50%" v-model="addForm.person"></el-input>
        </el-form-item>
        <el-form-item label="试卷分数" prop="scope">
          <el-input style="width: 50%" v-model="addForm.scope"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="修改日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="addForm.date" style="width: 50%;"></el-date-picker>
        </el-form-item>
      </el-form>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addDialogVisible = false, reBack2()">取 消</el-button>
      <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
  <el-dialog
    title="查看"
    :visible.sync="addDialogVisible3"
    width="50%">
    <span>
      <el-form label-width="100px" :model="selectForm">
        <el-form-item label="序号">
          <el-input style="width: 50%" v-model="updateForm.number" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="试卷名称">
          <el-input style="width: 50%" v-model="updateForm.name" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="类型">
          <el-input style="width: 50%" v-model="updateForm.listType" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所属课程">
          <el-input style="width: 50%" v-model="updateForm.courses" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="课程负责人">
          <el-input style="width: 50%" v-model="updateForm.person" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="试卷分数">
          <el-input style="width: 50%" v-model="updateForm.scope" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="修改日期">
          <el-input style="width: 50%" v-model="selectForm.date" :disabled="true"></el-input>
        </el-form-item>
      </el-form>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addDialogVisible3 = false">取 消</el-button>
    </span>
  </el-dialog>
  <el-dialog
    title="修改"
    :visible.sync="addDialogVisible2"
    width="50%">
    <span>
      <el-form label-width="100px" :model="updateForm" :rules="updateFormRules" ref="updateFormRef">
        <el-form-item label="序号" prop="number">
          <el-input style="width: 50%" v-model="updateForm.number"></el-input>
        </el-form-item>
        <el-form-item label="试卷名称" prop="name">
          <el-input style="width: 50%" v-model="updateForm.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="listType">
          <el-input style="width: 50%" v-model="updateForm.listType"></el-input>
        </el-form-item>
        <el-form-item label="所属课程" prop="courses">
          <el-input style="width: 50%" v-model="updateForm.courses"></el-input>
        </el-form-item>
        <el-form-item label="课程负责人" prop="person">
          <el-input style="width: 50%" v-model="updateForm.person"></el-input>
        </el-form-item>
        <el-form-item label="试卷分数" prop="scope">
          <el-input style="width: 50%" v-model="updateForm.scope"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="修改日期">
          <el-date-picker type="date" placeholder="选择日期" v-model="updateForm.date" style="width: 50%;"></el-date-picker>
        </el-form-item>
      </el-form>
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="reBack(), addDialogVisible2 = false">取 消</el-button>
      <el-button type="primary" @click="addDialogVisible2 = false">确定修改</el-button>
    </span>
  </el-dialog>
  </div>
  </div>
</template>

<script>
export default {
  name: "ExaminationPaperList",
  data() {
    return {
      tableData: [{
        number: '1',
        name: '微观经济学',
        listType: '期末考试',
        courses: '期末考试',
        person: '张维',
        scope: '350分',
        date: '2019-09-09'
      }],
      addDialogVisible: false,
      addDialogVisible2: false,
      addDialogVisible3: false,
      addForm: {
        number: '',
        name: '',
        listType: '',
        courses: '',
        person: '',
        scope: '',
        date: ''
      },
      addFormRules: {
        number: [
          { required: true, message: '请输入序号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' }
        ],
        listType: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        courses: [
          { required: true, message: '请输入所属课程', trigger: 'blur' }
        ],
        person: [
          { required: true, message: '请输入课程负责人', trigger: 'blur' }
        ],
        scope: [
          { required: true, message: '请输入试卷分数', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请输入修改时间', trigger: 'blur' }
        ]
      },
      updateForm: {
        number: '1',
        name: '微观经济学',
        listType: '期末考试',
        courses: '期末考试',
        person: '张维',
        scope: '350分',
        date: '2019-09-09'
      },
      updateFormRules: {
        number: [
          { required: true, message: '请输入序号', trigger: 'blur' }
        ],
        name: [
          { required: true, message: '请输入试卷名称', trigger: 'blur' }
        ],
        listType: [
          { required: true, message: '请输入类型', trigger: 'blur' }
        ],
        courses: [
          { required: true, message: '请输入所属课程', trigger: 'blur' }
        ],
        person: [
          { required: true, message: '请输入课程负责人', trigger: 'blur' }
        ],
        scope: [
          { required: true, message: '请输入试卷分数', trigger: 'blur' }
        ],
        date: [
          { type: 'date', required: true, message: '请输入修改时间', trigger: 'blur' }
        ]
      },
      selectForm: {
        number: '1',
        name: '微观经济学',
        listType: '期末考试',
        courses: '期末考试',
        person: '张维',
        scope: '350分',
        date: '2019-09-09'
      }
    };
  },

  methods: {
    handleClick (row) {
      console.log(row)
    },
    del () {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    reBack () {
      this.$refs.updateFormRef.resetFields()
    },
    reBack2 () {
      this.$refs.addFormRef.resetFields()
    }
  }
};
</script>
<style lang='scss' scoped>
  .new_box{
    transform: translate(85%);
  }
</style>
<template>
  <div>
    <el-button type="primary" @click="addDialogVisible = true" class="addBut">新建</el-button>
    <el-table
      ref="teaching_calendar_table_ref"
      :data="teaching_calendar_table"
      tooltip-effect="dark"
      stripe
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
      <el-table-column prop="course" label="所属课程" show-overflow-tooltip></el-table-column>
      <el-table-column prop="cadre" label="课程负责人" show-overflow-tooltip></el-table-column>
      <el-table-column prop="class_hour" label="课程学时" show-overflow-tooltip></el-table-column>
      <el-table-column prop="term" label="学年学期" show-overflow-tooltip></el-table-column>
      <el-table-column prop="professional" label="专业" show-overflow-tooltip></el-table-column>
      <el-table-column prop="class" label="班级" show-overflow-tooltip></el-table-column>
      <el-table-column prop="revised_date" label="修正日期" show-overflow-tooltip></el-table-column>
      <el-table-column prop="state" label="状态" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" show-overflow-tooltip>
        <template slot-scope="scope">
          <!-- 查看按钮 -->
          <el-tooltip effect="dark" content="查看" placement="top" :enterable="false">
            <el-button
              type="warning"
              icon="el-icon-info"
              circle
              size="mini"
              @click="showCheckDialog(scope.row.id)"
            ></el-button>
          </el-tooltip>
          <!-- 修改按钮 -->
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            size="mini"
            @click="showEditDialog(scope.row.id)"
          ></el-button>
          <!-- 删除按钮 -->
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            size="mini"
            @click="removeUserById(scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加日历的对话框 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
      <!-- 内容主体区域 -->
      <el-form :model="addForm" :rules="addFormRules" ref="addFormRef" label-width="70px"></el-form>
      <!-- 底部区域 -->
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 查看日历的对话框 -->
    <el-dialog title="查看日历" :visible.sync="checkDialogVisible" width="50%">
      <el-form :model="checkForm" ref="checkFormRef" label-width="70px"></el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="checkDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="checkDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 修改日历的对话框 -->
    <el-dialog title="修改日历" :visible.sync="editDialogVisible" width="50%" @close="editDialogClosed">
      <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px"></el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TeachingEducation',
  data() {
    return {
      teaching_calendar_table: [
        {
          id: 1,
          course: '审计学专业(IAEP)',
          cadre: '阴丽华',
          class_hour: '审计学院',
          term: '2019级',
          professional: '草稚阳',
          class: '2019-10-10',
          revised_date: '2019-10-10',
          state: '未提交'
        },
        {
          id: 2,
          course: '审计学专业(IAEP)',
          cadre: '蒋方舟',
          class_hour: '审计学院',
          term: '2019级',
          professional: '草稚阳',
          class: '2019-10-10',
          revised_date: '2019-10-10',
          state: '已通过'
        }
      ],
      addDialogVisible: false,
      checkDialogVisible: false,
      editDialogVisible: false,
      addForm: {},
      addFormRules: {},
      checkForm: {},
      editForm: {},
      editFormRules: {}
    }
  },

  methods: {
    // 监听添加日历对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields()
    },
    // 展示查看对话框
    showCheckDialog(id) {
      this.checkDialogVisible = true
    },
    // 监听修改日历对话框的关闭事件
    editDialogClosed() {
      this.$refs.editFormRef.resetFields()
    },
    // 展示修改对话框
    showEditDialog(id) {
      this.editDialogVisible = true
    },
    // 根据id删除对应用户的信息
    async removeUserById(id) {
      // 弹框询问用户是否删除
      const confirmResult = await this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      // 如果用户确认删除，则返回值为字符串 confirm
      // 如果用户取消删除，则返回值为字符串 cancel
      // console.log(confirmResult)
      if (confirmResult !== 'confirm') return this.$message.info('已取消删除')
      // const { data: res } = await this.$http.delete();
      // if (res.meta.status !== 200) return this.$message.error("删除用户失败！");
      this.$message.success('删除用户成功！')
      // this.getCalendarList();
    }
  }
}
</script>
<style lang="scss" scoped>
.addBut {
  margin: 15px;
}
</style>

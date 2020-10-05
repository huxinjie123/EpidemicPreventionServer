<template>
  <div class="schemeList">
    <div>
      <el-header>
        <div class="operateButton" style="position: relative;line-height: 40px">
          <el-row type="flex" justify="space-between">
            <el-col :span="8">
              <div>
                <el-button type="primary" size="small" @click="addScheme">
                  新建
                </el-button>
                <el-button type="primary" size="small" @click="importScheme">
                  导入
                </el-button>
                <el-button type="primary" size="small" @click="exportScheme">
                  导出
                </el-button>
              </div>
            </el-col>
            <el-col :span="8">
              <div style="float: right;">
                <el-button type="primary" size="small" @click="addTemplate">
                  管理员创建模板
                </el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-header>
      <el-main>
        <el-table 
          :data="schemeListData" 
          :max-height="maxHeight" 
          border
          style="width: 100%;border-radius: 12px 12px 0 0;height: 706px;background:#F1F6FA;"
          :header-cell-style="{background:'#E0E7F4'}"
          @selection-change="handleSelectionChange"
          :empty-text="tip"
        >
          <el-table-column type="selection" fixed align="center"></el-table-column>
          <el-table-column type="index" label="序号" width="50" align="center"></el-table-column>
          <el-table-column prop="name" label="名称" align="center" show-overflow-tooltip></el-table-column>
          <el-table-column prop="college" label="所在学院" align="center"></el-table-column>
          <el-table-column prop="grade" label="适用年" align="center"></el-table-column>
          <el-table-column prop="majorTeacher" label="专业负责人" align="center"></el-table-column>
          <el-table-column prop="createTime" label="时间" align="center">
            <template slot-scope="scope">
              <!-- <span>{{ scope.row.createTime | formatDate }}</span> -->
              <span>{{ scope.row.createTime }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态" align="center">
            <template slot-scope="scope">
              <span>{{({"0":"待提交","1":"待审核","2":"待复审", "3":"通过", "4":"已拒绝"}[scope.row.status])}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" fixed="right" align="center">
            <template slot-scope="scope">
              <el-button type="text" size="small" style="width: 32px;" @click="viewScheme(scope.row)">
                查看
              </el-button>
              <el-button type="text" size="small" style="width: 32px;" @click="editScheme(scope.row)" 
                :disabled="['1','2','3'].includes(scope.row.status)">
                编辑
              </el-button>
              <el-button type="text" size="small" style="width: 32px;" @click="deleteScheme(scope.row)" 
                :disabled="['1','2','3'].includes(scope.row.status)">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
      <el-footer>
        <el-pagination 
          v-if="pageInfo.total != 0" 
          :total="pageInfo.total" 
          :page-sizes="[20,40,60,80,100]" 
          :page-size="pageInfo.pageSize" 
          @size-change="handleSizeChange" 
          :current-page="pageInfo.pageNumber" 
          @current-change="handleCurrentChange" 
          layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </el-footer>
      <!-- 新建弹窗 -->
      <el-dialog title="新建培养方案" :visible.sync="addSchemeVisible" width="500px">
        <div>
          <div style="position: relative;width:60%;display: flex;margin-bottom:40px;">
            <span style="width:140px;margin-top: 12px;">
              <i style="color: red;font-style: normal;">*&nbsp;</i>方案名称：
            </span>
            <el-input placeholder="请输入方案名称" v-model="schemeName" value></el-input>
          </div>
          <div style="position: relative;width:60%;display: flex;margin-bottom:40px;">
            <span style="width:110px;margin-top: 12px;">
              <i style="color: red;font-style: normal">*&nbsp;</i>所在学院：
            </span>
            <el-select v-model="collegeId" placeholder="请选择学院" @change="collegeSelectChange">
              <el-option 
                v-for="item in collegeList" 
                v-bind:key="item.id" 
                :label="item.name" 
                :value="item.id"></el-option>
            </el-select>
          </div>
          <div style="position: relative;width:60%;display: flex;margin-bottom:40px;">
            <span style="width:110px;margin-top: 12px;">
              <i style="color: red;font-style: normal">*&nbsp;</i>专&emsp;&emsp;业：
            </span>
            <el-select v-model="majorId" placeholder="请选择专业">
              <el-option 
                v-for="item in majorList" 
                v-bind:key="item.id" 
                v-bind:label="item.name" 
                v-bind:value="item.id"></el-option>
            </el-select>
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button size="mini" @click="addSchemeCancel">取消</el-button>
            <el-button type="primary" size="mini" @click="nextStep">下一步</el-button>
          </span>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
  // import api from './api/index';
  // import {formatDate} from "../../../components/mixin/util";

  export default {
    name: 'SchemeList',
    components: {},
    filters: {
      // formatDate(time) {
      //   var date = new Date(time);
      //   return formatDate(date, 'yyyy/MM/dd hh:mm');
      // }
    },
    props: {
      maxHeight: {
        type: Number,
        default: 706
      }
    },
    data() {
      return {
        // 列表
        tip: " ",
        schemeListData: [],
        total: 0,
        pageInfo: {pageNumber: 1, pageSize: 20, total: 0},
        schemeSelection: [],
        // 新建
        addSchemeVisible: false,
        schemeName: "",
        collegeId: "",
        collegeList: [],
        majorId: "",
        majorList: []
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageInfo.pageSize = val;
        this.getSchemeList();
      },
      handleCurrentChange(val) {
        this.pageInfo.pageNumber = val;
        this.getSchemeList();
      },
      async initData() {
        try {
          await this.getSchemeList();
        } catch (error) {

        }
      },
      getSchemeList() {
        this.tip = " ";
        this.schemeListData = [
          {
            name: '审计学专业（IAEP）本科人才培养方案',
            college: '审计学院',
            grade: '2019级',
            majorTeacher: '曹子阳',
            createTime: '2019/12/17',
            status: '0'
          },
          {
            name: '审计学专业（IAEP）本科人才培养方案',
            college: '审计学院',
            grade: '2019级',
            majorTeacher: '曹子阳',
            createTime: '2019/12/17',
            status: '1'
          },
          {
            name: '审计学专业（IAEP）本科人才培养方案',
            college: '审计学院',
            grade: '2019级',
            majorTeacher: '曹子阳',
            createTime: '2019/12/17',
            status: '2'
          },
          {
            name: '审计学专业（IAEP）本科人才培养方案',
            college: '审计学院',
            grade: '2019级',
            majorTeacher: '曹子阳',
            createTime: '2019/12/17',
            status: '3'
          },
          {
            name: '审计学专业（IAEP）本科人才培养方案',
            college: '审计学院',
            grade: '2019级',
            majorTeacher: '曹子阳',
            createTime: '2019/12/17',
            status: '4'
          }
        ];
        this.pageInfo = {pageNumber: 1, pageSize: 20, total: 5};
      },
      handleSelectionChange(val) {
        this.schemeSelection = val;
      },
      addScheme() {
        this.addSchemeVisible = true;
        console.log('新增');
      },
      importScheme() {
        console.log('导入');
      },
      exportScheme() {
        console.log('导出');
      },
      addTemplate() {
        console.log('管理员创建模板');
      },
      getCollegeSelect() {
        this.collegeList= [
          {
            id: 1,
            name: '政府审计学'
          },
          {
            id: 2,
            name: '会计学'
          },
          {
            id: 3,
            name: '精密仪器'
          },
          {
            id: 4,
            name: '光电信息'
          },
          {
            id: 5,
            name: '电子通讯'
          },
          {
            id: 6,
            name: '机械设计'
          }
        ];
      },
      collegeSelectChange(id) {
        this.majorId = "";
        if (id === 1) {
          this.majorList = [
            {
              id: 1,
              name: '信息化工程专业'
            },
            {
              id: 2,
              name: '软件工程专业'
            }
          ];
        } else {
          this.majorList = [
            {
              id: 3,
              name: '英语口语'
            },
            {
              id: 4,
              name: '英语听力'
            }
          ];
        }
      },
      addSchemeCancel() {
        this.addSchemeVisible = false;
      },
      nextStep() {
        if (this.schemeName === "") {
          this.$message.info("方案名称不能为空！");
          return;
        }
        var reg = /^[a-zA-Z0-9\u4e00-\u9fa5（——）]{3,20}$/;
        if (!reg.test(this.schemeName)) {
          this.$message.info("方案名称不符合要求！");
          return;
        }
        if (this.collegeId === "") {
          this.$message.info("请选择学院！");
          return;
        }
        if (this.majorId === "") {
          this.$message.info("请选择专业！");
          return;
        }
        let trainingProgramDto = {
          name: this.schemeName,
          collegeId: this.collegeId,
          majorId: this.majorId
        };
        JSON.stringify(trainingProgramDto);
        console.log('下一步');
      }
    },
    mounted() {
      this.initData();
      this.getCollegeSelect();
    }
  }
</script>
<style lang="scss">
  // @import "./scss/schemesList.scss";
  // @import "./scss/table.scss";
</style>
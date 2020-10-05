<template>
  <div class="courseTrainingSystem">
    <div class="system-nav">
      <el-row type="flex" justify="space-between">
        <el-col class="system-title">一级能力指标</el-col>
        <el-col class="system-title">二级能力指标</el-col>
        <el-col class="system-title">课程培养能力指标</el-col>
      </el-row>
    </div>
    <div class="system-content">
      <el-row type="flex" justify="space-between">
        <el-col class="system-info">1.工程知识：能够将高等数理基础、工程技术基础社会科学基础和软件工程专业知识用于解决软件工程及应用领域的复杂工程问题。</el-col>
        <el-col class="system-info">2.掌握软件工程基础及专业知识。</el-col>
        <el-col class="system-info system-points">
          1.1.1 知识点
          <el-button type="primary" plain size="mini" @click="leadKnowledgePoints">引入知识点</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="system-bottom">
      <el-button type="primary" size="mini">保存</el-button>
    </div>

    <!-- 引入知识点弹窗 -->
    <el-dialog
      title="教学内容"
      :visible.sync="knowledgePointsVisible"
      width="700px"
      :before-close="knowledgePointsClose"
    >
      <el-row :gutter="24">
        <el-col :span="8">
          <cascader
            :data="chapters"
            titleTxt="章"
            :activeIndex="activeChapter"
            @handleSelect="getSections"
          ></cascader>
          <div class="point-button">
            <el-input
              ref="chapterInput"
              type="text"
              v-model="chapterName"
              size="small"
              placeholder="请输入章名称"
              v-show="showChapter"
              icon="el-icon-plus"
              autofocus="true"
            ></el-input>
            <p class="confirm" @click="confirmChapter" v-show="showChapter">确认</p>
            <el-button type="primary" size="small" style="width:100%" @click="addChapter">增加章</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <cascader
            :data="section"
            titleTxt="节"
            :activeIndex="activeSections"
            @handleSelect="getPoints"
          ></cascader>
          <div class="point-button">
            <el-input
              ref="sectionsInput"
              type="text"
              v-model="sectionsName"
              size="small"
              placeholder="请输入节名称"
              v-show="showSections"
              autofocus="true"
            ></el-input>
            <p class="confirm" @click="confirmSections" v-show="showSections">确认</p>
            <el-button
              type="primary"
              size="small"
              style="width:100%"
              @click="addSections"
              icon="el-icon-plus"
              :disabled="activeChapter !== '' ? false : true"
            >增加节</el-button>
          </div>
        </el-col>
        <el-col :span="8">
          <cascader :data="point" titleTxt="知识点" :activeIndex="activeSections"></cascader>
          <div class="point-button">
            <el-input
              ref="pointsInput"
              type="text"
              v-model="pointsName"
              size="small"
              placeholder="请输入知识点"
              v-show="showPoints"
              autofocus="true"
            ></el-input>
            <p class="confirm" @click="confirmPoints" v-show="showPoints">确认</p>
            <el-button
              type="primary"
              size="small"
              style="width:100%"
              @click="addPoints"
              icon="el-icon-plus"
              :disabled="activeSections !== '' ? false : true"
            >增加知识点</el-button>
          </div>
        </el-col>
      </el-row>
      <div slot="footer">
        <el-button @click="knowledgePointsVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="knowledgePointsVisible = false" size="mini">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import cascader from "../../../../components/Cascader/Cascader";
export default {
  name: "CourseTrainingSystem",
  components: {
    cascader
  },
  data() {
    return {
      //知识点
      knowledgePointsVisible: false,
      value: [],
      //章
      chapters: [
        {
          id: "1",
          order: "1",
          showOrder: "1",
          name: "第一章"
        },
        {
          id: "2",
          order: "2",
          showOrder: "2",
          name: "第二章"
        }
      ],
      activeChapter: "",
      //章名称
      chapterName: "",
      //新增章文本
      showChapter: false,
      //节
      section: [],
      sections: [
        {
          id: "1",
          pid: "1",
          order: "1",
          showOrder: "1.1",
          name: "第一节"
        },
        {
          id: "2",
          pid: "2",
          order: "2",
          showOrder: "1.2",
          name: "第二节"
        }
      ],
      activeSections: "",
      //节名称
      sectionsName: "",
      //新增节文本
      showSections: false,
      // 知识点
      point: [],
      points: [
        {
          index: "1",
          order: "1",
          showOrder: "1.1.1",
          name: "知识点1"
        }
      ],
      //知识点名称
      pointsName: "",
      //新增知识点文本
      showPoints: false
    };
  },

  methods: {
    /**
     * 引入知识点 打开弹窗
     */
    leadKnowledgePoints() {
      this.knowledgePointsVisible = true;
    },
    /**
     * 关闭弹窗 清空数据
     */
    knowledgePointsClose() {
      this.showChapter = false;
      this.showSections = false;
      this.showPoints = false;
      this.knowledgePointsVisible = false;
    },
    /**
     * 章列表
     */
    getChapter() {
      this.chapters = this.chapters;
      console.log(this.chapters);
    },
    /**
     * 增加章内容 显示文本框
     */
    addChapter() {
      if (this.showChapter) {
        this.confirmChapter();
      } else {
        this.showChapter = true;
      }
    },
    /**
     * 确认添加章名称 判断文本 为空点击隐藏
     */
    confirmChapter() {
      if (this.chapterName) {
        let req = {
          name: this.chapterName
        };
        console.log(req);
        this.showChapter = false;
        this.chapterName = "";
        this.$refs.chapterInput.focus(); //获取焦点
        this.$nextTick(() => {
          this.showChapter = true;
        });
        this.getChapter();
      } else {
        this.showChapter = false;
      }
    },
    /**
     * 通过章id获取对应的节列表
     */
    getSections(id, index) {
      console.log(id);
      this.pid = id;
      this.section = this.sections;
      if (index != undefined) {
        this.activeChapter = index;
        this.activeSections = "";
        this.point = [];
      }
      console.log(this.section);
    },
    /**
     * 增加节内容 显示文本框
     */
    addSections() {
      if (this.showSections) {
        this.confirmSections();
      } else {
        this.showSections = true;
      }
    },
    /**
     * 确认添加节名称 判断文本 为空点击隐藏
     */
    confirmSections() {
      if (this.sectionsName) {
        let req = {
          name: this.sectionsName,
          pid: this.pid
        };
        console.log(req);
        this.showSections = false;
        this.sectionsName = "";
        this.$refs.sectionsInput.focus(); //获取焦点
        this.$nextTick(() => {
          this.showSections = true;
        });
        this.getSections(this.pid);
      } else {
        this.showSections = false;
      }
    },
    /**
     * 通过节id获取对应的知识点列表
     */
    getPoints(id, index) {
      console.log(id);
      this.pid = id;
      this.point = this.points;
      if (index != undefined) {
        this.activeSections = index;
      }
      console.log(this.point);
    },
    /**
     * 增加知识点内容 显示文本框
     */
    addPoints() {
      if (this.showPoints) {
        this.confirmPoints();
      } else {
        this.showPoints = true;
      }
    },
    /**
     * 确认添加节名称 判断文本 为空点击隐藏
     */
    confirmPoints() {
      if (this.pointsName) {
        let req = {
          name: this.pointsName,
          pid: this.pid
        };
        console.log(req);
        this.showPoints = false;
        this.pointsName = "";
        this.$refs.pointsInput.focus(); //获取焦点
        this.$nextTick(() => {
          this.showPoints = true;
        });
        this.getPoints(this.pid);
      } else {
        this.showPoints = false;
      }
    }
  },
  mounted() {
    this.getChapter();
  }
};
</script>
<style lang='scss' scoped>
.courseTrainingSystem {
  width: 1200px;
  margin: 0 auto;
  .system-nav {
    height: 56px;
    line-height: 56px;
    text-align: center;
    background: #f5f7fa;
    .system-title {
      font-size: 14px;
    }
  }
  .system-content {
    .system-info {
      border: 1px solid #ccc;
      border-top: none;
      padding: 25px 15px;
      height: 200px;
      line-height: 30px;
      text-align: left;
    }
    .system-points {
      position: relative;
      .el-button {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    }
  }
  .system-bottom {
    margin-top: 50px;
    text-align: center;
  }
  .point-button {
    position: relative;
    .el-input {
      margin-bottom: 10px;
    }
    .confirm {
      position: absolute;
      top: 6px;
      right: 10px;
      font-size: 14px;
      color: rgb(111, 194, 243);
      cursor: pointer;
    }
  }
}
</style>

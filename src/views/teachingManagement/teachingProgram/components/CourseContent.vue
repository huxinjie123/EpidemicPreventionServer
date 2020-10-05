<template>
  <div class="courseContent">
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
  </div>
</template>

<script>
import cascader from "../../../../components/Cascader/Cascader";
export default {
  name: "CourseContent",
  components: {
    cascader
  },
  data() {
    return {
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
     document.onclick = evt => {
      this.showAddChapterInput = false;
      this.showAddSectionInput = false;
      this.showAddPointInput = false;
    };
  }
};
</script>
<style lang='scss' scoped>
.courseContent {
  width: 1000px;
  margin: 0 auto;
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

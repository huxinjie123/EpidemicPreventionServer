<template>
  <div class="courseIntroduction">
    <div class="course-nav">课程简介</div>
    <UE :id="ue" :defaultMsg="defaultMsg" :config="config" ref="ue"></UE>
    <div class="course-bottom">
      <el-button type="primary" size="mini" @click="submit">保存</el-button>
    </div>
  </div>
</template>

<script>
import UE from "../../../../components/ue/ue";
export default {
  name: "CourseIntroduction",
  components: {
    UE
  },
  data() {
    return {
      defaultMsg: "",
      config: {
        toolbars: [
          [
            "source",
            "|",
            "undo",
            "redo",
            "fontfamily",
            "link",
            "spechars",
            "bold",
            "italic",
            "underline",
            "|",
            "fontsize",
            "|",
            "kityformula",
            "uploadimage",
            "inserttable"
          ]
        ],
        initialFrameWidth: 1400,
        initialFrameHeight: 450,
        // scaleEnabled: true,  底部富文本
        elementPathEnabled: false, //删除元素路径
        wordCount: false //删除字数统计
      },
      ue: "ue"
    };
  },

  methods: {
    /**
     * 保存 getUEContent获取带标签的文本
     */
    submit() {
      let ue = this.$refs.ue.getUEContent();
      console.log(ue);
    }
  },
  mounted() {}
};
</script>
<style lang='scss' scoped>
.courseIntroduction {
  .course-nav {
    margin-bottom: 20px;
  }
  .course-bottom {
    margin-top: 20px;
    text-align: center;
  }
}
</style>

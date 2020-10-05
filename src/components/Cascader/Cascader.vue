<template>
  <div class="syllabus-cascader">
    <!-- 标题信息 -->
    <div class="cascader-title">{{ titleTxt }}</div>
    <!-- 主题内容 -->
    <div class="cascader-main" :style="{maxHeight : height}">
      <el-scrollbar
        :style="{height : generateHeight >= parseInt(height) ? height : `${generateHeight + 33}px`}"
      >
        <div v-for="(item,index) in data" :key="index" :class="{themeColor:index === activeIndex}">
          <div class="item-list" @click="handleSelect(item.id,index)">
            <p class="item-p">{{item.showOrder}}{{item.name}}</p>
            <div class="item-icon">
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
      </el-scrollbar>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
    titleTxt: String,
    activeIndex: [Number, String],
    height: {
      type: String,
      default: "512px"
    },
    itemHeight: {
      type: String,
      default: "32px"
    },
  },
  data() {
    return {};
  },
  computed: {
    generateHeight() {
      return this.data.length * 32;
    }
  },
  methods: {
    // 选中节点 获取数据
    handleSelect(id, index) {
      this.$emit("handleSelect", id, index);
    }
  }
};
</script>


<style lang="scss">
.syllabus-cascader {
  .el-scrollbar__view {
    width: calc(100% - 1px);
  }
  .el-scrollbar__wrap {
    overflow-x: auto;
  }
  .el-scrollbar__thumb {
    opacity: 1;
    background-color: #409eff;
  }
  .cascader-title {
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    font-weight: normal;
    color: #303133;
    text-align: center;
    border-bottom: 1px solid #cccccc;
    margin-bottom: 10px;
  }
  .cascader-main {
    box-sizing: border-box;
    .item-list {
      text-indent: 8px;
      cursor: pointer;
      position: relative;
      margin-bottom: 10px;
      font-size: 14px;
      .item-p {
        width: 100%;
        height: 100%;
      }
      .item-icon {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
      }
    }
    .themeColor{
      color:#409eff;
    }
  }
}
</style>

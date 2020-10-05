<template>
  <div class="syllabusAside">
    <ul class="syllabus-infor">
      <div v-for="(item,index) in titleList" :key="index">
        <li
          class="aside-list"
          @click="handleCheckList(item.code,item.name)"
          :class="{ isActavied : currentName == item.code }"
        >{{item.name}}</li>
      </div>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SyllabusAside",
  props: {
    titleList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    currentName: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      
    };
  },
  methods: {
    /**
     * 切换目录显示对应页面
     */
    handleCheckList(code, name) {
      this.$emit("handleCheckList", code, name);
    }
  }
};
</script>
<style lang='scss' scoped>
.syllabusAside {
  .syllabus-infor {
    padding-left: 20px;
    font-weight: normal;
    line-height: 32px;
    font-size: 14px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .isActavied{
    color: rgba(64,158,255,1);
  }
}
</style>
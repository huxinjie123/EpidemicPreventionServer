/**
 * @Author: yuankai
 * @Description: 全局组件
 */
import Vue from "./node_modules/vue";
import Demo from "./Demo.vue";

const TEST_DEMO = {
  install: function() {
    Vue.component("TestDemo", Demo);
  }
};

export default TEST_DEMO;
/* 
  最后在main.js中引入并 use()就ok
*/

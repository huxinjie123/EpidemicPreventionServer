import Vue from "vue";
import Vuex from "vuex";
import testDemo from "./modules/useDemo";
import permissionList from "./modules/permission";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    testDemo, // 命名空间的名字
    permissionList
  }
});

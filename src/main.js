// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './icons';
import './style/global.scss'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import './mock';
import './permission'
import permission from './directives/permission';

//引入UEditor
import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.min.js'
import '../static/UE/ueditor.all.js'
import '../static/UE/ueditor.parse.min.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/kityformula-plugin/addKityFormulaDialog.js'
import '../static/UE/kityformula-plugin/getKfContent.js'
import '../static/UE/kityformula-plugin/defaultFilterFix.js'

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.directive('permission', {
  inserted: permission.inserted,
  update: permission.update
})

Vue.use(permission)

// /**
//  * @description:  添加集中管理Bus - 使用vuex就不需要了
//  */
// let vue = new Vue();
// let eventBus = {
//   install(Vue, options) {
//     Vue.prototype.$bus = vue
//   }
// };
// Vue.use(eventBus);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

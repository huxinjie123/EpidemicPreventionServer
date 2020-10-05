import Vue from "vue";
import Router from "vue-router";
// import store from '@/store';
import Login from "@/views/login";
import schemeManageRoute from './modules/schemeManagement'    //方案管理
import teachingManagement from './modules/teachingManagement' //教学管理
import examinationCenter from './modules/examinationCenter' //考试中心
import dataCenter from './modules/dataCenter'           //数据中心
import controlCenter from './modules/controlCenter'   //控制中心

Vue.use(Router);

/**
 * 重写路由的push方法
 */
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      alias: "/login"
    },
    {
      path: "/engin_certification",
      name: "HomeContainer",
      component: () => import("@/views/layout"),
      children: [...schemeManageRoute, ...teachingManagement, ...examinationCenter, ...dataCenter, ...controlCenter]
    },
    {
      path: "*",
      name: "404",
      component: () => import("@/views/layout/404")
    }
  ]
});

export default router;
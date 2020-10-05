// 方案管理
const schemeManageRoute = [
  {
    path: "schemeList", // 方案列表
    name: "SchemeList",
    component: () => import("@/views/schemeManagement/schemeList"),
    meta: {
      permissions: ['admin']
    }
  },
  {
    path: "waitCheck", // 待审核
    name: "WaitCheck",
    component: () => import("@/views/schemeManagement/waitCheck"),
    meta: {
      permissions: ['visitor']
    },
  }
]

export default schemeManageRoute;
//数据中心
const dataCenter = [
    {
      path: "professionalData", // 专业数据
      name: "professionalData",
      component: () => import("@/views/dataCenter/professionalData")
    },
    {
      path: "studentsAnalysis", // 学生个体分析
      name: "studentsAnalysis",
      component: () => import("@/views/dataCenter/studentsAnalysis")
    }
]

export default dataCenter;
// 考试中心
const examinationCenter = [
    {
      path: "examinationPaperList", // 试卷列表
      name: "examinationPaperList",
      component: () => import("@/views/examinationCenter/examinationPaperList")
    },
    {
      path: "examinationList", // 考试列表
      name: "examinationList",
      component: () => import("@/views/examinationCenter/examinationList")
    },
    {
        path: "markingList", // 阅卷列表
        name: "markingList",
        component: () => import("@/views/examinationCenter/markingList")
    },
    {
        path: "questionManagement", // 题库管理
        name: "questionManagement",
        component: () => import("@/views/examinationCenter/questionManagement")
    }
]

export default examinationCenter;
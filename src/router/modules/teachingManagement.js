// 教学管理
const teachingManagement = [{
    path: "mySyllabus", // 我的大纲
    name: "mySyllabus",
    component: () => import("@/views/teachingManagement/teachingProgram/mySyllabus")
  },
  {
    path: "allSyllabus", // 全部大纲
    name: "allSyllabus",
    component: () => import("@/views/teachingManagement/teachingProgram/allSyllabus")
  },
  {
    path: "examineSyllabus", // 审核大纲
    name: "examineSyllabus",
    component: () => import("@/views/teachingManagement/teachingProgram/examineSyllabus")
  },
  {
    path: "teachingCalendar", // 教学日历
    name: "teachingCalendar",
    component: () => import("@/views/teachingManagement/classroomTeaching/teachingCalendar")
  },
  {
    path: "teachingEducation", // 课堂教学
    name: "teachingEducation",
    component: () => import("@/views/teachingManagement/classroomTeaching/teachingEducation")
  },
  {
    path: "teachingEducation/enter", // 进入教学
    name: "teachingEducation/enter",
    component: () => import("@/views/teachingManagement/classroomTeaching/index.vue"),
    redirect: '/engin_certification/teachingEducation/enter/activity',
    children: [{
        path: "/engin_certification/teachingEducation/enter/activity", // 活动列表
        name: "/engin_certification/teachingEducation/enter/activity",
        component: () => import("@/views/teachingManagement/classroomTeaching/teachingEducation/activity")
      },
      {
        path: "/engin_certification/teachingEducation/enter/task", // 作业任务
        name: "/engin_certification/teachingEducation/enter/task",
        component: () => import("@/views/teachingManagement/classroomTeaching/teachingEducation/task")
      },
      {
        path: "/engin_certification/teachingEducation/enter/comment", // 作业详情
        name: "/engin_certification/teachingEducation/enter/comment",
        component: () => import("@/views/teachingManagement/classroomTeaching/teachingEducation/comment")
      }
    ]
  },

  {
    path: "evaluationSystem", // 评价体系
    name: "evaluationSystem",
    component: () => import("@/views/teachingManagement/evaluationSystem")
  },
  {
    path: "resourcesMaterial", // 教学资料
    name: "resourcesMaterial",
    component: () => import("@/views/teachingManagement/resourcesMaterial")
  }
]

export default teachingManagement;

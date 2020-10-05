//控制中心
const controlCenter = [
    {
        path: "roleManagement", // 角色管理
        name: "roleManagement",
        component: () => import("@/views/controlCenter/roleManagement")
    },
    {
        path: "userManagement", // 用户管理
        name: "userManagement",
        component: () => import("@/views/controlCenter/userManagement")
    },
    {
        path: "userArchiving", // 归档用户
        name: "userArchiving",
        component: () => import("@/views/controlCenter/userArchiving")
    },
    {
        path: "collegeManagement", // 学院设置
        name: "collegeManagement",
        component: () => import("@/views/controlCenter/basicInformationTable/collegeManagement")
    },
    {
        path: "majorManagement", // 专业设置
        name: "majorManagement",
        component: () => import("@/views/controlCenter/basicInformationTable/majorManagement")
    },
    {
        path: "courseManagement", // 课程设置
        name: "courseManagement",
        component: () => import("@/views/controlCenter/basicInformationTable/courseManagement")
    },
]

export default controlCenter;
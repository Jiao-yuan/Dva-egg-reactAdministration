// import Home from '../contioners/home/home';
import IndexPage from "../routes/Login/IndexPage";
import UserPage from "../routes/UserPage/UserPage";
import ExamAdd from "../routes/UserPage/ExamManage/Examadd";
import ExamType from "../routes/UserPage/ExamManage/ExamType";
import ExamLook from "../routes/UserPage/ExamManage/ExamLook";
import Marking from "../routes/Marking/index";

import Boy from "../routes/UserPagey/Boy/index";
import Jiaoshi from "../routes/UserPagey/Jiaoshi/index";
// import dynamic from "@/utils/dynamic";

// 马英杰
import home from "@/routes/Statistics/index";
import AddExam from "../routes/Examination/AddExam/index";
import ListExam from "../routes/Examination/ListExam/index";
import EstablishExam from "../routes/Examination/EstablishExam/index";
import ExamDetil from "../routes/Examination/ExamDetil/index";

// 崔耀一
import Student from "../routes/UserPagey/Student/index";
import AddUser from "../routes/UserControl/Adduser/index";
import Role from "../routes/UserControl/Role/index";
import Userlist from "../routes/UserControl/Userlist/index";

import dynamic from 'dva/dynamic';
import {app} from "../index"

const UserPageComponent = dynamic({
  app,
  models: () => [
    import('../models/jy-login'),
  ],
  component: () => import('../routes/Login/IndexPage'),
});

const ExamTypes = dynamic({
  app,
  models: () => [
    import('../models/jy-ExamType'),
  ],
  component: () => import("../routes/UserPage/ExamManage/ExamType"),
});
export default [
  {
    path: "/login",
    component: UserPageComponent ,
    id:'login'
  },
  {
    path: "/home",
    component: UserPage,
    id:"main",
    meta: {
      title: "统计预览"
    },
    children: [
      {
        path: "/home/home",
        component: home,
        id:"main",
        meta: {
          title: "统计预览"
        }
      },
      {
        from: "/home",
        to: "/home/home"
      }
    ]
  },
  {
    path: "/exam",
    component: UserPage,
    id:"main",
    meta: {
      title: "试卷管理"
    },
    children: [
      {
        path: "/exam/add",
        component: ExamAdd,
        id:"main-addQuestions",
        meta: {
          title: "添加试题"
        }
      },
      {
        path: "/exam/type",
        component: ExamTypes,
        id:"main-questionsType",
        meta: {
          title: "试题列表"
        }
      },
      {
        path: "/exam/look",
        component: ExamLook,
        id:"main-watchQuestions",
        meta: {
          title: "查看试卷"
        }
      },
      {
        from: "/exam",
        to: "/exam/add"
      }
    ]
  },

  {
    path: "/teach",
    component: UserPage,
    id:"main",
    meta: {
      title: "班级管理"
    },
    children: [
      {
        path: "/teach/boy",
        component: Boy,
        id:"main-grade",
        meta: {
          title: "班级管理"
        }
      },
      {
        path: "/teach/jiaoshi",
        component: Jiaoshi,
        id:"main-room",
        meta: {
          title: "教室管理"
        }
      },
      {
        path: "/teach/student",
        component: Student,
        id:"main-student",
        meta: {
          title: "学生管理"
        }
      }
    ]
  },

  // 马英杰
  {
    path: "/examination",
    component: UserPage,
    id:"main",
    meta: {
      title: "考试管理"
    },
    children: [
      {
        path: "/examination/AddExam",
        component: AddExam,
        id:"main-examEdit",
        meta: {
          title: "添加试卷"
        }
      },
      {
        path: "/examination/ListExam",
        component: ListExam,
        id:"main-examList",
        meta: {
          title: "试卷列表"
        }
      },
      {
        from: "/examination",
        to: "/examination/AddExam"
      }
    ]
  },
  // 崔耀一
  {
    path: "/usersControl",
    component: UserPage,
    id:"main",
    meta: {
      title: "用户管理"
    },
    children: [
      {
        path: "/usersControl/adduser",
        component: AddUser,
        id:"main-addUser",
        meta: {
          title: "添加用户"
        }
      },
      {
        path: "/usersControl/role",
        component: Role,
        id:"main-role",
        meta: {
          title: "角色管理"
        }
      },
      {
        path: "/usersControl/userlist",
        component: Userlist,
        id:"main-showUser",
        meta: {
          title: "用户展示"
        }
      }
    ]
  },
  // 焦原
  {
    path: "/marking",
    component: UserPage,
    id:"main",
    meta: {
      title: "阅卷管理"
    },
    children: [
      {
        path: "/marking/class",
        component: Marking,
        id:"main-examPaperClassList",
        meta: {
          title: "待批班级"
        }
      },
      {
        from: "/marking",
        to: "/marking/class"
      }
    ]
  },
  {
    from: "/",
    to: "/login"
  }
];

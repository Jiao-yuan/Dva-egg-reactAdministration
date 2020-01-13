/*
 * @Author: fengdm
 * @Date: 2019-12-06 13:47:37
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-12-12 09:54:36
 * 学生管理界面
 */

import React, { Component } from "react";
import MainHeader from "@/components/compon/main-header";
import MainStudent from "./component/MainStudent/index.jsx";
import MainSou from "./component/MainStudent/style";
class Student extends Component {
  state = {
    headtit: "学生管理"
  };

  render() {
    return (
      <div className="mainstudent">
        <MainHeader arr={this.state.headtit}></MainHeader>
        <MainSou />
        <MainStudent />
      </div>
    );
  }
}

export default Student;

import React, { Component } from "react";
import { Button } from "antd";
import BoyItem from "./Class/index";
import yang from "./style.css";
import HeadAlert from "@/components/Alerts/index.js";
export default class index extends Component {
  state = {
    classname: ""
  };
  showModal = () => {
    this.child.Make();
  };
  onRef = ref => {
    this.child = ref;
  };
  render() {
    return (
      <div>
        <div className={yang.boytop}>
          <Button type="primary" onClick={this.showModal}>
            添加班级
          </Button>
          <HeadAlert onRef={this.onRef} />
        </div>
        <div className="boybottom">
          <BoyItem Make={this.Make} />
        </div>
      </div>
    );
  }
}

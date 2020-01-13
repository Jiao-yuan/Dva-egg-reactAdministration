import React, { Component } from "react";
import { Input, Select, Modal, Button } from "antd";
import Axios from "@/utils/headertoken";
import yang from "./index.css";
const { Option } = Select;
export default class index extends Component {
  state = {
    classname: "",
    rommname: "",
    coursename: "",
    visible: false,
    grade_id: ""
  };
  Make = () => {
    this.setState({
      visible: true
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  handerclassname = e => {
    //班级号
    this.setState({
      classname: e.target.value
    });
  };
  handleChange = value => {
    //修改教室号
    this.setState({
      rommname: value
    });
  };
  handleChange1 = value => {
    //修改课程
    this.setState({
      coursename: value
    });
  };
  handleOk = () => {
    let { classname } = this.state;
    this.setState({
      visible: false
    });
    Axios.post("manger/grade", {
      grade_name: classname
    }).then(res => {
      console.log(res);
    });
  };
  handermodify = () => {
    let grade_id = localStorage.getItem("id");
    this.handerToupdate(grade_id);
    this.props.gong();
  };
  handerToupdate = id => {
    Axios.put("manger/grade/update", {
      grade_id: id,
      grade_name: this.state.classname
    }).then(res => {
      console.log(res);
    });
  };
  componentDidMount() {
    this.props.onRef(this);
  }
  render() {
    return (
      <div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>班级名</p>
          <Input placeholder="班级名" onChange={this.handerclassname} />

          <p>教室号</p>
          <Select style={{ width: 120 }} onChange={this.handleChange}>
            <Option value="34031">34031</Option>
            <Option value="30545">30545</Option>
            <Option value="3445">3445</Option>
            <Option value="34401">34401</Option>
          </Select>
          <p>课程名</p>
          <Select style={{ width: 120 }} onChange={this.handleChange1}>
            <Option value="javaScript下">javaScript下</Option>
            <Option value="移动端开发">移动端开发</Option>
            <Option value="项目整合">项目整合</Option>
            <Option value="高级node">高级node</Option>
          </Select>
          <div className={yang.update}>
            <Button type="primary" onClick={this.handermodify}>
              修改
            </Button>
          </div>
        </Modal>
      </div>
    );
  }
}

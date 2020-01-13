import React, { Component } from "react";
import { Input, Select, Button } from "antd";
import Axios from "../../../utils/headertoken";
export default class Examadd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textarea: "",
      textse: "",
      val_min: "",
      val_xin: "",
      val_gin: ""
    };
  }
  textarea(e) {
    this.setState({
      textarea: e.target.value
    });
  }
  textse(e) {
    this.setState({
      textse: e.target.value
    });
  }
  handleChange1(value) {
    this.setState({
      val_min: value
    });
  }
  handleChange2(value) {
    this.setState({
      val_xin: value
    });
  }
  handleChange3(value) {
    this.setState({
      val_gin: value
    });
  }
  title(e) {
    this.setState({
      title: e.target.value
    });
  }
  btnsubmint() {
    //添加试题
    let { title, textarea, textse } = this.state;
    Axios.post("exam/questions", {
      questions_type_id: "fwf0t-wla1q",
      questions_stem: textarea,
      subject_id: "fqtktr-1lq5u",
      exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i",
      user_id: "ypay2t-7uxsd",
      questions_answer: textse,
      title: title
    }).then(res => {
      console.log(res);
    });
  }
  render() {
    const { TextArea } = Input;
    let { title, textarea, textse } = this.state;
    const { Option } = Select;
    return (
      <div>
        <Input
          placeholder="请输入题干"
          value={title}
          onChange={this.title.bind(this)}
        />
        <TextArea
          rows={10}
          value={textarea}
          onChange={this.textarea.bind(this)}
        />
        <div>
          <Select
            defaultValue="选择考试类型"
            style={{ width: 120 }}
            onChange={this.handleChange1.bind(this)}
          >
            <Option value="周考一">周考一</Option>
            <Option value="周考二">周考二</Option>
            <Option value="月考">月考</Option>
          </Select>
        </div>
        <div>
          <Select
            defaultValue="选择课程类型"
            style={{ width: 120 }}
            onChange={this.handleChange2.bind(this)}
          >
            <Option value="模块化开发">模块化开发</Option>
          </Select>
        </div>
        <div>
          <Select
            defaultValue="选择题目类型"
            style={{ width: 120 }}
            onChange={this.handleChange3.bind(this)}
          >
            <Option value="简答题">简答题</Option>
          </Select>
        </div>
        <TextArea rows={10} value={textse} onChange={this.textse.bind(this)} />
        <Button type="primary" onClick={this.btnsubmint.bind(this)}>
          {" "}
          提交
        </Button>
      </div>
    );
  }
}

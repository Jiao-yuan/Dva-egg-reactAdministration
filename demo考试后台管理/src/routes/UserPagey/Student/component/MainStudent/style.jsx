import React, { Component } from "react";
import { Select, Input, Button } from "antd";
import yang from "./style.css";
import { connect } from "dva";
const { Option } = Select;
class style extends Component {
  state = {
    studen_tname: "",
    classn_ame: "",
    grade_name: ""
  };

  handleipt = e => {
    this.setState({
      studen_tname: e.target.value
    });
  };
  handleChange = value => {
    this.setState({
      classn_ame: value
    });
  };
  handleChangesle = value => {
    this.setState({
      grade_name: value
    });
  };
  handleSou = () => {
    let { studen_tname, classn_ame, grade_name } = this.state;
    this.props.dispatch({
      type: "example/addstudents",
      data: { studen_tname, classn_ame, grade_name }
    });
  };
  Reset = () => {
    this.setState({
      studen_tname: "",
      classn_ame: "",
      grade_name: ""
    });
  };
  render() {
    return (
      <div className={yang.stufiter}>
        <Input placeholder="输入学生姓名" onChange={this.handleipt} />
        <Select
          defaultValue="lucy"
          style={{ width: 120, marginRight: 30 }}
          onChange={this.handleChange}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Select
          defaultValue="lucy"
          style={{ width: 120, marginRight: 30 }}
          onChange={this.handleChangesle}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled" disabled>
            Disabled
          </Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Button
          type="搜索"
          onClick={this.handleSou}
          style={{ width: 120, marginRight: 30 }}
        >
          搜索
        </Button>
        <Button type="重置" style={{ width: 120 }} onClick={this.Reset}>
          重置
        </Button>
      </div>
    );
  }
}
export default connect(store => {
  return store;
})(style);

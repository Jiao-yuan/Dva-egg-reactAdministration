import React, { Component } from "react";
import { Table, Select } from "antd";
import Axios from "@/utils/headertoken";
import { connect } from "dva";
class MainStudent extends Component {
  state = {
    columns: [
      {
        title: "姓名",
        dataIndex: "student_name"
      },
      {
        title: "学号",
        dataIndex: "student_id"
      },
      {
        title: "班级",
        dataIndex: "grade_name"
      },
      {
        title: "教室",
        dataIndex: "room_text"
      },
      {
        title: "密码",
        dataIndex: "student_pwd"
      },
      {
        title: "操作",
        dataIndex: "",
        key: "x",
        render: (text, record) => (
          <span>
            <a onClick={() => this.update(record)}> 删除</a>
          </span>
        )
      }
    ],
    data: []
  };
  update(record) {
    console.log(record.student_id);
    Axios.delete("manger/student?id={record.student_id}}").then(res => {
      console.log(res);
    });
  }
  getstudentList() {
    Axios.get("manger/student/new").then(res => {
      console.log(res, "kjdlsajdlajl");
      if (res.code === 1) {
        this.setState({
          data: res.data
        });
      }
    });
  }
  dian = () => {
    let { data } = this.state;

    let newdata = this.props.example.studentname;
    console.log(newdata);
    this.setState({
      data: data.filter(array => array.student_name.match(newdata.studen_tname))
    });
  };
  componentDidMount() {
    this.getstudentList();
  }
  render() {
    return (
      <div className="studentcount">
        <button onClick={this.dian}>点</button>
        <Table
          columns={this.state.columns}
          dataSource={this.state.data}
          size="middle"
        />
      </div>
    );
  }
}

export default connect(store => {
  return store;
})(MainStudent);

import React, { Component } from "react";
import { Table, Divider } from "antd";
import Axios from "@/utils/headertoken";
import HeadAlert from "@/components/Alerts/index";
export default class index extends Component {
  state = {
    columns: [
      {
        title: "班级",
        dataIndex: "grade_name",
        key: "grade_name",
        render: text => <a>{text}</a>
      },
      {
        title: "课程",
        dataIndex: "subject_text",
        key: "subject_text"
      },
      {
        title: "教室号",
        dataIndex: "room_text",
        key: "room_text"
      },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a onClick={() => this.update(record)}> 修改</a>
            <Divider type="vertical" />
            <a onClick={() => this.updelete(record)}>删除</a>
          </span>
        )
      }
    ],
    Classarr: [],
    bForceGet: false
  };
  update(record) {
    window.localStorage.setItem("id", record.grade_id);
    this.child.Make();
    this.gong();
  }
  onRef = ref => {
    this.child = ref;
  };
  updelete(record) {
    console.log(record.grade_id, "dhsahdk");
    Axios.delete("manger/grade/delete", {
      data: {
        grade_id: record.grade_id
      }
    }).then(res => {
      console.log(res);
      if (res.code == 1) {
        this.gong();
      }
    });
  }
  gong = () => {
    Axios.get("manger/grade").then(res => {
      this.setState({
        Classarr: res.data
      });
      console.log(this.state.Classarr);
    });
  };
  componentDidMount() {
    this.gong();
  }
  render() {
    return (
      <div>
        <HeadAlert onRef={this.onRef} gong={this.gong}></HeadAlert>
        <Table
          columns={this.state.columns}
          dataSource={this.state.Classarr}
          rowKey="grade_id"
        />
      </div>
    );
  }
}

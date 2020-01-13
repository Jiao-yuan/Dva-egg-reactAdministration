import React, { Component } from "react";
import { Table, Divider, Button, Modal, Input } from "antd";
import Axios from "@/utils/headertoken";
export default class index extends Component {
  state = {
    columns: [
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
            <Divider type="vertical" />
            <a onClick={() => this.updelete(record)}>删除</a>
          </span>
        )
      }
    ],
    Classarr: [],
    visible: false,
    roomclass: ""
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    this.setState({
      visible: false
    });
    Axios.post("manger/room", {
      room_text: this.state.roomclass
    }).then(res => {
      console.log(res);
      if (res.code == 1) {
        this.publics();
      }
    });
  };
  publics = () => {
    Axios.get("manger/grade").then(res => {
      this.setState({
        Classarr: res.data
      });
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false
    });
  };
  updelete(record) {
    Axios.delete("manger/grade/delete", {
      data: {
        grade_id: record.grade_id
      }
    }).then(res => {
      if (res.code == 1) {
        this.publics();
      }
    });
  }
  componentDidMount() {
    this.publics();
  }
  render() {
    return (
      <div>
        <div>
          <Button type="primary" onClick={this.showModal}>
            添加
          </Button>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>
            <Input
              placeholder="Basic usage"
              onChange={e => {
                this.setState({
                  roomclass: e.target.value
                });
              }}
            />
          </p>
        </Modal>
        <Table
          columns={this.state.columns}
          dataSource={this.state.Classarr}
          rowKey="grade_id"
        />
      </div>
    );
  }
}

import React, { Component } from "react";
import Axios from "../../../utils/headertoken";
import "./css/type.css";
import { Select, Button } from "antd";

export default class ExamType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listtype: [],
      listselect: "",
      listitem: ""
    };
  }
  componentDidMount() {
    Axios.get("exam/questions/new").then(res => {
      this.setState({
        list: res.data
      });
      console.log(res.data[0]);
    });
    Axios.get("exam/subject").then(res => {
      this.setState({
        listtype: res.data
      });
    });
  }
  handleChange(value) {
    console.log(`selected ${value}`);
    this.setState({
      listselect: value
    });
  }
  btncha() { //筛选列表
    let { listselect, listitem } = this.state;
    console.log(listselect, listitem);
    // subject_id:listitem}exam_id:listselect
    Axios.get("api//exam/questions/condition", { subject_id: listitem }).then(
      res => {
        this.setState({
          list: res.data
        });
        // exam_id: "8sc5d7-7p5f9e-cb2zii-ahe5i"
        // exam_name: "周考1"
        // json_path: "4t0rar-39c33-wq098t-phh5ht.json"
        // questions_answer: "function check(str){↵            var U=0,D=0,L=0,R=0;↵↵            for(var i=0; i < str.length; i++){↵                switch (str[i]){↵                    case "U": U++;break;↵                    case "D": D++;break;↵                    case "L": L++;break;↵                    case "R": R++;break;↵                }↵                ↵            }↵            return (U===D && L===R) ↵}"
        // questions_id: "4t0rar-39c33-wq098t-phh5ht"
        // questions_stem: "在二维平面上，有一个机器人从原点 (0, 0) 开始，给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。↵↵移动顺序由字符串表示。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。↵↵示例 1:↵↵        输入: "UD"↵        输出: true↵        解释：机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。↵↵示例 2:↵↵        输入: "LL"↵        输出: false↵        解释：机器人向左移动两次。它最终位于原点的左侧，距原点有两次 “移动” 的距离。我们返回 false，因为它在移动结束时没有返回原点。↵↵↵注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。↵↵请根据题意在横线处填写合适的代码：↵↵↵  function check(str){↵            var U = 0, D = 0, L = 0, R = 0;↵            for(var i=0; i < str.length; i++){↵                switch (str[i]){↵                    case "U":______ ;break;↵                    case "D":______ ;break;↵                    case "L":______ ;break;↵                    case "R":______ ;break;↵                }↵            }↵            return ( ______ && ______ ) ↵  }"
        // questions_type_id: "fwf0t-wla1q"
        // questions_type_text: "代码补全"
        // subject_id: "fqtktr-1lq5u"
        // subject_text: "javaScript上"
        // title: "机器人归位"
        // user_id: "ypay2t-7uxsd"
        // user_name: "dingshaoshan"
      }
    );
  }
  btnlick(list) {
    // subject_id: "94sjh6-lnlxe"
    // subject_text: "项目实战"
    this.setState({
      listitem: list.subject_id
    });
  }
  remove(
    item //删除点击项
  ) {
    console.log(item);
    Axios.post("api/exam/delQuestionsType", { id: item.user_id }).then(res => {
      console.log(res);
    });
  }
  bianji(
    item //编辑项
  ) {
    this.props.history.push({
      pathname: "/exam/look",
      query: item
    });
    console.log(item);
  }
  render() {
    const { Option } = Select;
    let { list, listtype } = this.state;
    return (
      <div>
        <div className="top">
          <b>课程类型:</b>
          <span>All</span>
          {listtype &&
            listtype.map((item, index) => (
              <span key={index} onClick={this.btnlick.bind(this, item)}>
                {item.subject_text}
              </span>
            ))}
        </div>
        {/* 课程类型选择 */}
        <div>
          <Select
            defaultValue=""
            style={{ width: 120 }}
            onChange={this.handleChange.bind(this)}
          >
            <Option value="周考1">周考1</Option>
            <Option value="周考2">周考2</Option>
            <Option value="月考">月考</Option>
          </Select>
          <Button type="primary" icon="search" onClick={this.btncha.bind(this)}>
            查询
          </Button>
        </div>
        {list &&
          list.map((item, index) => (
            <div className="item" key={index}>
              <li>{item.title}</li>
              <p>
                <span className="spans">{item.subject_text}</span>
                <Button type="primary" onClick={this.bianji.bind(this, item)}>
                  编辑
                </Button>
              </p>
            </div>
          ))}
        {/* 试题列表的渲染 */}
      </div>
    );
  }
}

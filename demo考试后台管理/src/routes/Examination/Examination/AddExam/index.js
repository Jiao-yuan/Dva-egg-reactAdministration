import React, { Component } from "react";
import SuperForm from "@/components/SuperForm";
import { connect } from "dva";
import { Select, Button, Input, DatePicker, message} from "antd";
import {examsubject, examType,addExam} from '@/services/examinationLink'

const { Option } = Select;
const {  RangePicker } = DatePicker;

class index extends Component {
  state = {
    defaultFormValue: { 
      questions_stem: "",
      title: "",
      exam_id: "",
      subject_id: "",
      questions_type_id: "",
      questions_answer: "",
    },
    examType: [],
    examTypes: []
  };

  

  componentDidMount() {
    this.fetchExamSubject()
    this.fetchExamType()
  }

  // 选择课程
  fetchExamSubject  = () =>{
    examsubject().then(res => {
        if(res.code === 1 ) {
            this.setState({
                examType:res.data
            })
        }
    })
  }

  // 选择考试类型 
  fetchExamType = () => {
    examType().then(res => {
        if(res.code === 1 ) {
            this.setState({
                examTypes:res.data
            })
        }
    })

  }

  // 创建试卷
  fetchAddExam = (values) => {
      const params = {
        subject_id:values.subject_id,
        exam_id:values.questions_stem,
        title:values.title,
        number:4,
        start_time: values. questions_answer[0]._d.getTime(),
        end_time: values. questions_answer[1]._d.getTime()
      }
      addExam(params).then(res => {
        if(res.code === 1) {
            message.info(res.msg)
            this.props.history.push('/examination/ListExam')
        }else {
            message.info(res.msg)
        }
    })
  }

  // 点击提交按钮
  handleFilterClick = values => {
    this.fetchAddExam(values)
  };

  render() {
    const { defaultFormValue, examType, examTypes } = this.state;
    const formItemLayout = {
      labelCol: { span: 24 },
      wrapperCol: { span: 24 }
    };
    const formConfig = [
      {
        label: "试卷名称",
        name: "questions_stem",
        fieldOptions: {
          rules: [{ required: true, message: "试卷名称" }],
          initialValue: defaultFormValue.title
        },
        content: <Input />
      },
      {
        label: "选择考试类型",
        name: "title",
        fieldOptions: {
          rules: [{ required: true, message: "选择考试类型" }],
          initialValue: defaultFormValue.questions_stem
        },
        content: (
                <Select style={{ width: "200px" }}>
                    {examTypes && examTypes.map(item => (
                        <Option value={item.exam_name} key={item.exam_id}>
                            {item.exam_name}
                        </Option>
                    ))}
                </Select>
        )
      },
      {
        label: "选择课程",
        name: "subject_id",
        fieldOptions: {
          rules: [{ required: true, message: "选择课程" }],
          initialValue: defaultFormValue.subject_id
        },
        content: (
          <Select style={{ width: "200px" }}>
            {examType && examType.map(item => (
              <Option value={item.subject_text} key={item.subject_id}>
                {item.subject_text}
              </Option>
            ))}
          </Select>
        )
      },
      {
        label: "设置提量",
        name: "subject",
        fieldOptions: {
          rules: [{ required: true, message: "设置提量" }],
          initialValue: defaultFormValue.subject
        },
        content: <Input></Input>
      },
      {
        label: "考试时间",
        name: "questions_answer",
        fieldOptions: {
          rules: [{ required: true, message: "考试时间" }],
          initialValue: defaultFormValue.questions_answer
        },
        content: <RangePicker></RangePicker>
      }
    ];
    const buttons = [
      <Button type="primary" htmlType="submit" >
        创建试题
      </Button>
    ];
    return (
      <div>
        <SuperForm
          items={formConfig}
          onSubmit={this.handleFilterClick}
          buttons={buttons}
          resetBtn={false}
          formItemLayout={formItemLayout}
          colSpan={24}
        />
      </div>
    );
  }
}

export default connect(state => state)(index);

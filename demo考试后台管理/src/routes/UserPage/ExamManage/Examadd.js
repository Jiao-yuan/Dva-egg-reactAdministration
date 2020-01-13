import React, { Component } from 'react'
import { Input , Select , Button} from 'antd';
import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6
import Axios from "../../../utils/headertoken"
import "./css/add.css"

export default class Examadd extends Component {
    constructor(props)
    {
        super(props)
        this.state={
            title:'',
            textare1:'',
            textare2:'',
            value1:'',
            value2:'',
            value3:''
        }
    }
    textare1(e){
        // console.log(e)
        this.setState({
            textare1:e
        })
    }
    textare2(e){
        this.setState({
            textare2:e.target.value
        })
    }
    handleChange1(value) {
        console.log(`selected ${value}`);
        this.setState({
            value1:value
        })
      }
    handleChange2(value) {
        console.log(`selected ${value}`);
        this.setState({
            value2:value
        })
      }
    handleChange3(value) {
        console.log(`selected ${value}`);
        this.setState({
            value3:value
        })
      }
    title(e)
    {
        this.setState({
            title:e.target.value
        })
    }
    btnsubmint() //添加试题
    {
        let {title,textare1,textare2,value1,value2,value3}=this.state
        console.log(this.state)
        Axios.post('exam/questions',{
            questions_type_id:'fwf0t-wla1q',
            questions_stem:textare1,
            subject_id:'fqtktr-1lq5u',
            exam_id:'8sc5d7-7p5f9e-cb2zii-ahe5i',
            user_id:'ypay2t-7uxsd',
            questions_answer:textare2,
            title:title
        }).then((res)=>{
            console.log(res)
        })
    }
    render() {
        const { TextArea } = Input;
        let {title,textare1,textare2}=this.state
        const { Option } = Select;
        return (
            <div>
                <p>题目信息</p>
                <p>题干</p>
                <Input placeholder="请输入题干" value={title} onChange={this.title.bind(this)}/>
                <p>题目猪蹄</p>
                {/* <TextArea rows={10}  value={textare1} onChange={this.textare1.bind(this)}/> */}
                <ReactQuill value={textare1}
                  onChange={this.textare1.bind(this)} />
                <div>
                <p>请选择考试类型：</p>
                <Select defaultValue="选择考试类型" style={{ width: 120 }} onChange={this.handleChange1.bind(this)}>
                    <Option value="周考一">周考一</Option>
                    <Option value="周考二">周考二</Option>
                    <Option value="月考">月考</Option>
                </Select>
                </div>
                <div>
                <p>请选择课程类型：</p>
                <Select defaultValue="选择课程类型" style={{ width: 120 }} onChange={this.handleChange2.bind(this)}>
                    <Option value="模块化开发">模块化开发</Option>
                </Select>
                </div>
                <div>
                <p>请选择题目类型：</p>
                <Select defaultValue="选择题目类型" style={{ width: 120 }} onChange={this.handleChange3.bind(this)}>
                    <Option value="简答题">简答题</Option>
                </Select>
                </div>
                <TextArea rows={10}  value={textare2} onChange={this.textare2.bind(this)}/>
                <Button type="primary" onClick={this.btnsubmint.bind(this)}> 提交</Button>
            </div>
        )
    }
}

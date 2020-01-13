import React, { Component } from 'react'
import { Input , Select , Button} from 'antd';
import Axios from "../../../utils/headertoken"

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
        this.setState({
            textare1:e.target.value
        })
    }
    textare2(e){
        this.setState({
            textare2:e.target.value
        })
    }
    handleChange1(value) {
        this.setState({
            value1:value
        })
      }
    handleChange2(value) {
        this.setState({
            value2:value
        })
      }
    handleChange3(value) {
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
        let query=JSON.parse(localStorage.getItem('query'))
        Axios.put('exam/questions/update',{
            questions_id:query.questions_id,
            questions_type_id:'fwf0t-wla1q',
            questions_stem:textare1,
            subject_id:'fqtktr-1lq5u',
            exam_id:'8sc5d7-7p5f9e-cb2zii-ahe5i',
            questions_answer:textare2,
            title:title
        }).then((res)=>{
            console.log(res)
        })
    }
    componentDidMount()
    {
        if(!localStorage.getItem("query"))
        {
            localStorage.setItem('query',JSON.stringify({
                title:"",
                textare1:"",
            }))
        }
        let query=JSON.parse(localStorage.getItem('query'))
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
            // title:'',
            // textare1:'',
            // textare2:'',
            // value1:'',
            // value2:'',
            // value3:''
           
            this.setState({
                title:query.title,
                textare1:query.questions_stem,

            })
    }
    render() {
        const { TextArea } = Input;
        
        let {title,textare1,textare2}=this.state
        const { Option } = Select;
        if(this.props.location.query)
        {
            localStorage.setItem('query',JSON.stringify(this.props.location.query))
        }
        
        return (
            <div>
                <Input placeholder="请输入题干"  value={title} onChange={this.title.bind(this)}/>
                <TextArea rows={10}  value={textare1} onChange={this.textare1.bind(this)}/>
                <div>
                <Select defaultValue="选择考试类型" style={{ width: 120 }} onChange={this.handleChange1.bind(this)}>
                    <Option value="周考一">周考一</Option>
                    <Option value="周考二">周考二</Option>
                    <Option value="月考">月考</Option>
                </Select>
                </div>
                <div>
                <Select defaultValue="选择课程类型" style={{ width: 120 }} onChange={this.handleChange2.bind(this)}>
                    <Option value="模块化开发">模块化开发</Option>
                    
                </Select>
                </div>
                <div>
                <Select defaultValue="选择题目类型" style={{ width: 120 }} onChange={this.handleChange3.bind(this)}>
                    <Option value="简答题">简答题</Option>
                </Select>
                </div>
                <TextArea rows={10}  value='答案' onChange={this.textare2.bind(this)}/>
                <Button type="primary" onClick={this.btnsubmint.bind(this)}> 提交</Button>
            </div>
        )
    }
}

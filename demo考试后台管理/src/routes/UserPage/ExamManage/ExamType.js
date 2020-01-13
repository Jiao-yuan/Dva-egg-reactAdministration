import React, { Component } from 'react'
import Axios from "../../../utils/headertoken"
import "./css/type.css"
import { Select, Button, Spin } from 'antd';
import { connect } from "dva"

class ExamType extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listselect: '',
            listitem: null,
            itemNum: -1,
            exam_id: null,
            questions_type_id: null
        }
    }

    componentDidMount() {
        //    this.getlist()
        this.props.dispatch({
            type: 'jyExamTypes/ExamTypeList'
        })
        this.props.dispatch({
            type: 'jyExamTypes/getexamType'
        })
        this.props.dispatch({
            type: 'jyExamTypes/getQuestionsType'
        })
        this.getheaderlist()
    }
    //   点击all
    Allheaderlist() {
        this.getlist()
    }
    //   获取头部的list数据请求
    getheaderlist() {
        Axios.get('exam/subject').then((res) => {
            this.setState({
                listtype: res.data
            })
        })
    }
    //   获取全部不列表
    getlist() {
        Axios.get('exam/questions/condition').then((res) => {
            this.props.jyExamTypes.list = res.data
            this.forceUpdate()
        })
    }

    btncha()  //筛选列表
    {
        let { listitem, exam_id, questions_type_id } = this.state
        Axios.get("exam/questions/condition", { subject_id: listitem, exam_id, questions_type_id }).then(res => {
            this.props.jyExamTypes.list = res.data
            this.forceUpdate()
        })
    }
    btnlick(list, index) {
        this.setState({
            listitem: list.subject_id,
            itemNum: index
        })
    }
    remove(item)//删除点击项
    {
        Axios.post("exam/delQuestionsType", { id: item.user_id }).then((res) => {
        })
    }
    bianji(item)//编辑项
    {
        this.props.history.push({
            pathname: "/exam/look",
            query: item
        })
    }
    getexamType(item) //得到考试类型
    {
        this.setState({
            exam_id: item.exam_id
        })
    }
    getQuestionsType(item) //得到题目类型
    {
        this.setState({
            questions_type_id: item.questions_type_id
        })
    }
    render() {
        const { Option } = Select;
        const { list } = this.props.jyExamTypes
        let { listtype, itemNum } = this.state
        return (
            <div>
                <div className='top'>
                    <b>课程类型:</b>
                    <span onClick={this.Allheaderlist.bind(this)}>All</span>
                    {
                        listtype && listtype.map((item, index) => <span className={index == itemNum ? 'itemName' : ''} key={index} onClick={this.btnlick.bind(this, item, index)}>{item.subject_text}</span>)
                    }
                </div>
                {/* 课程类型选择 */}
                <div>
                    考试类型:
                <Select defaultValue="" style={{ width: 120 }}>

                        {
                            this.props.jyExamTypes.getexamType && this.props.jyExamTypes.getexamType.map((item, index) => <Option key={index} value={item.exam_name} onClick={this.getexamType.bind(this, item)}>{item.exam_name}</Option>)
                        }

                    </Select>
                    题目类型:
                <Select defaultValue="" style={{ width: 120 }} >
                        {
                            this.props.jyExamTypes.getQuestionsType && this.props.jyExamTypes.getQuestionsType.map((item, index) => <Option key={index} value={item.questions_type_text} onClick={this.getQuestionsType.bind(this, item)}>{item.questions_type_text}</Option>)
                        }
                    </Select>
                    <Button type="primary" icon="search" onClick={this.btncha.bind(this)}>查询</Button>
                </div>
                <div className="example">

                    {
                        list.length > 0 ? list.map((item, index) => <div className='item' key={index}>
                            <li>{item.title}</li>
                            <p><time> <span className='spans'>{item.exam_name}</span>  <span className='spans'>{item.questions_type_text}</span> <span className='spans'>{item.subject_text}</span></time><Button type="primary" onClick={this.bianji.bind(this, item)}> 编辑</Button></p>
                        </div>) : <Spin />

                    }
                </div>

                {/* 试题列表的渲染 */}
            </div>
        )
    }
}
export default connect(state => state)(ExamType)
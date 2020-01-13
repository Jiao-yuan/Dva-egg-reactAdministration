import React, { Component } from 'react'
import {Input, Button, Divider} from 'antd';
import SuperForm from '@/components/SuperForm'
import SuperFormTable from '@/components/SuperFormTable'
// import axios from '@/utils/headertoken'
import {connect} from 'dva'
import {fecthexam,upDateExam} from '@/services/examinationLink'
 class index extends Component {
    
    constructor (props) {
        super (props)
        this.state = {
            data: []
        }
    }

    
    componentDidMount () {
        this.fetchExam()
    }

    
    //请求的方法
    fetchExam = () => {
        fecthexam().then(res =>{
            console.log(res)
            if( res.code  === 1 ) {
                this.setState({
                    data:res.exam
                })
            }
        })
    }

    handleFilterClick () {
        //  console.log(text)
        console.log(121212)
    
    }

    // 点击更新 
    handleUpDateClick = () => {
        const {data} = this.state
         console.log(data)
        // upDateExam().then(res =>{

        // })
    }
    // 点击详情
    handleDetilsClick  =  (text) => {
        console.log(text.exam_exam_id)
        const id = text.exam_exam_id
        this.props.history.push(`/examination/ExamDetil/${id}`)
    } 

    renderForm () {
        const formConfig = [
            {
                label:'考试类型:',
                name:'exanType',
                options:{
                    rules: [
                        {}
                    ],
                },
                content: <Input></Input>
            },
            {
                label:'课程：',
                name:'exanType1',
                content: <Input></Input>
            }
        ]
        const buttons = [
            <Button type='primary' htmlType='submit'>查询</Button>, 
        ]
        return (
            <SuperForm
               items= {formConfig}
               onSubmit= {this.handleFilterClick}
               buttons={buttons}
            ></SuperForm>
        )

    } 


    renderTable () {
        const {data} = this.state
        const columns = [
            {
                title: '试卷管理',
                dataIndex: 'title',
                key: 'title',
                render: text => <a>{text}</a>,
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
                key: 'grade_name',
            },
            {
                title: '创建人',
                dataIndex: 'user_name',
                key: 'user_name',
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'start_time',
            },
            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'end_time',
            },
            {
                title: '操作',
                key: 'action',
                render: (text) => (
                    <span>
                    <Divider type="vertical" />
                    <a onClick={this.handleDetilsClick.bind(this,text)}>详情</a>
                    </span>
                ),
            },
        ];
        return (
            <SuperFormTable
                dataSource = {data}
                columns = {columns}
                rowKey="rowNum"
                buttons = {
                    [
                        <Button>全部</Button>,
                        <Button>进行中</Button>,
                        <Button onClick={this.handleUpDateClick}>已结束</Button>
                    ]
                }
            ></SuperFormTable>
        )
    }
    render() {
        return (
            <div>
                {this.renderForm()}
                {this.renderTable()}
            </div>
        )
    }
}

export default connect( state => state ) (index)
import React, { Component } from 'react';
import  '../styles/index.less'
import Axios from "@/utils/headertoken.js";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

class Role extends Component {

    change = (value) =>{
        console.log(value)
        // const {isShow} = this.state
        this.setState({
            activeInd:value
        })
    }

    adduser = () =>{
      alert('添加用户')
    }

    componentDidMount(){
      Axios.get('user/identity').then(res=>{
        console.log(res)
        if(res.code === 1){
          this.setState({
            identity:res.data
          })
        }
      })
    }

    callback = (key) => {
      console.log(key);
    }

    state = { 
        identity:[],
        activeInd:0,
        isShow: false,
        rightArr:[]
     }
    render() {
        const {showArr,identity,activeInd,isShow} = this.state
        return (
          <div className='box' style={{padding:'20px'}}>
            <div className='left'>
              <ul className="list">
                {
                  identity.map((item,index)=>(
                  <li key={index} className={ activeInd === index ? 'active'  : ''} onClick={()=>this.change(index)}>
                    <h3>{item.identity_text} <span className={ !isShow ?'delete' : ''}>删除</span></h3> 
                    <span>{item.identity_id}</span>
                  </li>
                  ))
                }
                <li>
                  <a onClick={this.adduser}>添加角色</a>
                </li>
              </ul>
            </div>
            <div className='right'>
            <Tabs defaultActiveKey="1" onChange={this.callback}>
              <TabPane tab="视图权限" key="1">
              Content of Tab Pane 1
              </TabPane>
              <TabPane tab="接口权限" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
            </div>
          </div>
        );
    }
}

export default Role;
import React, { Component } from 'react';
import {  Radio,Button,Input,Select } from 'antd';
// import AddItem from './components/AddItem';
import Axios from "@/utils/headertoken.js";
import '../styles/index.less'
const {Option} = Select;

class Adduser extends Component {
    handleModeChange = e => {
      const mode = e.target.value;
      this.setState({ mode });
    };

    handleChange = e =>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }
    
    handleSelectChange =(value) =>{
      this.setState({
        identity_id:value
      })
    }
    
    //点击确认
    Submit = () =>{
      const {user_name,user_pwd,identity_id} = this.state;
      if(user_name != '' && user_pwd != ''){
        Axios.post('user',{user_name,user_pwd,identity_id}).then(res=>{
        console.log(res)
        if(res.code === 1){
          alert('添加成功')
          this.clear()
        }
      })
      }else{
        alert('用户名或密码不能为空')
      }
    
    }
    //重置
    clear = () =>{
      this.setState({
        user_name: '',
        user_pwd: '',
        identity_id:'请选择身份id'
      })
    }
     //获取身份数组
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

    state = {
      //身份
      identity:[],
      mode: 'top', 
      userlist: [
        {
          id:1,
          tag:['添加用户','更新用户'],
          inps:['请输入用户名','请输入密码','请选择身份id'],
          buttons:['确定','重置']
        },
        {
          id:1,
          tag:['添加身份'],
          inps:['请选择身份名称'],
          buttons:['确定','重置']
        },{
          id:1,
          tag:['添加api接口权限'],
          inps:['请输入api接口权限名称'],
          buttons:['确定','重置']
        },{
          id:1,
          tag:['添加视图接口权限'],
          inps:['请选择已有视图'],
          buttons:['确定','重置']
        },{
          id:1,
          tag:['给身份设置api接口权限'],
          inps:['请选择身份id','请选择接口api接口权限'],
          buttons:['确定','重置']
        },
        {
          id:1,
          tag:['给身份设置视图权限'],
          inps:['请选择身份id','请选择视图权限id'],
          buttons:['确定','重置']
        }
      ],
      user_name:'',
      user_pwd:'',
      identity_id:''
    }
    render() {
      const {mode,user_name,user_pwd,identity} = this.state
        return (
          <div>
            <div className='content'>
              <div className="item">
              <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                <Radio.Button value="top">添加用户</Radio.Button>
                <Radio.Button value="left">添加用户</Radio.Button>
              </Radio.Group>
               <div key="1">
                 <Input onChange={this.handleChange} value={user_name} name="user_name" className="item-i" placeholder='请输入用户名' />
                <Input onChange={this.handleChange} value={user_pwd} name="user_pwd" className="item-i" placeholder='请输入密码' />
                <Select onChange={this.handleSelectChange} className="item-i" defaultValue="请选择身份id">
                 <Option value="请选择身份id">请选择身份id</Option>
                 {
                   identity.map(item=>(
                   <Option value={item.identity_id}>{item.identity_text}</Option>
                   ))
                 }
                </Select>
               </div>
                
                <br />
                <Button onClick={this.Submit} type="primary" className='btn'>确认</Button>
                <Button onClick={this.clear}>重置</Button>
              </div>
              <div className="item">
                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                  <Radio.Button value="top">添加用户</Radio.Button>
                </Radio.Group>
                <Input className="item-i" placeholder='请输入用户名' />
                <Button type="primary" className='btn'>确认</Button><Button>重置</Button>
              </div>
              <div className="item">
                <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                  <Radio.Button value="top">添加用户</Radio.Button>
                </Radio.Group>
                <Input className="item-i" placeholder='请输入用户名' />
                <Input className="item-i" placeholder='请输入密码' />
                <Input className="item-i" placeholder='请输入密码' />
                <br />
                <Button type="primary" className='btn'>确认</Button><Button>重置</Button>
              </div>
            </div>
          </div>
        );
    }
    
}

export default Adduser;
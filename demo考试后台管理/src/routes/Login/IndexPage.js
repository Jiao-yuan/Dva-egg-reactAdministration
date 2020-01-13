import React, { Component } from 'react'
import Axios from "../../utils/headertoken"
import { Input , Button } from 'antd';
import "./IndexPage.css"

class IndexPage extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      user:'',
      password:'',
      user_id:''
    }
  }
  usertext(e)
  {
    this.setState({
      user:e.target.value
    })
  }
  passwordtext(e)
  {
    this.setState({
    password:e.target.value
    })
  }
  btnlogin(){
    let {user,password} =this.state
    Axios.post("user/login",{user_name:user,user_pwd:password}).then(
      (res)=>{
        if(res.code==1)
        {
          Axios.get("user/userInfo").then((res)=>{
            let user_id =res.data.user_id
            Axios.get("user/new",{user_id:user_id}).then(
              (res)=>{
               // console.log(res.data)
                 window.localStorage.setItem('children',JSON.stringify(res.data.map((item)=>item.view_id)))
              }
            )
          })
          
          window.localStorage.setItem('token',res.token)
          
          this.props.history.push('/home/home')
        }
      }
    )
     
  }
  componentDidMount() {
   
}
  render() {
    // console.log(this.props)
    let {user,password} =this.state
    return (
      <div className='login'>
        {/* <Login></Login> */}
        <div className='from'>
        <Input placeholder="Basic usage" value={user}  onChange={this.usertext.bind(this)}/>
        <Input.Password placeholder="input password" value={password} onChange={this.passwordtext.bind(this)}/>
        <Button type="primary" onClick={this.btnlogin.bind(this)}>登录</Button> 
        </div>
        
      </div>
    )
  }
  
}

export default IndexPage

import React, { Component } from 'react'
import {Redirect,Route,Switch} from "dva/router"

export default class Config extends Component {
    render() {
        let {routes}=this.props
        let routeArr=routes && routes.filter((item)=>item.component)
        let redArr=routes && routes.filter((item)=>!item.component)
        return <Switch>
        {
            routeArr && routeArr.map((item,index)=><Route key={index} path={item.path} 
            render={(props)=>{
                    return <item.component {...props} routes={item.children} />
                }
            }
            ></Route>)
        }
        {
            redArr && redArr.map((item,index)=><Redirect key={index} from={item.from} to={item.to}></Redirect>)
        }
    </Switch>
    }
}

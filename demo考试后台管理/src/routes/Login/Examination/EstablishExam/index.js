import React, { Component } from "react";
import {Button} from 'antd'
 class index extends Component {

    state = {

    }

    
    render() {
        return (
            <div>
                <Button>+ 添加试题</Button>
                {this.props.match.params.id}
            </div>
        )
    }
}

export default index
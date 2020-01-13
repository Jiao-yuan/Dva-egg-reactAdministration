import React, { Component } from 'react'
import axios from '@/utils/headertoken'
 class index extends Component {
    state = {
        list: []
    }

    componentDidMount () {
        const id = this.props.match.params.id
        axios.get(`exam/exam/${id}`).then(res => {
            if (res.code === 1 )  {
                this.setState({
                    list: res.data
                })
            }
        })
    }

    render() {
        const {list} = this.state
        console.log(list)
        return (
            <div>
                试卷详情
            </div>
        )
    }
}
export default index

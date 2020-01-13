import React, { Component } from "react";
import {Table} from 'antd'
// import SuperForm from "@/components/SuperForm";
import style from "./style.less";
class SuperFormTable extends Component {
  state = {};
  render() {
    return (
        <div className={style.super_table}>
         <div>
             <h2 className='table-title'>{this.props.title}</h2>
             <div className='button-group'>
                {this.props.buttons}
             </div>
         </div>
         <Table {...this.props}></Table>
        </div>
    )
  }
}

export default SuperFormTable;


import React, { Component } from 'react'
import { Pagination } from 'antd';
import { Table } from 'antd';
import Axios from '../../utils/headertoken'

var num = 1;
var numpage = 10
var that = null;
function onShowSizeChange(current, size) {
  num = current
  numpage = size
  that.getlist()
}

function showTotal(page, pageSize) {
  num = page
  numpage = pageSize
  that.getlist()

}
class Maeking extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      columns: [
        {
          title: '班级名',
          dataIndex: 'student_name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: '课程名称',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: '阅卷状态',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags'
        },
        {
          title: '操作',
          key: 'action',
          render: (text, record) => (
            <span onClick={this.btnitem.bind(this, text)}>
              {/* <a>编辑</a>
                      <Divider type="vertical" />
                      <a>Delete</a> */}
              批卷
                    </span>
          ),
        },
      ]
    }
  }
  btnitem(text) {
    console.log(text)
  }

  componentDidMount() {
    this.getlist()

  }
  getlist() {
    that = this
    Axios.get("exam/student", { page: num, pageSize: numpage }).then((res) => {
      this.setState({
        data: res.exam
      })

    })
  }

  render() {
    let { data, columns } = this.state
    return (
      <div>
        <Table columns={columns} dataSource={data} pagination={false} />
        <Pagination size="small" total={100} showSizeChanger={true} showQuickJumper onChange={showTotal} onShowSizeChange={onShowSizeChange} />
      </div>
    )
  }
}

export default Maeking
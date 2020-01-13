import React, { Component } from "react";
import { Layout, Menu, Icon } from "antd";  
import { connect } from "dva";
import { withRouter } from "dva/router";
import "./index.css";
import children from "../../router-luyou/children";
class index extends Component {
  // 点击跳转路由

  MenuItem = ({ item, key, keyPath, domEvent }) => {
    this.props.history.push({
      pathname: key
    });
    this.forceUpdate();
  };
  render() {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    let childrenlist = children.filter(item => item.path !== "/login");
    let getOverView=JSON.parse(window.localStorage.getItem("children"))
    console.log(childrenlist)
    return (
      <Sider width={200} style={{ background: "red" }}>
        <Menu
          mode="inline"
          onClick={this.MenuItem}
          defaultSelectedKeys={[this.props.location.pathname]}
          defaultOpenKeys={[this.props.match.path]}
          style={{ height: "100%", borderRight: 0 }}
        >
          {childrenlist &&
            childrenlist
              .filter(items => items.path)
              .map((item, index) => (
                <SubMenu
                  key={item.path}
                  title={
                    <span>
                      <Icon type="user" />
                      {item.meta.title}
                    </span>
                  }
                >
                  {item.children && item.children
                      .filter(items => items.path &&  getOverView.indexOf(items.id) !== -1)
                      .map((ite, ind) => (
                        <Menu.Item key={ite.path}>{ite.meta.title}</Menu.Item>
                      ))}
                </SubMenu>
              ))}
        </Menu>
      </Sider>
    );
  }
}

export default connect()(withRouter(index));

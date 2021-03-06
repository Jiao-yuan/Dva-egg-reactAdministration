import React, { Component } from "react";
import { Layout, Breadcrumb } from "antd";
import { connect } from "dva";
import Left from "../../layouto/Left/index";
import { withRouter } from "dva/router";
import TwoView from "../../router-luyou/Config";
import "./css/userpage.css";
class index extends Component {
  render() {
    const { Header, Content } = Layout;
    return (
      <Layout className="layouts">
        <Header className="header">
          <div className="logo" />
        </Header>
        <Layout>
          <Left></Left>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <TwoView routes={this.props.routes}></TwoView>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default connect(state => {
  return state.example;
})(withRouter(index));

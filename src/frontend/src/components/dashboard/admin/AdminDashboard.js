/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import { Switch, Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Row, Col } from "antd";
import { DesktopOutlined, PieChartOutlined, FileOutlined, TeamOutlined, UserOutlined,LogoutOutlined,AppstoreOutlined, DollarCircleOutlined } from "@ant-design/icons";
import InvestorsAndFunding from "./InvestorsAndFunding";
import SmeAndProjects from "./SmeAndProjects";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "60px" }}>
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<AppstoreOutlined />}>
            <Link to="/admin/smeandprojects"> SMEs/Projects</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DollarCircleOutlined />}>
            <Link to="/admin/investorsandfunding">Investors/Funding</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<LogoutOutlined/>}> Log Out</Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header">
            <Row align="middle">
              <Col md="10">Welcome {/*** Name of the user  */}</Col>
              <Col></Col>
            </Row>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Router history={this.props.history}>
              <Switch>
                <Route path="/admin/investorsandfunding" component={InvestorsAndFunding} />
                <Route path="/admin/smeandprojects" component={SmeAndProjects} />
              </Switch>
            </Router>
          </Content>
          {/* <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content> */}
        </Layout>
      </Layout>
    );
  }
}

export default AdminDashboard;

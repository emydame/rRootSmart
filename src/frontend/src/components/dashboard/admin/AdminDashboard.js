/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import { Switch, Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Badge, Dropdown, Avatar } from "antd";
import {CaretDownFilled, UsergroupAddOutlined, SettingOutlined, UserOutlined,LogoutOutlined,AppstoreOutlined, DollarCircleOutlined,FileDoneOutlined, BellFilled } from "@ant-design/icons";
import InvestorsAndFunding from "./InvestorsAndFunding";
import SmeAndProjects from "./SmeAndProjects";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



const menu = (
  <Menu id="dropdown-menu">
    <Menu.Item className="menu-icon" icon={<UserOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<UsergroupAddOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Manage Users
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<FileDoneOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Review Reports
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<SettingOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Settings
      </a>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<LogoutOutlined />}>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);

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
          {/* <Header className="site-layout-background header"> */}
          <nav class="navbar">
              <Link className="dashboard-img" to="#">
                <img src={"./logo.png"} alt="logo" />
              </Link>
              <div>
                <Badge className="badge-item" count={5}>
                  <a href="#" className="example" />
                </Badge>
                  <BellFilled className="notificationBell" />
                </div>
              <Dropdown overlay={menu}>
                <Avatar src="https://res.cloudinary.com/lordefid/image/upload/v1567112037/220190826_163351912_r9yfcl.jpg" className="ant-dropdown-link" onClick={(e) => e.preventDefault()} />
              </Dropdown>
          </nav>
          
                {/* Content elements are here */}
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

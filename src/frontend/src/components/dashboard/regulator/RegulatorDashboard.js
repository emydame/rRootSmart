/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint no-console: "error" */

import React from "react";
import { Switch, Router, Route, Link } from "react-router-dom";
import { FileDoneOutlined } from "@ant-design/icons";
import { CaretDownFilled, UsergroupAddOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { Layout, Menu, Breadcrumb, Row, Col,Badge, Dropdown, Avatar } from "antd";
import {AppstoreOutlined, DollarCircleOutlined,BellFilled } from "@ant-design/icons";
import { DesktopOutlined, PieChartOutlined,MailOutlined, FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";

import Investors from "./Investors";
import Projects from "./Projects";
import Users from "./Users";
import SMEs from "./SMEs";
import Funds from "./Funds";
import Projectcategories from "./Projectcategories";


const menu = (
  <Menu id="dropdown-menu">
    <Menu.Item className="menu-icon" icon={<UserOutlined />}>
    <Link to="/regulator/Profile"> Profile</Link>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<UsergroupAddOutlined />}>
    <Link to="/regulator/OrgUsers"> Manage Users</Link>
    </Menu.Item>
      <Menu.Item className="menu-icon" icon={<SettingOutlined />}>
      <Link to="/regulator/Settings"> Settings</Link>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<LogoutOutlined />}>
    </Menu.Item>
  </Menu>
);

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class RegulatorDashboard extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "20px" }}>
          <div className="logo"></div>          
          <br />
        <br />
        <Menu
          theme="dark"
          onClick={this.handleClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<MailOutlined />} title="Projects">
            <Menu.Item key="1"><Link to="/regulator/Projectcategories"> Project Categories</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/regulator/Projects"> Projects List</Link></Menu.Item>
                </SubMenu>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Investors">
          <Menu.Item key="1"><Link to="/regulator/Investors"> Investors List</Link></Menu.Item>
          </SubMenu>
            <SubMenu key="sub3" title="SMEs">
            <Menu.Item key="1"><Link to="/regulator/SMEs"> SMEs List</Link></Menu.Item>           
          </SubMenu>
          <SubMenu key="sub4" icon={<SettingOutlined />} title="Funds">
          <Menu.Item key="1"><Link to="/regulator/Funds"> Funds Application</Link></Menu.Item>             
          </SubMenu>
          <SubMenu key="sub5" icon={<SettingOutlined />} title="Users">
          <Menu.Item key="1"><Link to="/regulator/Users"> Users List</Link></Menu.Item>  
         
          </SubMenu>
        </Menu>
        </Sider>
        <Layout className="site-layout">
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
          <Content style={{ margin: "0 16px" }}>
            <Router history={this.props.history}>
              <Switch>
              <Route path="/regulator/projects" component={Projects} />
              <Route path="/regulator/Projectcategories" component={Projectcategories} />
                <Route path="/regulator/Investors" component={Investors} />
                <Route path="/regulator/SMEs" component={SMEs} />
                <Route path="/regulator/Users" component={Users} />
                <Route path="/regulator/Funds" component={Funds} />
              </Switch>
            </Router>
          </Content>
          {/* <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </Layout>
    );
  }
}

export default RegulatorDashboard;

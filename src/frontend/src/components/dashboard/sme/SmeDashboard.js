/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import { Badge, Dropdown, Layout, Menu, Avatar } from "antd";
import { Switch, Link, Router, Route } from "react-router-dom";
import Project from "./Project";
import Proposal from "./Proposal";
import {
  CaretDownFilled,
  UsergroupAddOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  FileDoneOutlined,
  BellFilled,
  ZoomOutOutlined,
  FileAddOutlined
} from "@ant-design/icons";
import Create from "./user/Create";
import Remove from "./user/Remove";
import Update from "./user/Update";


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

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class SmeDashboard extends React.Component {
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
            <Menu.Item key="1" icon={<ZoomOutOutlined />}>
              <Link to="/sme/projects">View Projects</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FileAddOutlined />}>
              <Link to="/sme/proposal">Create Proposal</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="4" icon={<UserOutlined />}>
                <Link to="/sme/create-user">Create</Link>
              </Menu.Item>
              <Menu.Item key="5" icon={<UserOutlined />}>
                <Link to="/sme/update-user">Update</Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<UserOutlined />}>
                <Link to="/sme/deactivate-user">Deactivate</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background header">
          <ul className="dashboard-items">
                <li className="dashboard-item-1">
                    <Link className="dashboard-img" to="#">
                      <img src={"./logo.png"} alt="logo" />
                    </Link></li>
                  <li className="dashboard-item-1 item-right">
                    <Dropdown overlay={menu}>
                      <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                      <CaretDownFilled />
                      </a>
                    </Dropdown>
                </li>  
                <li className="dashboard-item-1 item-right">   
                    <Avatar src="https://res.cloudinary.com/lordefid/image/upload/v1567112037/220190826_163351912_r9yfcl.jpg" />
                </li>
                <li className="dashboard-item-1 item-right">
                    <Badge className="badge-item" count={5}>
                      <a href="#" className="example" />
                    </Badge>
                    <BellFilled className="notificationBell" />
                </li>
              </ul>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Router history={this.props.history}>
              <Switch>
                <Route path="/sme/projects" component={Project} />
                <Route path="/sme/proposal" component={Proposal} />
                <Route path="/sme/create-user" component={Create} />
                <Route path="/sme/update-user" component={Update} />
                <Route path="/sme/deactivate-user" component={Remove} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SmeDashboard;

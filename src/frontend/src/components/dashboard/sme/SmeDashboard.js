/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-console */
/* eslint no-console: "error" */
import React from "react";
import { Badge, Dropdown, Layout, Menu, Avatar } from "antd";
import { Switch, Link, Router, Route } from "react-router-dom";
// import Project from "./Project";
import Proposal from "./Proposal";
import {
  RiseOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  FileDoneOutlined,
  BellFilled,
  ZoomOutOutlined,
  FileAddOutlined
} from "@ant-design/icons";
import Create from "../general/Create";
import Remove from "../general/Remove";
import Update from "../general/Update";
import ProfileDetails from "../sme/user/ProfileDetails";
import EditProfile from "./user/EditProfile";


const menu = (
  <Menu id="dropdown-menu">
    <Menu.Item className="menu-icon" icon={<UserOutlined />}>
      <Link to="/sme/ProfileDetails">Profile</Link>
    </Menu.Item>
    <Menu.Item className="menu-icon" icon={<UsergroupAddOutlined />}>
      <Link to="/sme/create">Manage Users</Link>
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
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ paddingTop: "64px" }}>
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<RiseOutlined />}>
              <Link to="/sme/ProfileDetails">Profile Details</Link>
            </Menu.Item>
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
            <Menu.Item key="4" icon={<LogoutOutlined />}>
              {" "}
              Log Out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <nav class="navbar">
                <Link className="dashboard-img" to="#">
                  <img src={"https://res.cloudinary.com/lordefid/image/upload/c_scale,h_50/v1590937828/Group_160_2x_wad30b.png"} alt="logo" />
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
                {/* <Route path="/sme/projects" component={Project} /> */}
                <Route path="/sme/proposal" component={Proposal} />
                <Route path="/sme/create-user" component={Create} />
                <Route path="/sme/update-user" component={Update} />
                <Route path="/sme/deactivate-user" component={Remove} />
                <Route path="/sme/ProfileDetails" component={ProfileDetails} />
                <Route path="/sme/EditProfile" component={EditProfile} />
              </Switch>
            </Router>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default SmeDashboard;

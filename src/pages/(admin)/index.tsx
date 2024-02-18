import React, { useState } from "react";
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import {
  Layout,
  Menu,
} from "antd";
import {
  PullRequestOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { Header } from "../../components";
import Requests from "./Requests";
import Address from "./Address";

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const { Footer, Sider } = Layout;

  const navigate = useNavigate();

  const menuItems = [
    getItem("Inicio", "dashboard", <HomeOutlined />, <Dashboard />),
    getItem("Pedidos", "pedidos", <PullRequestOutlined />, <Requests />),
    getItem("Endereços", "enderecos", <UsergroupAddOutlined />, <Address />),
    getItem("Detalhes da conta", "edit-account", <SettingOutlined />, <Address />),
  ];

  function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    element?: JSX.Element
  ): any {
    return {
      label,
      key,
      icon,
      element,
    };
  }

  const handleMenuClick = ({ key, label}: any) => {
    if (key) {
      navigate(key);
      console.log(label)
    }
  };

  return (
    <>
      <Layout
        className="main-layout"
        style={{ height: "100vh", overflow: "hidden" }}
      >
        <Header/>
        <Layout>
          <Sider
            width={303}
            className="aside"
            breakpoint="lg"
            collapsedWidth="80"
            trigger={null}
            onCollapse={(collapsed, type) => {
              setCollapsed(collapsed);
            }}
            style={{
              left: 0,
              top: 0,
              bottom: 0,
              maxHeight: "100vh",
              overflow: "hidden",
              background:"#fff"
            }}
          >
            <Menu
              mode="inline"
              items={menuItems}
              defaultSelectedKeys={["/"]}
              className="menu"
              onClick={handleMenuClick}
            />
          </Sider>
          <Layout>
            <Content
              style={{
                maxHeight: "100vh",
                overflowY: "auto",
              }}
            >
              <Routes>
                {menuItems.map((item) => (
                  <Route
                  key={item.key}
                  path={item?.key?.toString()}
                  element={item?.element}
                  />
                  ))}
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}

export default App;

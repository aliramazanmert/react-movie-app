import React from "react";
import { useHistory } from "react-router-dom";

import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const MainLayout = (props) => {
  const history = useHistory();
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[]}>
          <Menu.Item
            key="1"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "20px 50px" }}>{props.children}</Content>
      <Footer style={{ textAlign: "center" }}>©2020 Created by Ali Mert</Footer>
    </Layout>
  );
};

export default MainLayout;

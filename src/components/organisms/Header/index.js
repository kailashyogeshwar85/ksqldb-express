import './style.less';
import React, { useState } from 'react';
import { Row, Col, Menu } from 'antd';
import Logo from 'components/atoms/Logo';
import { MailOutlined, SettingOutlined, AppstoreOutlined } from '@ant-design/icons';
import ThemeSwitch from 'components/atoms/ThemeSwitch';

const { SubMenu } = Menu;

const Header = ({ setTheme }) => {
  const [current, setCurrent] = useState('file');

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Row className="app-header">
      <Col span={2}>
        <Logo />
      </Col>
      <Col span={18}>
          <Menu theme="dark" onClick={handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Navigation One
          </Menu.Item>
          <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
            Navigation Two
          </Menu.Item>
          <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>
      </Col>
      <Col span={1} offset={2}>
        <ThemeSwitch setTheme={setTheme} />
      </Col>
    </Row>
  );
}

export default Header;

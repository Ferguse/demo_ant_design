import React, { useState, useCallback } from 'react';
import { Menu, Row } from 'antd';

const Navigation = () => {
  const [current, setState] = useState('main');
  const handleClick = useCallback(({ key }) => setState(key), []);

  return (
    <Row type="flex" align="middle">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="demo__header-nav"
      >
        <Menu.Item key="main" className="main__header-nav-item">
          Главная
        </Menu.Item>
        <Menu.Item key="news" className="main__header-nav-item">
          Новости
        </Menu.Item>
        <Menu.Item key="important" className="main__header-nav-item">
          Важное
        </Menu.Item>
        <Menu.Item key="about" className="main__header-nav-item">
          О компании
        </Menu.Item>
      </Menu>
    </Row>
  )
};

export default Navigation;

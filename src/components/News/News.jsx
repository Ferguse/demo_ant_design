import React from 'react';
import { Card, Typography, Icon, Dropdown, Menu, message } from 'antd';

const { Text } = Typography;

const News = () => {
  const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        Посмотреть все новости
      </Menu.Item>
      <Menu.Item key="2">
        Настройки виджета
      </Menu.Item>
      <Menu.Item key="3">
        Удалить виджет
      </Menu.Item>
    </Menu>
  );

  return (
    <Card
      title="Новости"
      extra={
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <a className="ant-dropdown-link" href="#">
            <Icon type="ellipsis" />
          </a>
        </Dropdown>
      }
      className="main__content-card"
    >
      <div className="main__content-card-item">
        <Text type="secondary">
          31 Июля 2019
        </Text>
        <p>
          <Text strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </p>
      </div>
      <div className="main__content-card-item">
        <Text type="secondary">
          5 Июля 2019
        </Text>
        <p>
          <Text strong>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </p>
      </div>
      <div className="main__content-card-item">
        <Text type="secondary" className="main__content-news-date">
          4 Июля 2019
        </Text>
        <p>
          <Text strong>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </p>
      </div>
      <div>
        <a href="#" className="main__content-card-link">
          Все новости
        </a>
      </div>
    </Card>
  )
};

export default News;

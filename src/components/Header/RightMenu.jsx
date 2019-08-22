import React from 'react';
import { Col, Row, Icon, Avatar } from 'antd';

const RightMenu = () => (
  <Row>
    <Col offset={1} span={7}>
      <a href="#">
        <Icon type="plus" style={{ fontSize: '20px', color: 'white' }}/>
      </a>
    </Col>
    <Col offset={1} span={7}>
      <a href="#">
        <Icon type="mail" style={{ fontSize: '20px', color: 'white' }} />
      </a>
    </Col>
    <Col offset={1} span={7}>
      <a href="#">
        <Avatar icon="user" />
      </a>
    </Col>
  </Row>
);

export default RightMenu;

import React  from 'react';
import { Col, Row } from 'antd';

import News from '../News';
import Navigation from "../Navigation";

const MainContent = () => {
  return (
    <div>
      <Row className="demo__content">
        <Navigation />
      </Row>
      <Row className="demo__content">
        <Col span={14}>
          <News />
        </Col>
        <Col offset={1} span={9}>
          <News />
        </Col>
      </Row>
    </div>
  )
};

export default MainContent;

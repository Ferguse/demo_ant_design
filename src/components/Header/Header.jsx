import React  from 'react';
import {Row, Col, Layout, Icon, Typography} from 'antd';
import RightMenu from './RightMenu';
import { withAuth } from "../../authContext";

const { Title } = Typography;
const { Header: AntHeader } = Layout;

const Header = ({ isAuthorized }) => (
  <AntHeader>
    <Row type="flex" align="middle" className="main__header">
      <Col span={18}>
        <Title className="demo__header-title">DEMO ANT DESIGN</Title>
      </Col>
      <Col offset={isAuthorized ? 1 : 5} span={1}>
        <a href="#">
          <Icon type="search" style={{ fontSize: '20px', color: 'white' }} />
        </a>
      </Col>
      {
        isAuthorized && (
          <Col span={4}>
            <RightMenu/>
          </Col>
        )
      }
    </Row>
  </AntHeader>
);

export default withAuth(Header);

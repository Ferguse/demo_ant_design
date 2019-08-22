import React from 'react';
import { Layout, Row } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = ({ children }) => (
  <AntFooter className="main__footer">
    <Row type="flex" align="middle" justify="center">
      {children}
    </Row>
  </AntFooter>
);

export default Footer;

import React from 'react';
import { Layout as AntLayout } from 'antd';

import { withAuth } from '../../authContext';
import Footer from '../../components/Footer';
import MainHeader from '../Header';

const { Content } = AntLayout;

const Layout = ({ children }) => (
  <AntLayout className="demo">
    <MainHeader />

    <Content className="demo__content">
      {children}
    </Content>
    <Footer>Created for Demo Ant Design with love</Footer>
  </AntLayout>
);

export default withAuth(Layout);

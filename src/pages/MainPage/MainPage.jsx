import React, { PureComponent } from 'react';

import Layout from '../../components/Layout';
import MainContent from 'components/MainContent';

class MainPage extends PureComponent {
  render() {
    return (
      <Layout>
        <MainContent />
      </Layout>
    );
  }
}

export default MainPage;

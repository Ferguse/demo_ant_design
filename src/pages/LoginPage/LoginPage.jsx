import React from 'react';
import { Redirect } from 'react-router-dom';

import Layout from 'components/Layout';
import { withAuth } from 'authContext';
import LoginForm from 'components/LoginForm';

const LoginPage = ({ isAuthorized, authorize }) => {
  const handleSubmit = ({ username, password, remember }) => {
    authorize(username, password, remember)
  };

  return (
    isAuthorized
      ? <Redirect to="/app" />
      : (
        <Layout>
          <LoginForm handleSubmit={handleSubmit} />
        </Layout>
      )
  );
};

export default withAuth(LoginPage);

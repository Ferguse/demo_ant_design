import React, { Component, useState, useCallback } from 'react';
const { Provider, Consumer } = React.createContext('');

const AuthProvider = ({ children }) => {
  const usernameExample = 'a@a.com';
  const passwordExample = '12345678';
  const [state, setState] = useState({ isAuthorized: false, authError: '' });

  const authorize = useCallback((username, password) => {
    if (username === usernameExample && password === passwordExample) {
      setState({ ...state, isAuthorized: true, authError: '' });
    } else {
      setState({ ...state, authError: 'Почта или пароль не верные' });
    }
  }, []);
  const { isAuthorized, authError } = state;
  return <Provider value={{ isAuthorized, authorize, authError }}>{children}</Provider>
};

const withAuth = WrappedComponent => {
  class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <Consumer>
          {contextProps => <WrappedComponent {...contextProps} {...rest} />}
        </Consumer>
      );
    }
  }

  return AuthHOC;
};

export { AuthProvider, withAuth };

import React, { Component } from 'react';

import LoginPage from './pages/LoginPage'

import {UserProvider} from './contexts/UserContext'

class App extends Component {
  render() {
    return (
      <UserProvider>
        <LoginPage/>
      </UserProvider>
    );
  }
}

export default App;

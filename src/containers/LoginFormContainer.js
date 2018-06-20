import React from 'react';

import LoginForm from '../components/LoginForm';
import {UserConsumer} from '../contexts/UserContext';

export default class LoginFormContainer extends React.Component{
  render(){
    return(
      <UserConsumer>
        {({login}) => (
          <LoginForm onLogin={async (username,password) =>{
            await login(username,password);
          }} />
        )}
      </UserConsumer>
    )
  }
}
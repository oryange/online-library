import React, { useState } from 'react'
import UserContext from './userContext';

function UserProvider({children}) {
  const [login, setLogin] = useState('');
  const [password, setpassword] = useState('');

function sucessLogin(loginText, passwordText) {
  setLogin(loginText);
  setpassword(passwordText);
}

  return (
    <UserContext.Provider
      value={{ login, password, sucessLogin }}
    >
      { children }
    </UserContext.Provider>
  );
}

export default UserProvider;
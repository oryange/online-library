import React, { useContext } from 'react';
import UserContext from '../context/userContext';
import imgUser  from '../images/user.png';
import imgIcon from '../images/icon.png';

function Header() {
  const { login } = useContext(UserContext);
  return (
  <header>
    <img src={ imgUser } alt="user" width="80"/>
    <span>{ login }</span>
    <img src={ imgIcon } alt="searc" width="40"/>
  </header>
  );
}

export default Header;

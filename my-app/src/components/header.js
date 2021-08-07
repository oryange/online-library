import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../context/userContext';
import imgUser  from '../images/user.png';
import imgIcon from '../images/icon.png';
import imgBack from '../images/back.png';
import { FormControl } from 'react-bootstrap';
import BookContext from '../context/bookContext';

function Header(props) {
  const { login } = useContext(UserContext);
  const { filterBooks } = useContext(BookContext);
  const [ showFilter, setFilter ] = useState(false);
  const [ filterText, setFilterText ] = useState('');

  function toggleFilter(){
    setFilter((previous) => !previous)
  }

  useEffect(()=> {
    filterBooks(filterText);
  }, [filterText]);


  return (
  <header>
    {showFilter ? 
      (<FormControl
        size="lg"
        onChange={({ target })=> setFilterText(target.value)}
        aria-describedby="basic-addon1"
      />)
      : (<div>
        <img className="image-user" src={ imgUser } alt="user" width="80"/>
        <span className="user-login">{ login }</span>
      </div>)
    }
    <button
      onClick={ toggleFilter }
      type="button"
      className='button-search'
    >
      <img src={ imgIcon } alt="search" className="icon"/>
    </button>
    <Link to="/">
      <img src={ imgBack } alt="back" className="icon"></img>
    </Link>
  </header>
  );
}

export default Header;

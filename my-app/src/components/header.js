import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../context/userContext';
import imgUser  from '../images/user.png';
import imgIcon from '../images/icon.png';
import { FormControl } from 'react-bootstrap';
import BookContext from '../context/bookContext';

function Header() {
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
        onChange={({ target })=> setFilterText(target.value)}
        aria-describedby="basic-addon1"
      />)
      : (<div>
        <img src={ imgUser } alt="user" width="80"/>
        <span>{ login }</span>
      </div>)
    }
    <button onClick={ toggleFilter } type="button">
      <img src={ imgIcon } alt="search" width="40"/>
    </button>
  </header>
  );
}

export default Header;

import React, { useContext } from 'react';
import Header from '../components/header';
import BookList from '../components/BookList';
import BookContext from '../context/bookContext';
import FilteredList from '../components/FilteredList';
import { Button } from 'react-bootstrap';

function Home(props) {
  function pushLogin() {
    const {history} = props
    history.push('/')
  }
  const { filteredBooks } = useContext(BookContext);
  return (
  <>
    <Header />
    {
    filteredBooks.items ? <FilteredList /> : <BookList />
    }
    <Button variant="primary" size="lg" active onClick={ pushLogin }> login with new user</Button>
  </>

  );
}

export default Home;

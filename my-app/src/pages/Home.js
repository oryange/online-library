import React, { useContext } from 'react';
import Header from '../components/header';
import BookList from '../components/BookList';
import BookContext from '../context/bookContext';
import FilteredList from '../components/FilteredList';

function Home(props) {
  const { filteredBooks } = useContext(BookContext);
  return (
  <>
    <Header />
    {
    filteredBooks.items ? <FilteredList /> : <BookList />
    }
    
  </>

  );
}

export default Home;

import React, { useContext } from 'react';
import Header from '../components/header';
import BookList from '../components/BookList';
import BookContext from '../context/bookContext';
import FilteredList from '../components/FilteredList';

function Home() {
  const { filteredBooks } = useContext(BookContext);
  return (
  <>
    <Header />
    {
     Object.keys(filteredBooks).length > 0 ?
      <FilteredList /> :
      <BookList />
    }
  </>
  );
}

export default Home;

import React from 'react';

import Header from './Components/Header';
import Container from './Components/Container';
import AddBook from './Components/AddBook';
import BookContainer from './Components/Book/BookContainer';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <AddBook />
        <BookContainer />
      </Container>
    </>
  );
};

export default App;
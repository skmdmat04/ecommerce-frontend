// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Shop from './components/Shop';
import { Container } from './components/StyledComponents';

const App = () => {
  return (
    <Container>
<h1>hello from uat1</h1>
      <Header />
      <Shop />
      <Footer />
    </Container>
  );
};

export default App;

import React from 'react';

import { Header, Footer } from './components/common';
import ProductPage from './pages/ProductPage';

import 'pure-react-carousel/dist/react-carousel.es.css';

function App() {
  return (
    <>
      <Header />
      <ProductPage />
      <Footer />
    </>
  )
}

export default App;

import './App.css';
import React, { useState } from "react";
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import ProductsContainer from './Components/Container/ProductsContainer';
import ProductDetail from './Components/Container/ProductDetail';
import './Components/Container/styles.css'


function App() {
  const [query, setQuery] = useState("")

  const updateQueryFunction = (query) => setQuery(query)
  return (
    <>
    <Header updateQueryFunction={updateQueryFunction} />
      <Routes>
        <Route path='/items'  element={<ProductsContainer query={query}/>} />
        <Route path='/item/:id' element={<ProductDetail />} />
      </Routes>

    </>
  );
}

export default App;

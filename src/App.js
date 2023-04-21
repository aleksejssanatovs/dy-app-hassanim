import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './routes/header/header.component';
import Shop from './routes/shop/shop.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index/>
        <Route path="/shop" element={<Shop />}/>
      </Route>
    </Routes>
  );
}

export default App;

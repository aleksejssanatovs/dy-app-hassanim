import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './routes/header/header.component';
import Shop from './routes/shop/shop.component';
import Cart from './routes/cart/cart.component';
import Login from './routes/login/login.compoenent';
import Home from './routes/home/home.copmonent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
      </Route>
    </Routes>
  );
}

export default App;

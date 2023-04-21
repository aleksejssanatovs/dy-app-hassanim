import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './routes/header/header.component';
import Shop from './routes/shop/shop.component';
import Cart from './routes/cart/cart.component';
import Login from './routes/login/login.compoenent';
import Home from './routes/home/home.copmonent';
import Item from './routes/item/item.components';

import { useEffect } from 'react';
import { auth, onAuthStateChanged } from './utils/firebase.utils';
import { useDispatch } from 'react-redux';
import { login, logout } from './toolkit/user/userSlice';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/item/:id" element={<Item />} />
      </Route>
    </Routes>
  );
}

export default App;

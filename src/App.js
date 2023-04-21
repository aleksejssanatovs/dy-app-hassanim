import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './routes/header/header.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index/>
      </Route>
    </Routes>
  );
}

export default App;

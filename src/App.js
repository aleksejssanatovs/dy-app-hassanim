import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={}>
        <Route index element={}></Route>
      </Route>
    </Routes>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SomePage from './pages/SomePage';
import HomePage from './pages/HomePage';
import SomeOtherPage from './pages/SomeOtherPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/some-page" element={<SomePage />} />
        <Route path="/some-page/:id" element={<SomeOtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;

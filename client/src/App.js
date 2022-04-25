import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quote from './pages/Quote'

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/quotes' element={<Quote />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
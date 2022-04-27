import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quote from './pages/Quote'
import Thanks from './components/Thanks/Thanks';
import ThanksLong from './components/Thanks/ThanksLong';

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/quotes' element={<Quote />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/thanks-quote' element={<ThanksLong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
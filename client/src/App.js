import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Quote from './pages/Quote'
import Thanks from './components/Thanks/Thanks';
import QuoteLongForm from './components/QuoteComp/QuoteLongForm';
import ThanksLong from './components/Thanks/ThanksLong';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import Terms from './pages/Legal/Terms';
import Disclaimer from './pages/Legal/Disclaimer';
import Partners from './pages/Legal/Partners';
import ThanksGoog from './components/Thanks/ThanksGoog';
import ThanksFb from './components/Thanks/ThanksFb';


function App() {
  return (
    <div className="App">
      <div style={{ opacity: '0', position: 'absolute', left: '50%' }}>
        <a href="https://www.a1jkghtrk.com/28KL6/3F292Q1/?source_id={affiliate_id}&sub1={transaction_id}">offers!</a>
      </div>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/goog' element={<HomePage />} />
          <Route exact path='/fb' element={<HomePage />} />
          <Route exact path='/sem' element={<HomePage />} />
          <Route exact path='/quotes' element={<Quote />} />
          <Route exact path='/quote-long' element={<QuoteLongForm />} />
          <Route exact path='/thanks' element={<Thanks />} />
          <Route exact path='/thanks/goog' element={<ThanksGoog />} />
          <Route exact path='/thanks/fb' element={<ThanksFb />} />
          <Route exact path='/thanks-quote' element={<ThanksLong />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route exact path='/terms' element={<Terms />} />
          <Route exact path='/disclaimer' element={<Disclaimer />} />
          <Route exact path='/partners' element={<Partners />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
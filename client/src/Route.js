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

const route = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/quotes' element={<Quote />} />
                <Route exact path='/quote-long' element={<QuoteLongForm />} />
                <Route exact path='/thanks' element={<Thanks />} />
                <Route exact path='/thanks-quote' element={<ThanksLong />} />
                <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
                <Route exact path='/terms' element={<Terms />} />
                <Route exact path='/disclaimer' element={<Disclaimer />} />
                <Route exact path='/partners' element={<Partners />} />
            </Routes>
        </Router>
    )
}

export default route
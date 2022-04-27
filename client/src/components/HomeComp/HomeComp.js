import React from 'react'
import './homeComp.css'
import Logo from './ax-insure-logo.png'
import AxHead from './ax-insure-header.png'
import MissionImg from './ax-insure-mission.png'
import WeHelpImg from './ax-insure-we-help.jpg'
import StartImg from './ax-insure-start-now.png'
import { v4 as uuidv4 } from 'uuid';

const HomeComp = () => {

    function handleFormSubmit() {
        let formData = {
            zip: document.getElementById('zip').value,
            birth: document.getElementById('birth').value,
            id: uuidv4()
        }

        localStorage.setItem('ax-insure-form', JSON.stringify(formData))
        window.location.href = '/thanks'
    }

    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
                <div className='call-us-container'>
                    <p className='call-us'>Request A Call</p>
                    <a className='number' href="tel:8773122944">(877) 312-2944</a>
                </div>
            </div>

            <div className="header-container">
                <div className="header">
                    <h1 className="header-title">Getting Health Insurance Can Be Affordable</h1>
                    <p className="header-sub-title">Find top health insurance quotes in your area. Start by putting your zip code in and we'll help you along the way.</p>
                    <br />
                    <div id='form' className="form">
                        <label htmlFor="birth">Your Date Of Birth</label>
                        <br />
                        <br />
                        <input type="date" name="birth" id="birth" />
                        <br />
                        <label htmlFor="zip">Zipcode</label>
                        <br />
                        <br />
                        <input type="text" name="zip" id="zip" placeholder='Zipcode' />
                        <p>Enter Your 5 digit zipcode and your date of birth to get quotes immediately</p>
                        <br />
                        <button onClick={handleFormSubmit} className='form-btn'>Submit</button>
                        <br />
                        <p>Prefer speaking to a health professional?</p>
                        <a className='prefer' href="tel:8773122944">Call (877) 312-2944 Today</a>
                    </div>
                </div>
                <div className="header-img-container">
                    <img src={AxHead} alt="ax header" className="header-img" />
                </div>
            </div>

            <div className="our-mission">
                <div className="mission-img-container">
                    <img className="mission-img" src={MissionImg} alt="doctors" />
                </div>
                <div className="mission-info-container">
                    <h3 className="mission-title">Our Mission</h3>
                    <br />
                    <p className="mission-text">Our mission is to help new and current health insurance customers find the best health plans that works for them. Whether you are an individual or family. We use AI technology and machine learning to determine what plan is suited best for you.</p>
                    <br />
                    <a className='mission-btn' href="#form">Get Health Plans Today</a>
                </div>
            </div>

            <div className="steps-bg">
                <div className="steps-container">
                    <h1 className='steps-title'>Find Your Plan In 3 Easy Steps</h1>
                    <div className="steps">
                        <h2>Enter Your Zipcode</h2>
                        <p>This will help us provide you plan options in your area since many insurance carriers only operate in certain states, or certain parts of states.</p>
                    </div>
                    <div className="steps">
                        <h2>Complete Your Personal Interview</h2>
                        <p>Tell us a little about yourself so we can match you with plans tailored to what you need.</p>
                    </div>
                    <div className="steps">
                        <h2>Review Plans</h2>
                        <p>We'll show you all of the plan options that fit your lifestyle and your wallet. To help you make a better decision about your health plan, we show you your Real Total Cost. This is what your plan will cost you overall with premiums, co-pays, deductibles, and any other out-of-pocket costs you might incur.</p>
                    </div>
                    <br />
                    <br />
                    <div className='steps-btn-container'>
                        <a className='steps-btn' href="#form">Get Health Plans Today</a>
                    </div>
                </div>
            </div>

            <div className="we-help-container">
                <div className="we-help">
                    <h1 className="we-help-title">We Help You Find The Most Affordable Coverage</h1>
                    <br />
                    <p className="we-help-text">Ax Insure is dedicated to making sure you're informed about the Affordable Care Act and health insurance. To see our guides and other useful information</p>
                    <br />
                    <br />
                    <div className='we-help-btn-container'>
                        <a className='mission-btn' href="#form">Get Health Plans Today</a>
                    </div>
                </div>
                <div className="we-help-img-container">
                    <img src={WeHelpImg} alt="family" className="we-help-img" />
                </div>
            </div>

            <div className="start-BG">
                <div className="start-container">
                    <div className="start">
                        <h1 className="start-title">Start Now!</h1>
                        <br />
                        <p className="start-text">Get your personalized list of health plan options now and start saving big on health insurance</p>
                        <br />
                        <br />
                        <div className='we-help-btn-container'>
                            <a className='mission-btn' href="#form">Get Health Plans Today</a>
                        </div>
                        <br />
                        <br />
                        <p>Prefer speaking to a health professional?</p>
                        <a className='prefer' href="tel:8773122944">Call (877) 312-2944 Today</a>
                    </div>
                    <div className="start-img-container">
                        <img src={StartImg} alt="doc logo" className="start-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeComp
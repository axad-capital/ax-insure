import React from 'react'
import './homeComp.css'
import Logo from './ax-insure-logo.png'
import AxHead from './ax-insure-header.png'

const HomeComp = () => {
    return (
        <div>
            <div className="nav">
                <img className='logo' src={Logo} alt="logo" />
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
                    <div className="form">
                        <label htmlFor="birth">Your Date Of Birth</label>
                        <br />
                        <input type="date" name="birth" id="birth" />
                        <br />
                        <label htmlFor="zip">Zipcode</label>
                        <br />
                        <input type="text" name="zip" id="zip" />
                    </div>
                </div>
                <div className="header-img-container">
                    <img src={AxHead} alt="ax header" className="header-img" />
                </div>
            </div>
        </div>
    )
}

export default HomeComp
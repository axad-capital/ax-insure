import React from 'react'
import Logo from '../HomeComp/ax-insure-logo.png'

const ThanksFb = () => {
    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
                <div className='call-us-container'>
                    <p className='call-us'>Request A Call</p>
                    <a className='number' href="tel:18774750942">1(877) 475-0942</a>
                </div>
                <h1 style={{ textAlign: "center" }}>Check Out Your Health Insurance Quotes</h1>
                <br />
            </div>
        </div>
    )
}

export default ThanksFb
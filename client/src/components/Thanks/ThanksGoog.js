import React from 'react'
import Logo from '../HomeComp/ax-insure-logo.png'

const ThanksGoog = () => {
    return (
        <div>
            <div className="nav">
                <img onClick={() => window.location.href = '/'} className='logo' src={Logo} alt="logo" />
                <div className='call-us-container'>
                    <p className='call-us'>Request A Call</p>
                    <a className='number' href="tel:18666350291">1(866) 635-0291 </a>
                </div>
                <h1 style={{ textAlign: "center" }}>Check Out Your Health Insurance Quotes</h1>
                <br />
            </div>
        </div>
    )
}

export default ThanksGoog
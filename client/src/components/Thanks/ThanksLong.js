import React from 'react'
import Logo from '../HomeComp/ax-insure-logo.png'

const ThanksLong = () => {
    return (
        <div>
            <div>
                <div className="nav">
                    <img onClick={() => window.location.href = '/quotes'} className='logo' src={Logo} alt="logo" />
                    <div className='call-us-container'>
                        <p className='call-us'>Request A Call</p>
                        <a className='number' href="tel:8773122944">(877) 312-2944</a>
                    </div>
                </div>
            </div>

            <h1 style={{ textAlign: "center" }}>Check Out Your Health Insurance Quotes</h1>
            <br />
        </div>
    )
}

export default ThanksLong
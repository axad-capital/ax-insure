import React from 'react'
import './quoteComp.css'
import QuoteImg from './quote-img.jpg'
import Logo from '../HomeComp/ax-insure-logo.png'
import { v4 as uuidv4 } from 'uuid';
import './quoteComp.css'

const QuoteComp = () => {

    function handleShortForm() {
        let formData = {
            first: document.getElementById('first').value,
            last: document.getElementById('last').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            zip: document.getElementById('zip').value,
            birth: document.getElementById('birth').value,
            state: document.getElementById('state').value,
            id: uuidv4()
        }

        localStorage.setItem('ax-insure-short-form', JSON.stringify(formData))
        window.location.href = '/thanks-quote'
    }
    // testing

    return (
        <div>
            <div className="nav">
                <img className='logo' src={Logo} alt="logo" />
                <div className='call-us-container'>
                    <p className='call-us'>Request A Call</p>
                    <a className='number' href="tel:8773122944">(877) 312-2944</a>
                </div>
            </div>

            <div className="title-quote-page-container">
                <h1 className="title-quote-page-title">WE HELP YOU FIND THE MOST AFFORDABLE COVERAGE</h1>
                <br />
                <img className='title-quote-page-img' src={QuoteImg} alt="quote" />
            </div>

            <div className="quote-page-form-container">
                <label htmlFor="zip">Zipcode</label>
                <br />
                <input type="text" name="zip" id="zip" placeholder='Zipcode' />
                <br />
                <br />

                <label htmlFor="first">First Name</label>
                <br />
                <input type="text" name="first" id="first" placeholder='First Name' />
                <br />
                <br />

                <label htmlFor="last">Last Name</label>
                <br />
                <input type="text" name="last" id="last" placeholder='Last Name' />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <br />
                <input type="email" name="email" id="email" placeholder='Email' />
                <br />
                <br />

                <label htmlFor="phone">Phone Number</label>
                <br />
                <input type="tel" name="phone" id="phone" placeholder='Phone Number' />
                <br />
                <br />

                <label htmlFor="birth">Birth Date</label>
                <br />
                <input type="date" name="birth" id="birth" />
                <br />
                <br />
                
                <label htmlFor="state">State</label>
                <br />
                <select name='state' id='state'>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
                <br />
                <br />
                <br />
                <button onClick={handleShortForm} className='form-page-btn'>Submit</button>
            </div>
        </div>
    )
}

export default QuoteComp
import React, { useState } from 'react'
import Logo from '../HomeComp/ax-insure-logo.png'
import QuoteImg from './quote-img.jpg'

const QuoteLongForm = () => {

    const [checked, setChecked] = useState('false')

    function isChecked(e) {
        const checkList = document.querySelectorAll('.checkboxes')
        checkList.forEach(check => console.log(check))
        
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

            <div className="title-quote-page-container">
                <h1 className="title-quote-page-title">WE HELP YOU FIND THE MOST AFFORDABLE COVERAGE</h1>
                <br />
                <img className='title-quote-page-img' src={QuoteImg} alt="quote" />
            </div>

            <div className="quote-page-form-container">

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

                <label htmlFor="zip">Zipcode</label>
                <br />
                <input type="text" name="zip" id="zip" placeholder='Zipcode' />
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

                <label htmlFor="gender">Gender</label>
                <br />
                <select name="gender" id="gender">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="non-binary">Non-binary</option>
                </select>
                <br />
                <br />

                <label htmlFor="stree-address">Street Address</label>
                <br />
                <input type="text" name="stree-address" id="stree-address" placeholder='Street Address' />
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

                <label htmlFor="city">City</label>
                <br />
                <input type="text" name="city" id="city" placeholder='City' />
                <br />
                <br />

                <label htmlFor="homeowner">Are you A Homeowner?</label>
                <br />
                <select name="homeowner" id="homeowner">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <br />

                <label htmlFor="insured">Are you Insured?</label>
                <br />
                <select name="insured" id="insured">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <br />

                <label htmlFor="tobacco">Are you using/smoking tobacco products?</label>
                <br />
                <select name="tobacco" id="tobacco">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <br />

                <label htmlFor="pregnant">Are you currently pregnant?</label>
                <br />
                <select name="pregnant" id="pregnant">
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
                <br />
                <br />

                <div className='checkbox-container'>
                    <h4>Do you have any of the following underlying conditions?</h4>
                    <br />

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="cancer" id="cancer" value={checked} />
                        <label htmlFor="cancer">Cancer</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="HIV/AIDS" id="HIV/AIDS" value={checked} />
                        <label htmlFor="HIV/AIDS">HIV/AIDS</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="alcohol" id="alcohol" value={checked} />
                        <label htmlFor="alcohol">Alcohol/Drug Abuse</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="alzheimers" id="alzheimers" value={checked} />
                        <label htmlFor="alzheimers">Alzheimers</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="asthma" id="asthma" value={checked} />
                        <label htmlFor="asthma">Asthma</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="depression" id="depression" value={checked} />
                        <label htmlFor="depression">Clinical Depression</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="diabetes" id="diabetes" value={checked} />
                        <label htmlFor="diabetes">Diabetes</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="emphysema" id="emphysema" value={checked} />
                        <label htmlFor="emphysema">Emphysema</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="epilepsy" id="epilepsy" value={checked} />
                        <label htmlFor="epilepsy">Epilepsy</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="heart-attack" id="heart-attack" value={checked} />
                        <label htmlFor="heart-attack">Heart Attack</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="heart-disease" id="heart-disease" value={checked} />
                        <label htmlFor="heart-disease">Heart Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="hepatitus" id="hepatitus" value={checked} />
                        <label htmlFor="hepatitus">Hepatitus</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="high-blood-pressure" id="high-blood-pressure" value={checked} />
                        <label htmlFor="high-blood-pressure">High Blood Pressure</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="cholesterol" id="cholesterol" value={checked} />
                        <label htmlFor="cholesterol">High Cholesterol</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="kidney" id="kidney" value={checked} />
                        <label htmlFor="kidney">Kidney Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="mental-illness" id="mental-illness" value={checked} />
                        <label htmlFor="mental-illness">Mental Illness</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="multiple-seclerosis" id="multiple-seclerosis" value={checked} />
                        <label htmlFor="multiple-seclerosis">Multiple Seclerosis</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="pullmonary" id="pullmonary" value={checked} />
                        <label htmlFor="pullmonary">Pullmonary Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="stroke" id="stroke" value={checked} />
                        <label htmlFor="stroke">Stroke</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="ulcers" id="ulcers" value={checked} />
                        <label htmlFor="ulcers">Ulcers</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="vascular" id="vascular" value={checked} />
                        <label htmlFor="vascular">Vascular Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="other" id="other" value={checked} />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <br />

                <button className='form-page-btn'>Submit</button>
            </div>
        </div>
    )
}

export default QuoteLongForm
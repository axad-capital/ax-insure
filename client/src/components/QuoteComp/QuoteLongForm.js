import React, { useState } from 'react'
import Logo from '../HomeComp/ax-insure-logo.png'
import QuoteImg from './quote-img.jpg'
import { v4 as uuidv4 } from 'uuid';

const QuoteLongForm = () => {

    const [errorCheck, setErrorCheck] = useState('')

    // function getAge(birth) {
    //     var today = new Date();
    //     var birthDate = new Date(birth);
    //     var age = today.getFullYear() - birthDate.getFullYear();
    //     var m = today.getMonth() - birthDate.getMonth();
    //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    //         age--;
    //     }
    //     return age;
    // }

    function handleLongFormSub() {
        let longFormData = {
            firstName: document.getElementById('first').value,
            lastName: document.getElementById('last').value,
            email: document.getElementById('email').value,
            zip: document.getElementById('zip').value,
            phone: document.getElementById('phone').value,
            dob: document.getElementById('birth').value,
            gender: document.getElementById('gender').value,
            streetAddress: document.getElementById('street-address').value,
            state: document.getElementById('state').value,
            city: document.getElementById('city').value,
            homeOwner: document.getElementById('homeowner').value,
            insured: document.getElementById('insured').value,
            tobaccoUse: document.getElementById('tobacco').value,
            alcoholic: document.getElementById('alcoholic').value,
            householdSize: document.getElementById('house-size').value,
            householdIncome: document.getElementById('income').value,
            pregnant: document.getElementById('pregnant').value,
            hospitalized: document.getElementById('hospitalized').value,
        }

        if (longFormData.firstName === "" || longFormData.lastName === "" || longFormData.email === "" || longFormData.zip === "" || longFormData.phone === "" || longFormData.dob === "" || longFormData.streetAddress === "" || longFormData.city === "" || longFormData.householdIncome === "") {
            setErrorCheck("All fields are required.")
            return
        }

        if (longFormData.zip.length !== 5) {
            setErrorCheck("Please enter a valid zipcode")
            return
        }

        if (longFormData.householdIncome < 0) {
            setErrorCheck("Please enter a valid income")
            return
        }

        // let age = getAge(longFormData.dob)

        // if (age < 18) {
        //     setErrorCheck("You must be 18 or older to apply")
        //     return
        // }

        setErrorCheck("")

        fetch('https://engsuabtr3r6g2v.m.pipedream.net/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(longFormData)
        })

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

            <div className="title-quote-page-container">
                <br />
                <h1 className="title-quote-page-title">WE HELP YOU FIND THE MOST AFFORDABLE COVERAGE</h1>
                <br />
                <img className='title-quote-page-img' src={QuoteImg} alt="quote" />
            </div>

            <div className="quote-page-form-container">
                <h2 className='get-your-quote-title'>Get Your Health Insurance Quotes Fast</h2>
                <br />
                <div className="line"></div>
                <br />
                <div>
                    <div>

                        <label htmlFor="first">First Name</label>
                        <br />
                        <input type="text" name="first" id="first" placeholder='First Name' />
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="last">Last Name</label>
                        <br />
                        <input type="text" name="last" id="last" placeholder='Last Name' />
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" name="email" id="email" placeholder='Email' />
                        <br />
                        <br />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="zip">Zipcode</label>
                        <br />
                        <input type="text" name="zip" id="zip" placeholder='Zipcode' />
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="phone">Phone Number</label>
                        <br />
                        <input type="tel" name="phone" id="phone" placeholder='Phone Number' />
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="birth">Birth Date</label>
                        <br />
                        <input type="date" name="birth" id="birth" />
                        <br />
                        <br />
                    </div>

                </div>

                <div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <br />
                        <select name="gender" id="gender">
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="non-binary">Non-binary</option>
                        </select>
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="street-address">Street Address</label>
                        <br />
                        <input type="text" name="street-address" id="street-address" placeholder='Street Address' />
                        <br />
                        <br />
                    </div>

                    <div>
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
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="city">City</label>
                        <br />
                        <input type="text" name="city" id="city" placeholder='City' />
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="homeowner">Are you A Homeowner?</label>
                        <br />
                        <select name="homeowner" id="homeowner">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="insured">Are you Insured?</label>
                        <br />
                        <select name="insured" id="insured">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <br />
                        <br />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="tobacco">Are You A Smoker?</label>
                        <br />
                        <select name="tobacco" id="tobacco">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="alcoholic">Are You An Alcoholic?</label>
                        <br />
                        <select name="alcoholic" id="alcoholic">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="house-size">Household Size</label>
                        <br />
                        <select type="number" name="house-size" id="house-size">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20">20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                        </select>
                        <br />
                        <br />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="income">Household Income</label>
                        <br />
                        <input type="number" name="income" id="income" placeholder='Household Income' />
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="pregnant">Are you pregnant?</label>
                        <br />
                        <select name="pregnant" id="pregnant">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <br />
                        <br />
                    </div>

                    <div>
                        <label htmlFor="hospitalized">Recently Hospitalized?</label>
                        <br />
                        <select name="hospitalized" id="hospitalized">
                            <option value="No">No</option>
                            <option value="Yes">Yes</option>
                        </select>
                        <br />
                        <br />
                    </div>
                </div>



                <br />
                {/* <h4 className='underlying-title'>Do you have any of the following underlying conditions?</h4>
                <br />
                <br />
                <div className='checkbox-container'>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="cancer" id="cancer" value="unchecked" />
                        <label htmlFor="cancer">Cancer</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="HIV/AIDS" id="HIV/AIDS" value="unchecked" />
                        <label htmlFor="HIV/AIDS">HIV/AIDS</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="alcohol" id="alcohol" value="unchecked" />
                        <label htmlFor="alcohol">Alcohol/Drug Abuse</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="alzheimers" id="alzheimers" value="unchecked" />
                        <label htmlFor="alzheimers">Alzheimers</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="asthma" id="asthma" value="unchecked" />
                        <label htmlFor="asthma">Asthma</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="depression" id="depression" value="unchecked" />
                        <label htmlFor="depression">Clinical Depression</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="diabetes" id="diabetes" value="unchecked" />
                        <label htmlFor="diabetes">Diabetes</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="emphysema" id="emphysema" value="unchecked" />
                        <label htmlFor="emphysema">Emphysema</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="epilepsy" id="epilepsy" value="unchecked" />
                        <label htmlFor="epilepsy">Epilepsy</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="heart-attack" id="heart-attack" value="unchecked" />
                        <label htmlFor="heart-attack">Heart Attack</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="heart-disease" id="heart-disease" value="unchecked" />
                        <label htmlFor="heart-disease">Heart Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="hepatitus" id="hepatitus" value="unchecked" />
                        <label htmlFor="hepatitus">Hepatitus</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="high-blood-pressure" id="high-blood-pressure" value="unchecked" />
                        <label htmlFor="high-blood-pressure">High Blood Pressure</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="cholesterol" id="cholesterol" value="unchecked" />
                        <label htmlFor="cholesterol">High Cholesterol</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="kidney" id="kidney" value="unchecked" />
                        <label htmlFor="kidney">Kidney Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="mental-illness" id="mental-illness" value="unchecked" />
                        <label htmlFor="mental-illness">Mental Illness</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="multiple-seclerosis" id="multiple-seclerosis" value="unchecked" />
                        <label htmlFor="multiple-seclerosis">Multiple Seclerosis</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="pullmonary" id="pullmonary" value="unchecked" />
                        <label htmlFor="pullmonary">Pullmonary Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="stroke" id="stroke" value="unchecked" />
                        <label htmlFor="stroke">Stroke</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="ulcers" id="ulcers" value="unchecked" />
                        <label htmlFor="ulcers">Ulcers</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="vascular" id="vascular" value="unchecked" />
                        <label htmlFor="vascular">Vascular Disease</label>
                    </div>

                    <div className='checkboxes'>
                        <input onClick={isChecked} type="checkbox" name="other" id="other" value="unchecked" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div> */}
                <br />
            </div>
            <br />
            <div className='form-page-btn-container'>
                <button onClick={handleLongFormSub} className='form-page-btn'>Submit</button>
            </div>
            <br />
            <h5 style={{ color: "red", textAlign: "center" }}>{errorCheck}</h5>
            <br />
        </div>
    )
}

export default QuoteLongForm
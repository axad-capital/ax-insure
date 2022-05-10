import React from 'react'

const FormPageTwo = (props) => {
  return (
    <div>
      <h5 className='long-form-steps'>Step 2 of 3</h5>
      <br />
        <div className='previous-container'>
          <button id='previous' onClick={props.last}>Start Over</button>
        </div>
        <br />
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
      <div className="form-page-two-btn">
        <button className='form-page-btn' onClick={() => props.next(
          document.getElementById('gender').value,
          document.getElementById('street-address').value,
          document.getElementById('state').value,
          document.getElementById('city').value,
          document.getElementById('homeowner').value,
          document.getElementById('insured').value
        )}>
          Next
        </button>
        <br />
        <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>
      </div>

    </div >
  )
}

export default FormPageTwo
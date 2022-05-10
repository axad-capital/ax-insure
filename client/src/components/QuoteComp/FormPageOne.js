import React from 'react'

const FormPageOne = (props) => {
  return (
    <div>
      <h5 className='long-form-steps'>Step 1 of 3</h5>
      <div>
        <br />

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
      <div className="form-page-one-btn">
        <button className='form-page-btn' type='submit' onClick={() =>
          props.next(document.getElementById('first').value,
            document.getElementById('last').value,
            document.getElementById('email').value,
            document.getElementById('zip').value,
            document.getElementById('phone').value,
            document.getElementById('birth').value,
          )}>Next</button>
      </div>
      <p style={{ textAlign: "center", color: "red", fontWeight: 600 }}>{props.errorText}</p>

    </div>
  )
}

export default FormPageOne
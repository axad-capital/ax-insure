import React, { useState } from 'react'
import Logo from '../HomeComp/ax-insure-logo.png'
import QuoteImg from './quote-img.jpg'
import { v4 as uuidv4 } from 'uuid';
import FormPageOne from './FormPageOne';
import FormPageTwo from './FormPageTwo';
import FormPageThree from './FormPageThree';

const QuoteLongForm = () => {

    const [showForm, setShowForm] = useState(1)
    const [errorCheck, setErrorCheck] = useState('')

    function getAge(birth) {
        var today = new Date();
        var birthDate = new Date(birth);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    let storage = JSON.parse(localStorage.getItem('ax-insure-form'))
    if (storage === null) {
        storage = []
    }

    function nextForm1(first, last, email, zip, phone, birth) {
        let age = getAge(birth)

        if (age < 18) {
            setErrorCheck("You must be 18 years of age or older.")
            return
        }

        if (zip === "" || first === "" || last === "" || email === "" || phone === "" || isNaN(age)) {
            setErrorCheck("Missing fields.")
            return
        }

        setErrorCheck("")
        setShowForm(showForm + 1)
        storage.push(first, last, email, zip, phone, birth)
        localStorage.setItem('ax-insure-form', JSON.stringify(storage))
    }

    function nextForm2(gender, address, state, city, homeowner, insured) {

        if (gender === "" || address === "" || state === "" || city === "" || homeowner === "" || insured === "") {
            setErrorCheck("Missing fields.")
            return
        }

        setErrorCheck("")
        setShowForm(showForm + 1)
        storage.push(gender, address, state, city, homeowner, insured)
        localStorage.setItem('ax-insure-form', JSON.stringify(storage))

    }

    function previousForm() {
        setErrorCheck("")
        setShowForm(1)
        localStorage.clear()
    }

    function handleLongFormSub(tobacco, alcoholic, houseSize, income, pregnant, hospitalized) {
        if (income < 0) {
            setErrorCheck("Income must be a postive number")
            return
        }

        if (tobacco === "" || alcoholic === "" || houseSize === "" || income === "" || pregnant === "" || hospitalized === "") {
            setErrorCheck("Missing fields.")
            return
        }

        console.log(tobacco, alcoholic, houseSize, income, pregnant, hospitalized)

        setErrorCheck("")
        storage.push(tobacco, alcoholic, houseSize, income, pregnant, hospitalized)
        localStorage.setItem('ax-insure-form', JSON.stringify(storage))
        sendToPipeDream()
    }

    function sendToPipeDream() {

        let userData = {
            apiId: "1D39A9E077D948B1B578206F918FF5C0",
            apiPassword: "a61268163",
            tcpa: "yes",
            tcpaLanguage: "By clicking “Yes” I provide my signature expressly consenting to contact from axinsure.com, its subsidiaries, affiliates, or agents, and up to eight of its Marketing Partners at the number I provided even if on a federal, state, or local do not call list regarding products or services via live, automated or prerecorded telephone call, text, or email. I understand that my telephone company may impose charges on me for these contacts, and I am not required to enter into this agreement as a condition of any purchase. I understand that I can revoke this consent through any reasonable means. I agree to the Terms of Use and Privacy Policy",
            firstName: storage[0],
            lastName: storage[1],
            email: storage[2],
            zip: storage[3],
            phone: storage[4],
            dob: storage[5],
            gender: storage[6],
            streetAddress: storage[7],
            state: storage[8],
            city: storage[9],
            homeOwner: storage[10],
            insured: storage[11],
            tobaccoUse: storage[12],
            alcoholic: storage[13],
            householdSize: storage[14],
            householdIncome: storage[15],
            pregnant: storage[16],
            hospitalized: storage[17],
        }

        console.log(userData)

        fetch('https://engsuabtr3r6g2v.m.pipedream.net/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })

        let formData = {
            zip: storage[3],
            birth: storage[5],
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


            <div className="quote-page-form-container">
                <h2 className='get-your-quote-title'>Get Your Health Insurance Quotes Fast</h2>
                <br />
                <div className="line"></div>
                <br />
                <div>
                    {showForm === 3 ? <FormPageThree errorText={errorCheck} longFormSubmit={handleLongFormSub} last={previousForm} /> : showForm === 2 ? <FormPageTwo errorText={errorCheck} next={nextForm2} last={previousForm} /> : <FormPageOne next={nextForm1} errorText={errorCheck} />}
                </div>
                <br />
                <div className="title-quote-page-container">
                    <br />
                    <h1 className="title-quote-page-title">WE HELP YOU FIND THE MOST AFFORDABLE COVERAGE</h1>
                    <br />
                    <img className='title-quote-page-img' src={QuoteImg} alt="quote" />
                </div>
                <br />
            </div>
        </div>
    )
}

export default QuoteLongForm
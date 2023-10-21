import React, { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/RegisterPage.css"

const RegisterPage = () => {
  let navigate = useNavigate();

  let nameRef = useRef(null);
  let userNameRef = useRef(null);
  let emailRef = useRef(null);
  let mobileRef = useRef(null);

  let [name, setName] = useState('');
  let [username, setUserName] = useState('');
  let [email, setEmail] = useState('');
  let [mobile, setMobile] = useState('');
  let [checkbox, setCheckbox] = useState(false);



  let [errorName, setErrorName] = useState('');
  let [errorUserName, setErrorUserName] = useState('');
  let [errorEmail, setErrorEmail] = useState('');
  let [errorMobile, setErrorMobile] = useState('');
  let [errorCheckbox, setErrorCheckbox] = useState('');


  function validateName() {
    if (name.length == 0) {
      setErrorName("Field is Required");
      nameRef.current.style.border = '2px solid red';
      return true;
    }
    setErrorName("");
    return false;
  }

  function validateUserName() {
    if (username.length == 0) {
      setErrorUserName("Field is Required");
      userNameRef.current.style.border = '2px solid red';
      return true;
    }
    setErrorUserName("");
    return false;
  }

  function validateEmail() {
    if (email.length == 0) {
      setErrorEmail("Field is Required");
      emailRef.current.style.border = '2px solid red';
      return true;
    }
    else if (!email.endsWith('@gmail.com') || email.endsWith('@')) {
      setErrorEmail("Please enter valid email");
      emailRef.current.style.border = '2px solid red';
      return true;
    }
    setErrorEmail("");
    return false;
  }

  function validateMobile() {
    let regex = new RegExp("^[0-9]{10}$");
    if (mobile.length == 0) {
      setErrorMobile("Field is Required");
      mobileRef.current.style.border = '2px solid red';
      return true;
    }
    else if (regex.test(mobile) === false) {
      setErrorMobile("Mobile number must be 10 digits number");
      mobileRef.current.style.border = '2px solid red';
      return true;
    }
    setErrorMobile("");
    return false;
  }

  function validateCheckbox() {
    if (checkbox == false) {
      setErrorCheckbox("Check this box if you want to proceed");
      return true;
     
    }
    else{
      setErrorCheckbox("");
      return false;
      
    }
  }

  return (
    <div className='registerpage-container' style={{display:"flex",height:"100vh"}}>
      <div className="leftside-part">
        <h1 className='heading'>Discover new things on Superapp</h1>
      </div>
      <div className="rightside-part">
        <h1 className='form-heading'>Super app</h1>
        <p className='account'>Create your new account</p>
        <form className='form' onSubmit={(e) => {

          e.preventDefault();

          if (validateName() && validateUserName() && validateEmail() && validateMobile() && validateCheckbox()) {
            return;
          }
          if (!validateName() && !validateUserName() && !validateEmail() && !validateMobile() && !validateCheckbox()) {

            localStorage.setItem("name", name);
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("mobile", mobile);

            console.log(name, username, email, mobile, checkbox);
            setName("");
            setUserName("");
            setEmail("");
            setMobile("");
            setCheckbox(false);

            setErrorName("");
            setErrorUserName("");
            setErrorEmail("");
            setErrorMobile("");
            setErrorCheckbox("");

            navigate('/category');

          }
        }}>
          <div className='input-divs'>
            <input type="text" ref={nameRef} name="name" className='inputs' value={name} onChange={(e) => {setName(e.target.value);setErrorName("");nameRef.current.style.border = 'none';}} placeholder='Name' onBlur={validateName} />
            <p className='error-text'>{errorName}</p>
          </div>

          <div className='input-divs'>
            <input type="text" ref={userNameRef} name="username" className='inputs' value={username}  onChange={(e) => {setUserName(e.target.value);setErrorUserName("");userNameRef.current.style.border = 'none';}} placeholder='UserName' onBlur={validateUserName} />
            <p className='error-text'>{errorUserName}</p>
          </div>

          <div className='input-divs'>
            <input type="email" ref={emailRef} name="name" className='inputs' value={email} onChange={(e) => {setEmail(e.target.value);setErrorEmail("");emailRef.current.style.border = 'none';}} placeholder='Email' onBlur={validateEmail} />
            <p className='error-text'>{errorEmail}</p>
          </div>

          <div className='input-divs'>
            <input type="tel" ref={mobileRef} name="name" className='inputs' value={mobile} onChange={(e) => {setMobile(e.target.value);setErrorMobile("");mobileRef.current.style.border = 'none';}} placeholder='Mobile' onBlur={validateMobile} />
            <p className='error-text'>{errorMobile}</p>
          </div>

          <div className='input-divs'>
            <input type="checkbox" className='checkbox' checked={checkbox} onChange={(e) => {setCheckbox(e.target.checked);setErrorCheckbox("");}} onBlur={validateCheckbox} /><span className='checkbox-text'>Share my registration data with Superapp</span>
            <p className='error-text'>{errorCheckbox}</p>
          </div>

          <div className='signup-btn'>
            <button className='btn'>SIGN UP</button>
          </div>

          <p style={{marginBottom:"3px"}} className='terms-and-conditions'>By clicking on Sign up. you agree to Superapp <span className='green-text'>Terms and Conditions of Use</span></p>

          <p className='to-know-more'>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className='green-text'>Privacy Policy</span></p>
        </form>


      </div>
    </div>
  )
}

export default RegisterPage

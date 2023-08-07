import React, { useRef, useState } from 'react';
import { checkPassword, validateEmail } from '../utils/helpers';

export default function Contact() {

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'userEmail') {
      setUserEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue)
    } else {
      setMessage(inputValue)
    }

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(userEmail) || !userName) {
      setErrorMessage( 'Email or username is invalid')
    
      return
    }
    if (!message){
      setErrorMessage('Please fill in message area');
      return;
    } 

    alert(`Hello ${userName}, your email has been sent`)

    setUserName('');
    setUserEmail('');
    setMessage('');
    setErrorMessage('');
  }



  return (

    <section className='contactSection' >
      <h2 style={{ color: 'white' }}>Contact Form</h2>

      <div className="card mb-5 card-body" style={{ minWidth: '1200px' }}>

        <form>
          <div className="form-group">
            <h6>User Name</h6>
            <input className="form-control"
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <h6>Email address</h6>
            <input className="form-control"
            value={userEmail}
            type="email"
            onChange={handleInputChange}
              name="userEmail"
              placeholder="name@example.com" />
          </div>
          <div className="form-group">
            <h6>Text area</h6>
            <textarea className="form-control"
            value={message}
            onChange={handleInputChange}
              name="message"
              rows="3"></textarea>
          </div>
        
          <button className="btn btn-outline-secondary" style={{ margin: '5px 5px 5px 0 ' }} type="button" onClick={handleFormSubmit}>Submit</button>
         
        </form>
        {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}

      </div>

    </section>


  );

}



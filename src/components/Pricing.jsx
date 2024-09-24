import React, { useState } from 'react';
import "./Contact.css";

const ContactUs = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    // Here you can handle the form submission logic (e.g., sending data to an API)
    
    // Clear the input fields
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className='flex justify-center align-center p-[3rem]'>
      <div className="card bg-[#27374D]">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>First Name</label>
                <input 
                  type="text" 
                  value={firstName} 
                  onChange={(e) => setFirstName(e.target.value)} 
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Last Name</label>
                <input 
                  type="text" 
                  value={lastName} 
                  onChange={(e) => setLastName(e.target.value)} 
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="text" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Phone</label>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={(e) => setPhone(e.target.value)} 
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Message</label>
                <textarea 
                  value={message} 
                  onChange={(e) => setMessage(e.target.value)} 
                />
              </div>
            </div>

            <div className="col">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

import React from 'react'
import Header from '../Header/Header'
import './Donate.css'

const Donate = () => {
  return (
    <div className="main">
      <Header />
      <div className="flex-container">
        <div className="div1"></div>
        <div className="div2">
          <p>
           Your support could power a kinder, fairer, more friendly future.{" "}
          </p>
        </div>
        <div className="div3">
          <div className="donate">
         
            <h1>DONATE NOW</h1>
          </div>
          
            <form action="/#">
            <div className="donate-form"><br/><br/>
              <label htmlFor="name">Personal Details</label><br/><br/>
              <input type="text" id="name" name="name" placeholder="Name..." /><br/><br/>
              <input   type="text" id="email"  name="email"  placeholder="Email..."   /><br/><br/>
              <label htmlfor="message">Message(optional)</label><br/><br/>
            
              <textarea></textarea><br/>
              <br />
              <label htmlfor="submit">Payment</label><br/>
              <br />
              <button type="submit" value="" ></button>
              </div>
            </form>
        
          <div className="other">
            <h2>Other ways to donate or get involved →</h2>
          </div>
        </div>
        <div class="div4">4</div>
      </div>
      <Header />
    </div>
  );
};

export default Donate;

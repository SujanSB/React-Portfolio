import React from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";
import Footer from './Footer'
function Contact() {
  return (
    <div className="Contact">
      <h1>
  <Fade bottom cascade> Contact.</Fade>
  </h1>
  <Fade bottom>




    <div className="adjustit">
      <div className="downpart">
        <div className="oneside">
          <div className="form">
            <h3 className="sidehead">Contact Me via this form</h3>
            <div className="form-items">
              <input type="text" className="input" placeholder="  Enter your name"/>
              <i className="fas fa-user"></i>
            </div>
            <div className="form-items">
              <input type="text" className="input" placeholder="  Email"/>
              <i className="fas fa-envelope"></i>
            </div>
            <div className="form-items">
              <textarea className="input message" cols="30" rows="10" placeholder="Drop a Line....."></textarea>
            </div>
          </div>
          <div className="btn submit">
            Submit  <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <div className="anotherside">
          <div className="bigmail">
            <i className="fas fa-envelope"></i>
          </div>
          <h2 className="shortinfo">
          Or you can email me directly at :
          </h2>
          <p className="centermail">{data.contactEmail}</p>
        </div>
      </div>
    </div>
    <Footer/>


  </Fade>
  
    </div>
  );
}

export default Contact;

import React from 'react'
import Fade from 'react-reveal/Fade';

function Testimonials() {


    return (
        <div className="Testi">
            <h1><Fade bottom cascade>Testimonials</Fade></h1>
            <p> People I've worked with have said some nice things... </p>
            <div class="testimonials" >
              <div >
                  <img src="https://cdn.pixabay.com/photo/2017/10/24/07/13/hacker-2883635__340.jpg" />
                  <p>"Sujan was a real pleasure to work with and we look forward to working with him again. He’s the kind of person you can trust with a project from start to finish.” </p>
                    <h3>Sandeep Khanal</h3>
                    <h4>Founder of invocea</h4>
              </div>
            </div>
            
        </div>
    )
}

export default Testimonials

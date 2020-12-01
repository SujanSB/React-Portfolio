import React from "react";
import Fade from "react-reveal/Fade";

function Service() {
  return (
    <div>
      <Fade bottom cascade>
        <h1>What I Do ?</h1>
        <p>There are many variations of passages of Lorem Ipsum available.</p>
        <div className="services">
          <div className="service-1">
            <div className="inner-part">
              <i class="fas fa-paint-brush"></i>
              <h2>Front-End Development</h2>
              <p>
                I Love to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
            </div>
          </div>

          <div className="service-2">
            <div className="inner-part">
              <i class="fas fa-code"></i>
              <h2>Back-End Development</h2>
              <p>
                I really care about backend programming, and love optimizing
                speed for the users.
              </p>
            </div>
          </div>

          <div className="service-3">
            <div className="inner-part">
              <i class="fas fa-cogs"></i>
              <h2>Mobile App Development</h2>
              <p>
                Having an experience of 1 years react-native, I can say
                Building native-app is a fun.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Service;

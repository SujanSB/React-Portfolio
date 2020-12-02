import React from "react";
import Fade from "react-reveal/Fade";
import data from '../yourdata'
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
                <h2>{data.skills[0].name}</h2>
              <p>
              {data.skills[0].desc}
              </p>
            </div>
          </div>

          <div className="service-2">
            <div className="inner-part">
              <i class="fas fa-code"></i>
              <h2>{data.skills[1].name}</h2>
              <p>
              {data.skills[1].desc}

              </p>
            </div>
          </div>

          <div className="service-3">
            <div className="inner-part">
              <i class="fas fa-cogs"></i>
              <h2>{data.skills[2].name}</h2>
              <p>
              {data.skills[2].desc}
               
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Service;

import React from "react";
import Fade from "react-reveal/Fade";
import data from '../yourdata'

function Skills() {
  return (
    <div>
      <div className="skill-box">
        <Fade bottom cascade>
          <h1>Other Skills.</h1>
        </Fade>
        <p>
          Everyday I try to learn new things. I Love to get deep about
          technology.
        </p>
      </div>
      <Fade bottom cascade>
        <div className="skillset owl-carousel">

          <div className="skill-inner">
            <div className="skill one">
              <h2>{data.skills[0].title}</h2>
              <p>
                {data.skills[0].desc}
                
              </p>
            </div>
          </div>
          <div className="skill-inner">
            <div className="skill two">
              <h2>{data.skills[1].title}</h2>
              <p>
              {data.skills[1].desc}
                
              </p>
            </div>
          </div>
          <div className="skill-inner">
            <div className="skill three">
              <h2>{data.skills[2].title}</h2>
              <p>
              {data.skills[2].desc}

              </p>
            </div>
          </div>
          {/* <div className="skill-inner">
            <div className="skill three">
              <h2>{data.skills[3].title}</h2>
              <p>
              {data.skills[3].desc}

              </p>
            </div>
          </div> */}
        </div>
      </Fade>
    </div>
  );
}

export default Skills;

// # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

// # dependencies
// /node_modules
// /.pnp
// .pnp.js

// # testing
// /coverage

// # production
// /build

// # misc
// .DS_Store
// .env.local
// .env.development.local
// .env.test.local
// .env.production.local

// npm-debug.log*
// yarn-debug.log*
// yarn-error.log*

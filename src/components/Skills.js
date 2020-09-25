import React from 'react'
import Fade from 'react-reveal/Fade';
function Skills() {
    return (
        <div>
            <div className="skill-box">
        <Fade bottom cascade><h1>Other Skills.</h1></Fade>
        <p> Everyday I try to learn new things. I Love to get deep about technology.</p>
        </div>
         <Fade bottom cascade>
         <div className="skillset">
                <div className="skill-inner">
                    <div className="skill-one">
                        <h2>Data Science</h2>
                        <p>Currently I am interested about machine learning. I've done thesis on DEEP LEARNING in undergrad</p>
                    </div>

                </div>
                <div className="skill-inner">
                    <div className="skill-two">
                        <h2>Python,Java,</h2>
                        <p>I really like to know about different programming languges. I know python, java & some more.</p>
                    </div>
                </div>
                <div className="skill-inner">
                    <div className="skill-three">
                        <h2>Photography</h2>
                        <p>Photography is one of my passion, when i find some time i love to go out with my camera. </p>
                    </div>
                </div>
                
             
                
         </div>
         </Fade>
        </div>
    )
}

export default Skills

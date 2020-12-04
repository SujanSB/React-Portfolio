import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import data from "../yourdata";

import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";

function Home() {
  return (
    <div className="Home">
      
      <section ClassName="section">
        <img src={img1} data-speed="-5" class="layer" alt="cover" />
        <img src={img2} data-speed="5" class="layer" alt="cover" />
        <img src={img3} data-speed="2" class="layer" alt="cover" />
        <img src={img4} data-speed="6" class="layer" alt="cover" />
        <img src={img5} data-speed="8" class="layer" alt="cover" />
        <img src={img6} data-speed="2" class="layer" alt="cover" />
        <img src={img7} data-speed="4" class="layer" alt="cover" />
        <img src={img8} data-speed="-5" class="layer" alt="cover" />
        <img src={img9} data-speed="6" class="layer" alt="cover" />
        <img src={img10} data-speed="-7" class="layer" alt="cover" />
        <img src={img11} data-speed="-5" class="layer" alt="cover" />
        <img src={img12} data-speed="-2" class="layer" alt="cover" />
        <div id="bichko" class="layer" data-speed="2">
          <h2>{data.homepageData[0]}</h2>

          <h3>{data.homepageData[1]}</h3>

          <h1>
            I'm <spam>{data.name}</spam>
          </h1>
        </div>
      </section>
    </div>
  );
}

export default Home;

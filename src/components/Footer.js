import React from "react";
import Fade from "react-reveal/Fade";


function Footer() {
  return (
    <div>
      <Fade bottom cascade>
        <div className="footer">
          <div className="Fav-quotes">
            <h2>"Keep Your Dreams higher than your thoughts"</h2>
          </div>
          <div className="social-icon">
            <a href="/">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="/">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="copyright">
            <p>&copy; 2019 invalidsb</p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Footer;

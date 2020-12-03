import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav>
      <ul>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            <i class="fa fa-home" aria-hidden="true"></i>

          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <i class="fa fa-user" aria-hidden="true"></i>

          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="Service"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <i class="fa fa-cog" aria-hidden="true"></i>

          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="Works"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           <i class="fa fa-code" aria-hidden="true"></i>

          </Link>
        </li>
        <li>
          <Link
            className="link"
            activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
           <i class="fa fa-spinner" aria-hidden="true"></i>


          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

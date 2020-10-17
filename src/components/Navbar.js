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
            Home
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
            About
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
            Service
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
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

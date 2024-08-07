import { useState } from "react";
import Logo from "../../public/logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState(false);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode"></div>
        </div>
      </div>
      <div className="links-container">
        <ul className="links">
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Launch</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

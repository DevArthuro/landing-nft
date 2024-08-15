import Logo from "../../public/logo.png";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  theme: string;
  changeTheme: () => void;
}

const Navbar: React.FC<Props> = ({ theme, changeTheme }) => {
  const [navState, setNavState] = useState(false);

  const handleChange = () => setNavState(!navState);
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle">
            {navState ? (
              <MdClose onClick={handleChange} />
            ) : (
              <GiHamburgerMenu onClick={handleChange} />
            )}
          </div>
          <div className="mode" onClick={changeTheme}>
            {theme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
        </div>
      </div>
      <div className={`links-container ${navState ? "nav-visible" : ""}`}>
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
          <li onClick={changeTheme} className="mode">
            {theme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import Logo from "../../public/logo.png";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

interface Props {
  theme: string;
  changeTheme: () => void;
}

const Navbar: React.FC<Props> = ({ theme, changeTheme }) => {
  return (
    <nav>
      <div className="brand-container">
        <div className="brand">
          <img src={Logo} alt="logo" className="logo" />
        </div>
        <div className="toggle-container">
          <div className="toggle"></div>
          <div className="mode">
            {theme === "dark" ? (
              <ImSun className="light" />
            ) : (
              <BsFillMoonFill className="dark" />
            )}
          </div>
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
          <li onClick={changeTheme}>
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

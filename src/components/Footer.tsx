import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Logo from "../../public/logo.png";

const Footer = () => {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={Logo} alt="logo" />
          </div>
          <p>Exclusive NTF collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={`${link}-${index}`}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={`${title}-${index}`}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index) => (
                    <li key={`${title}-${link}-${index}`}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2024 NFT</span>
        <span>Launchin August 2024</span>
      </div>
    </footer>
  );
};

export default Footer;

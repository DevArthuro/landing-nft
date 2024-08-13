import { useEffect, useState } from "react";
import scrollreveal from "scrollreveal";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Free from "./components/Free";
import Home from "./components/Home";
import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Release from "./components/Release";
import ScrollToTop from "./components/ScrollToTop";
import Signup from "./components/Signup";
import SuperRare from "./components/SuperRare";

function App() {
  const [theme, setTheme] = useState("dark");

  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(`.free,.clients,.super-rare,.releases,.like,.signup,footer`, {
        interval: 200,
      });
    };
    registerAnimations();
  }, []);
  return (
    <div className="app-container" data-theme={theme}>
      <div className="content-app">
        <ScrollToTop />
        <Navbar theme={theme} changeTheme={changeTheme} />
        <Home />
        <Free />
        <Clients />
        <SuperRare />
        <Release />
        <Like />
        <Signup />
        <Footer />
      </div>
    </div>
  );
}

export default App;

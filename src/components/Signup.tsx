import signup from "../../public/signup.png";

const Signup = () => {
  return (
    <div className="signup" id="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching soon</p>
          <h1 className="title">An NTF like no another</h1>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up below to
            recieve updates when we go live
          </p>
          <button>Sign up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home logo" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

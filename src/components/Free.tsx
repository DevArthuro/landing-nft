import IconLogo from "../../public/icon.png";
import Card from "./Card";

import Super1Logo from "../../public/super1.png";
import ReleaseLogo from "../../public/release2.png";

const Free = () => {
  return (
    <div className="free">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={IconLogo} alt="icon" />
          </div>
          <h2 className="title">Free NTF for early birds</h2>
          <p className="description">
            Sign up today and you'll get a free NFT when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={Super1Logo}
            series="Floor series"
            title="Purple man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
            image={ReleaseLogo}
            series="Gloor series"
            title="Gamer girl"
            price={3.95}
            tag={12969}
            time={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Free;

import Card from "./Card";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../../public/release1.png";
import release2 from "../../public/release2.png";

const Release = () => {
  return (
    <div className="releases" id="release">
      {/*Release 1*/}
      <div className="release orange">
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            We have released four limited edition NFT's early which can be bid
            on via <a href="#">OpenSea</a>.
          </p>
          <p className="description">
            There will be the only four of these NFT's we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>{" "}
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release1} alt="image release man" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      {/*Release 2*/}
      <div className="release green">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloor series"
            title="Gamer girl"
            price={3.95}
            tag={12969}
            time={2}
          />
          <div className="ellipse orange"></div>
        </div>
        <div className="content">
          <h2 className="title">Initial Release 4/11</h2>
          <p className="description">
            We have released four limited edition NFT's early which can be bid
            on via <a href="#">OpenSea</a>.
          </p>
          <p className="description">
            There will be the only four of these NFT's we ever make, so be sure
            not to miss out!
          </p>
          <p className="description">50% of proceeds go to charity.</p>{" "}
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Release;

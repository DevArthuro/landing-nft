import EthLogo from "../../public/supereth.png";

interface Props {
  image: string;
  series: string;
  title: string;
  tag: number;
  price: number;
  time: number;
}

const Card: React.FC<Props> = ({ image, price, series, tag, time, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="image card  " />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <span className="card-series">{series}</span>
          <span className="card-top">Top bid</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            <img src={EthLogo} alt="Eth logo" />
            <h4>{price} ETH</h4>
          </div>
        </div>
        <div className="card-sub-details">
          <span>#{tag}</span>
          <span>{time} day left</span>
        </div>
      </div>
    </div>
  );
};

export default Card;

import eth1 from "../../public/eth1.png";
import eth2 from "../../public/eth2.png";

const Like = () => {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="Eth logo" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live on 11/24
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live on 11/24. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="Eth logo" />
          </div>
          <h2 className="title">An NFT like no other</h2>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live on 11/24
          </p>
          <p className="description">
            Don't miss out on the release of our new NFT. Sign up bellow to
            recieve updates when we go live on 11/24. Don't miss out on the
            release of our new NFT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Like;

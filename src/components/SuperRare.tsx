import Super1 from "../../public/super1.png";
import Super2 from "../../public/super2.png";
import Super3 from "../../public/super3.png";
import Super4 from "../../public/super4.png";
import Card from "./Card";

const SuperRare = () => {
  const data = [
    {
      image: Super1,
      series: "Gloop Series",
      title: "Purple Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: Super2,
      series: "Gloop Series",
      title: "Beige",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: Super3,
      series: "Gloop Series",
      title: "Red Man",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
    {
      image: Super4,
      series: "Gloop Series",
      title: "Green",
      price: 2.99,
      tag: 12983,
      time: 1,
    },
  ];
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">LE Super Rare Auction</h2>
        <p className="description">
          We have released four limited edition NFT's early which can be bid on
          via <a href="#">OpenSea</a>
        </p>
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <>
            <Card
              image={image}
              series={series}
              title={title}
              price={price}
              tag={tag}
              time={time}
              key={`${title}-${index}`}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default SuperRare;

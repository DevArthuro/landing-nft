import Client1 from "../../public/clients1.png";
import Client2 from "../../public/clients2.png";
import Client3 from "../../public/clients3.png";
import Client4 from "../../public/clients4.png";
import Client5 from "../../public/clients5.png";

const Clients = () => {
  const data = [Client1, Client2, Client3, Client4, Client5];

  return (
    <div className="clients">
      <div className="container">
        <div className="clients-container">
          {data.map((image, index) => (
            <div className="client" key={`${index}-${image}`}>
              <img src={image} alt="client image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

import { getImage } from "../../helpers";
import "./style.css";

const Comic = (props) => {
  const { title, prices, thumbnail } = props.info;
  const image = getImage(thumbnail.path, thumbnail.extension);
  return (
    <div className="comic">
      <h3>{title}</h3>
      {prices && <p className="comic-price"> ${prices[0] ? prices[0].price : 0} </p>}
      <img src={image} alt={`Portada del comic ${title}`} />
    </div>
  );
};

export default Comic;

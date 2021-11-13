import { getImage } from "../../helpers";

const Serie = (props) => {
  const { title, startYear, thumbnail } = props.info;
  const image = getImage(thumbnail.path, thumbnail.extension);
  return (
    <div style={{ width: "20%" }}>
      <h3 style={{ height: "60px", fontSize: "18px" }}>
        {title} [{startYear ? startYear : "N/A"}]
      </h3>
      <img src={image} alt={`Portada de la serie ${title}`} style={{ width: "250px" }} />
    </div>
  );
};

export default Serie;

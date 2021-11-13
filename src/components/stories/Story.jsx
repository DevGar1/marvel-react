import { getImage } from "../../helpers";

const Story = (props) => {
  const { title, type, thumbnail } = props.info;
  const image = getImage(thumbnail.path, thumbnail.extension);
  return (
    <div style={{ width: "20%" }}>
      <h3 style={{ height: "60px", fontSize: "18px" }}>
        {title} {type ? type : "N/A"}
      </h3>
      <img src={image} alt={`Portada de la historia ${title}`} style={{ width: "250px" }} />
    </div>
  );
};

export default Story;

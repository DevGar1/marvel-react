import { CharacterStyled } from "../styled/div";
import background from "../styled/colors";
import { PrimaryButton } from "../styled/buttons";
import { Link } from "react-router-dom";
import { getImage } from "../helpers";

const Character = (props) => {
  const { id, name, thumbnail, description } = props.info;
  const image = getImage(thumbnail.path, thumbnail.extension);

  return (
    <CharacterStyled back={background.background}>
      <img src={image} alt="Heroe" />
      <p className="name">{name}</p>
      <div className="character-description">
        <h2>Descripción:</h2>
        <p>{description ? description : "SIN DESCRIPCIÓN"}</p>
        <PrimaryButton>
          <Link to={`/character/${id}`}>Ver Perfil</Link>
        </PrimaryButton>
      </div>
    </CharacterStyled>
  );
};

export default Character;

import { CharacterStyled } from "../styled/div";
import background from "../styled/colors";
import { PrimaryButton } from "../styled/buttons";

const Character = (props) => {
  const { name, thumbnail, description } = props.info;
  const { path, extension } = thumbnail;
  const image = `${path}.${extension}`;

  return (
    <CharacterStyled back={background.background}>
      <img src={image} alt="Heroe" />
      <p className="name">{name}</p>
      <div className="character-description">
        <h2>Descripción:</h2>
        <p>{description ? description : "SIN DESCRIPCIÓN"}</p>
        <PrimaryButton>Ver Perfil</PrimaryButton>
      </div>
    </CharacterStyled>
  );
};

export default Character;

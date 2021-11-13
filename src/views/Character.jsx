import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router";
import { getCharacter } from "../axios";
import Comics from "../components/comics/Comics";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Series from "../components/series/Series";
import Stories from "../components/stories/Stories";
import { actions } from "../redux/character";
import { CheckButton } from "../styled/buttons";

const Character = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { character, lengthComics, lengthSeries, lengthStories, image } = useSelector(
    (state) => state.characterReducer
  );
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const content = useRef();

  useEffect(() => {
    getCharacter(id).then((data) => dispatch({ type: actions.GET_CHARACTER, payload: data }));
  }, [dispatch, id]);
  if (!character) {
    return <h1>SuperHeroe</h1>;
  }
  const { name, description } = character;

  const getContent = (typeModal) => {
    switch (typeModal) {
      case "comics": {
        content.current = <Comics id={id} path={typeModal} />;
        break;
      }
      case "series": {
        content.current = <Series id={id} path={typeModal} />;
        return;
      }
      case "stories": {
        content.current = <Stories id={id} path={typeModal} />;
        return;
      }
      default: {
        return;
      }
    }
  };

  const handlerClick = (type, typeModal) => {
    switch (type) {
      case "back": {
        navigate("/");
        return;
      }
      case "modal": {
        getContent(typeModal);
        setModal(true);
        return;
      }
      default: {
        return;
      }
    }
  };

  const hideModal = () => {
    setModal(false);
  };
  return (
    <div>
      {modal && <Modal hide={hideModal}>{content.current}</Modal>}
      <Header />
      <div style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2%",
          }}
        >
          <img
            src={image}
            alt={`Imagen del heroe ${name}`}
            style={{ width: "600px", height: "90%", borderRadius: "15px" }}
          />
        </div>
        <div style={{ color: "white", textAlign: "left", marginTop: "100px" }}>
          <h2 style={{ fontSize: "4rem" }}>{name}</h2>
          <p style={{ fontSize: "1.8rem" }}>{description}</p>
          <CheckButton onClick={() => handlerClick("back")}>Volver a home</CheckButton>
          <CheckButton onClick={() => handlerClick("modal", "comics")}>
            Comics [{lengthComics}]
          </CheckButton>
          <CheckButton onClick={() => handlerClick("modal", "series")}>
            Series [{lengthSeries}]
          </CheckButton>
          <CheckButton onClick={() => handlerClick("modal", "stories")}>
            Stories [{lengthStories}]
          </CheckButton>
        </div>
      </div>
    </div>
  );
};

export default Character;

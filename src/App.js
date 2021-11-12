import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { getCharacters } from "./axios";
import { actions } from "./redux/character";

function App() {
  const characters = useSelector((state) => state.characterReducer.characters);
  const dispatch = useDispatch();

  const elements = characters.map((character) => {
    const { id, name, description, thumbnail } = character;
    const { path, extension } = thumbnail;
    const image = `${path}.${extension}`;
    return (
      <li key={id}>
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={image} alt="Heroe" />
      </li>
    );
  });

  useEffect(() => {
    getCharacters().then((data) =>
      dispatch({ type: actions.GET_CHARACTER, payload: data.results })
    );
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <ul>{elements}</ul>
    </div>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCharacters } from "../axios";
import { actions } from "../redux/character";
import Character from "../components/Character";

const Characters = () => {
  const characters = useSelector((state) => state.characterReducer.characters);
  const dispatch = useDispatch();
  const elements = characters.map((character) => <Character key={character.id} info={character} />);

  useEffect(() => {
    getCharacters().then((data) =>
      dispatch({ type: actions.GET_CHARACTER, payload: data.results })
    );
  }, [dispatch]);
  return <ul className="characters-section">{elements}</ul>;
};

export default Characters;
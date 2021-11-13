import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getContentByCharacter } from "../../axios";
import { actionsComics } from "../../redux/comics";
import Comic from "./Comic";

const Contents = (props) => {
  const dispatch = useDispatch();
  const comics = useSelector((state) => state.comicsReducer.comics);
  const { path } = props;
  useEffect(() => {
    getContentByCharacter(props.id, path).then((data) =>
      dispatch({ type: actionsComics.GET_COMICS, payload: data })
    );
  }, [props.id, dispatch, path]);
  console.log(comics);
  const elements = comics.map((comic) => <Comic key={comic.id} info={comic} />);
  return <div style={{ display: "flex ", flexWrap: "wrap" }}>{elements}</div>;
};

export default Contents;

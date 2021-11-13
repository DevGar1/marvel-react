import { useDispatch, useSelector } from "react-redux";
import { getContentByCharacter } from "../../axios";
import { actionsStories } from "../../redux/stories";
import { useEffect } from "react";
import Story from "./Story";

const Stories = (props) => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.storiesReducer.stories);
  const { path } = props;
  useEffect(() => {
    getContentByCharacter(props.id, path).then((data) =>
      dispatch({ type: actionsStories.GET_STORIES, payload: data })
    );
  }, [props.id, dispatch, path]);
  const elements = stories.map((story) => <Story key={story.id} info={story} />);
  return <div style={{ display: "flex ", flexWrap: "wrap" }}>{elements}</div>;
};

export default Stories;

import { useDispatch, useSelector } from "react-redux";
import { getContentByCharacter } from "../../axios";
import { actionsSeries } from "../../redux/series";
import { useEffect } from "react";
import Serie from "./Serie";

const Series = (props) => {
  const dispatch = useDispatch();
  const series = useSelector((state) => state.seriesReducer.series);
  const { path } = props;
  useEffect(() => {
    getContentByCharacter(props.id, path).then((data) =>
      dispatch({ type: actionsSeries.GET_SERIES, payload: data })
    );
  }, [props.id, dispatch, path]);
  const elements = series.map((serie) => <Serie key={serie.id} info={serie} />);
  return <div style={{ display: "flex ", flexWrap: "wrap" }}>{elements}</div>;
};

export default Series;

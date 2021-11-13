import { getImage } from "../../helpers";

const init = {
  characters: [],
};

export const actions = {
  GET_CHARACTERS: "characters/get",
  GET_CHARACTER: "character/get",
};

export const characterReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_CHARACTERS: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    case actions.GET_CHARACTER: {
      const character = action.payload;
      const { thumbnail, comics, series, stories } = character;
      return {
        ...state,
        character: action.payload,
        lengthComics: comics ? comics.available : "",
        lengthSeries: series ? series.available : "",
        lengthStories: stories ? stories.available : "",
        image: getImage(thumbnail.path, thumbnail.extension),
      };
    }
    default: {
      return state;
    }
  }
};

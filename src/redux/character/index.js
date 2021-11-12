const init = {
  characters: [],
};

export const actions = {
  GET_CHARACTER: "character/get",
};

export const characterReducer = (state = init, action) => {
  switch (action.type) {
    case actions.GET_CHARACTER: {
      return {
        ...state,
        characters: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const init = {
  comics: [],
};

export const actionsComics = {
  GET_COMICS: "comics/get",
};

export const comicsReducer = (state = init, action) => {
  switch (action.type) {
    case actionsComics.GET_COMICS: {
      return {
        ...state,
        comics: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

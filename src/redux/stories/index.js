const init = {
  stories: [],
};

export const actionsStories = {
  GET_STORIES: "stories/get",
};

export const storiesReducer = (state = init, action) => {
  switch (action.type) {
    case actionsStories.GET_STORIES: {
      return {
        ...state,
        stories: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

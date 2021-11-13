const init = {
    series: [],
  };
  
  export const actionsSeries = {
    GET_SERIES  : "series/get",
  };
  
  export const seriesReducer = (state = init, action) => {
    switch (action.type) {
      case actionsSeries.GET_SERIES: {
        return {
          ...state,
          series: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  
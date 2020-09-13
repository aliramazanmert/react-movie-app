import * as actionTypes from "../allActionTypes";

const initialState = {
  moviesList: [],
  moviesLoading: false,
};

const getMoviesStartReducer = (state, action) => ({
  ...state,
  moviesLoading: true,
});

const getMoviesSuccessReducer = (state, action) => ({
  ...state,
  moviesList: action.movies,
  moviesLoading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES_START:
      return getMoviesStartReducer(state, action);
    case actionTypes.GET_MOVIES_SUCCESS:
      return getMoviesSuccessReducer(state, action);
    default:
      return state;
  }
};

export default reducer;

import * as actionTypes from "../allActionTypes";

const initialState = {
  movieData: null,
  movieDetailsLoading: false,
};

const getMovieDetailsStartReducer = (state, action) => ({
  ...state,
  movieDetailsLoading: true,
});

const getMovieDetailsSuccessReducer = (state, action) => ({
  ...state,
  movieData: action.payload,
  movieDetailsLoading: false,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE_DETAILS_START:
      return getMovieDetailsStartReducer(state, action);
    case actionTypes.GET_MOVIE_DETAILS_SUCCESS:
      return getMovieDetailsSuccessReducer(state, action);
    default:
      return state;
  }
};

export default reducer;

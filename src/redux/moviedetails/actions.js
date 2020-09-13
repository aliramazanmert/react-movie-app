import * as actionTypes from "../allActionTypes";

export const getMovieDetailsStartAction = () => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_START,
  };
};

export const getMovieDetailsSuccessAction = (movieData) => {
  return {
    type: actionTypes.GET_MOVIE_DETAILS_SUCCESS,
    payload: movieData,
  };
};

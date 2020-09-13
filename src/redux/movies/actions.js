import * as actionTypes from "../allActionTypes";

export const getMoviesStartAction = () => {
  return {
    type: actionTypes.GET_MOVIES_START,
  };
};

export const getMoviesSuccessAction = (movies) => {
  return {
    type: actionTypes.GET_MOVIES_SUCCESS,
    movies,
  };
};

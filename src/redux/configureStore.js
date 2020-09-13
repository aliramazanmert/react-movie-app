import { createStore, combineReducers, compose } from "redux";
import movieReducer from "./movies/reducer";
import movieDetailReducer from "./moviedetails/reducer";

const reducers = combineReducers({
  movies: movieReducer,
  moviedetails: movieDetailReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers());

export default store;

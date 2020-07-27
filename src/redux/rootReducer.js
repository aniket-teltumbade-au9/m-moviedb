import { combineReducers } from "redux";
import movieListReducer from "./reducers/movieListReducer";

export const rootReducer = combineReducers({
  movieState: movieListReducer
});
export default rootReducer;

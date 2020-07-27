import { MOVIE_LIST, MOVIE_INFO } from "../actionTypes"
import Axios from "axios";
import config from "../../config";
export const fetchMovieDB = () => async (dispatch, getState) => {
  try {
      const response = await Axios(` ${config.base_url}/movie/popular?api_key=${config.api_key}&language=en-IN&page=1&region=IN`)
  
      dispatch(
          {
              type: MOVIE_LIST, payload: response.data
          }
      )
  } catch (error) {
      console.error(error)
  } 
}

export const fetchMovieInfo = (movId) => async (dispatch, getState) => {
  try {
      const response = await Axios(` ${config.base_url}/movie/${movId}?api_key=${config.api_key}&language=en-IN&page=1&region=IN`)
  
      dispatch(
          {
              type: MOVIE_INFO, payload: response.data
          }
      )
  } catch (error) {
      console.error(error)
  } 
}

import { MOVIE_LIST, MOVIE_INFO } from "../actionTypes"

const initialState = {
    moviedb: null,
    movieInfo:null
}

const movieListReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case MOVIE_LIST:
            return { ...state, moviedb:payload }
        
        case MOVIE_INFO:
            return { ...state, movieInfo:payload }
       
        default:
            return state
    }
}
export default movieListReducer
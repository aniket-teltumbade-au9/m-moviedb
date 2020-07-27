import React from "react";
import { withRouter } from "react-router-dom";
import MovieSingleCard from "../components/MovieSingleCard";

const MovieDetailPage =(...props)=>{
   //console.log(this.props.movieDetail);
  const HGJ=props[0].match.params.movieId
    return HGJ ? <MovieSingleCard render={(HGJ ) => (
      <></>
    )}/>:null
}
export default withRouter(MovieDetailPage)

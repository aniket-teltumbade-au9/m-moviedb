import { connect } from "react-redux";
import React, { Component } from "react";
import { fetchMovieInfo } from "../redux/actions/movieListActions";
class MovieSingleCard extends Component{
  componentDidMount() {
    const movieObj=this.props.render
    console.log(this.props)
    this.props.fetchMovieInfo(movieObj);
  }
  render(){
    console.log(this.props)
    return /* this.props.render(this.props); */ null
  }
}

const mapStatesToProps = storeState => {
  console.log(storeState);
  return { movieDetail: storeState.movieState.movieInfo };
}; 
export default connect(
  mapStatesToProps,
  { fetchMovieInfo }
)(MovieSingleCard);
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovieDB } from "../redux/actions/movieListActions";
import MovieCard from "../components/MovieCard";
class HomePage extends Component {
  componentDidMount() {
    this.props.fetchMovieDB();
  }
  render() {
    console.log();
    return this.props.movies ? (
      <>
      <h1 style={{textAlign:"center"}}>Most Popular</h1>
      <main className="page-content">    
       {this.props.movies.results.map(m => (
          <MovieCard key={m.id} movie={m} />
        ))} 
      </main>
      </>
    ) : null;
  }
}
const mapStatesToProps = storeState => {
  return { movies: storeState.movieState.moviedb };
};
export default connect(
  mapStatesToProps,
  { fetchMovieDB }
)(HomePage);

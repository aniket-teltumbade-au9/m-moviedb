import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieCard extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        className="card"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w220_and_h330_face/${
            this.props.movie.poster_path
          })`
        }}
      >
        <div className="content">
          <h2 className="title">{this.props.movie.original_title}</h2>
          <p className="copy">
            <strong>Since: </strong>
            {this.props.movie.release_date}
            <hr />
            <strong>Votes: </strong>
            {this.props.movie.vote_count}
          </p>
          <Link to={`/movie_detail/${this.props.movie.id}`} className="btn">View Details</Link>
        </div>
      </div>
    );
  }
}
export default MovieCard;

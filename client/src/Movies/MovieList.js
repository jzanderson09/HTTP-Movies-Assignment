import React, { Component } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
class MovieList extends Component {
  constructor() {
    super();
    this.state = {
      movieList: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => this.setState({ movieList: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.movieList);
  }

  render() {
    return (
      <div className="movie-list">
        {this.state.movieList.map(movie => (
          <MovieDetails key={movie.id} movie={movie} updateMovie={this.props.updateMovie} deleteMovie={this.props.deleteMovie} />
        ))}
      </div>
    );
  }
};

function MovieDetails({ movie, updateMovie, deleteMovie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} updateMovie={updateMovie} deleteMovie={deleteMovie} />
    </Link>
  );
}

export default MovieList;
import React, { Component } from "react";
import axios from 'axios';
import { Route, Redirect } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';

class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: [],
      movieList: [],
      movieSelected: {}
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => this.setState({ movieList: res.data }))
      .catch(err => console.log(err));
    console.log(this.state.movieList);
  }

  addToSavedList = movie => {
    this.setState({ savedList: [...this.state.savedList, movie] });
  };

  updateMovie = id => {
    console.log(id);
    const movie = this.state.movieList[id];
    console.log(movie);
    this.setState({ movieSelected: movie });
  };

  deleteMovie = id => {
    const confirmation = window.confirm('Are you sure you want to delete this movie?');
    if (confirmation) {
      axios
        .delete(`http://localhost:5000/api/movies/${id}`)
        .then(res => console.log('Deleted movie!' + res.data))
        .catch(err => console.log(err));
      window.alert('Movie deleted successfully!');
    }
  }

  render() {
    return (
      <>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" render={props =>
          <MovieList {
            ...props} 
            movieList={this.state.movieList} 
            updateMovie={this.updateMovie} 
            deleteMovie={this.deleteMovie} />} 
        />
        <Route path="/movies/:id" render={props => 
          <Movie 
            {...props}
            addToSavedList={this.addToSavedList} 
            updateMovie={this.updateMovie}
            deleteMovie={this.deleteMovie}
          />}
        />
        <Route path='/update-movie/:id' render={props =>
          <UpdateMovie 
            {...props}
            movieSelected={this.state.movieSelected}
          />} 
        />
      </>
    );
  }
};

export default App;

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import UpdateMovie from './Movies/UpdateMovie';

const App = () => {
  const [savedList, setSavedList] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/movies')
      .then(res => setSavedList(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route 
        path='/update-movie/:id' 
        render={props => {
          return <UpdateMovie {...props} />;
        }} 
      />
    </>
  );
};

export default App;

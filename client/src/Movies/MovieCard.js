import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = props => {
  const { id, title, director, metascore, stars } = props.movie;
  if (props.saveMovie && props.updateMovie) {
    return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {stars.map(star => ( 
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
        <button className='save-button' onClick={props.saveMovie}>Save</button>
        <NavLink to={`/update-movie/${id}`}>
          <button className='save-button' onClick={() => props.updateMovie(id)}>Update Movie</button>
        </NavLink>
      </div>
    );
  }
  else {
    return (
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>
  
        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
    );
  }
};

export default MovieCard;

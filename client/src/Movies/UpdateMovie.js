import React, { useState } from 'react';

const UpdateMovie = props => {
    const [movie, setMovie] = useState(props.movieSelected);

    const changeHandler = e => {
        e.preventDefault();
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div className='UpdateMovie'>
            <form>
                <input
                    type='text'
                    name='title'
                    value={movie.title}
                    placeholder='Movie Title'
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <input
                    type='text'
                    name='director'
                    value={movie.director}
                    placeholder='Movie Director'
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <input
                    type='text'
                    name='metascore'
                    value={movie.metascore}
                    placeholder='Movie Metascore'
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <input
                    type='text'
                    name='stars'
                    value={movie.stars}
                    placeholder='Movie Stars'
                    onChange={changeHandler}
                    autoComplete='off'
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default UpdateMovie;
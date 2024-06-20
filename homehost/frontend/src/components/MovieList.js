import React, { useEffect, useState } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/movies')
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie}>
            <a href={`/movies/${movie}`} target="_blank" rel="noopener noreferrer">{movie}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;

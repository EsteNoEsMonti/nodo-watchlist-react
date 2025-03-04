import React from 'react'
import movies from '../api/movies.json'
import MovieCard from './MovieCard';

const MovieList = ({ watchlist, setWatchlist }) => {

  const addToWatchlist = (movie) => {
    if (!watchlist.some(item => item.id === movie.id)) {
      setWatchlist([...watchlist, movie]);
    }
  };

  return (
    <div className={`p-6 xl:px-40 flex flex-wrap justify-center gap-4`}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} addToWatchlist={addToWatchlist} />
      ))}
    </div>
  )
}

export default MovieList
import React from 'react'

const MovieCard = ({ movie, addToWatchlist }) => {
  return (
    <div className="bg-gray-800 py-4 px-2 rounded-xl shadow-3xl text-center max-w-[350px]">
      <div className="w-full h-96 overflow-hidden rounded-xl">
        <img
          src={`src/assets/imgMovies/${movie.img}.jpg`}
          alt={movie.name}
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold text-white mt-3">{movie.name}</h3>
      <button
        onClick={() => addToWatchlist(movie)}
        className="mt-3 bg-yellow-500 hover:bg-yellow-600 font-medium py-2 px-4 rounded-full transition-colors cursor-pointer"
      >
        Add to Watchlist
      </button>
    </div>
  )
}

export default MovieCard
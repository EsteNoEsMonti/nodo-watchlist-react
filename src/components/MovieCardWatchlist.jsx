import React from "react";
import { Trash } from "@phosphor-icons/react";

const MovieCardWatchlist = ({ movie, removeFromWatchlist }) => {
  return (
    <div className="flex items-center bg-gray-800 rounded-xl p-3 shadow-md border border-yellow-300">
      {/* Imagen de la película */}
      <img
        src={`/assets/imgMovies/${movie.img}.jpg`}
        alt={movie.name}
        className="w-16 h-24 object-cover rounded-lg shadow-sm"
      />

      {/* Información */}
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-white">{movie.name}</h3>
        <p className="text-sm text-gray-600">{movie.genre}</p>
      </div>

      {/* Botón de eliminar */}
      <button
        onClick={() => removeFromWatchlist(movie.id)}
        className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg flex items-center cursor-pointer"
      >
        <Trash size={20} className='mr-2' /> Remove
      </button>
    </div>
  );
};

export default MovieCardWatchlist;

import { Movie } from "@/types/movie";
import { useState } from "react";

type cardProps = {
  movie: Movie;
  isFavorite: boolean;
  onFavorite: () => void;
  onOpen: () => void;
};

const MovieCard=({
  movie,
  isFavorite,
  onFavorite,
  onOpen,
}: cardProps) =>{

  const [mesg,setmesg]=useState<string>("");
  return (
    <div
      onClick={onOpen}
      className="bg-white p-3 rounded shadow cursor-pointer hover:shadow-lg transition"
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="h-60 w-full object-cover rounded"
      />

      <h2 className="font-semibold mt-2">
        {movie.Title}
      </h2>

      <p className="text-sm text-gray-600">
        {movie.Year}
      </p>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onFavorite();
        }}
        className={`cursor-pointer mt-3 px-3 py-1 rounded text-white ${
          isFavorite
            ? "bg-red-500"
            : "bg-green-500"
        }`}
      >
        {isFavorite
          ? "Remove Favorite"
          : "Add Favorite"}
      </button>
    </div>
  );
}


export default MovieCard;
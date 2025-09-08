import { useMoviecontext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    //usestate to track favourite and watchlist
  const { isFav, addToFav, RemoveFav } = useMoviecontext();
  const { isWatchlist, addToWathclist, RemovWathclist } = useMoviecontext();

  const isFavorite = isFav(movie.id);
  const isInWatchlist = isWatchlist(movie.id);
//usingh context api by loading props
  function handleAddToFavorites() {
    if (!isFavorite) {
      addToFav(movie);
      alert("Movie added to favorites");
    } else {
      RemoveFav(movie.id);
    
    }
  }

  function handleAddToWatchlist() {
    if (!isInWatchlist) {
      addToWathclist(movie);
      alert("Movie added to watchlist");
    } else {
      RemovWathclist(movie.id);
      
    }
  }

  return (
    <div className="bg-gray-800 w-60 lg:w-60 h-150  flex justify-center items-start flex-col ml-8 lg:ml-10 gap-1.5 p-5 lg:mt-15 mt-5 rounded">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full mt-3 object-cover rounded"
      />

      <div className="flex-wrap ml-3">
        <h3 className="text-xl font-semibold">{movie.title}</h3>
        <p className="mt-1.5 font-semibold">{movie.release_date?.split("-")[0]}</p>
        <p className="mt-3">⭐ {movie.vote_average?.toFixed(1)}</p>
      </div>

      <div>
        <button
          className="text-xl rounded p-1 m-1 active:scale-110 w-50 bg-[#24242b]"
          onClick={handleAddToFavorites}
        >
          {isFavorite ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
        </button>
      </div>

      <div>
        <button
          className="text-xl rounded p-1 active:scale-110 m-1 w-50 bg-[#24242b]"
          onClick={handleAddToWatchlist}
        >
          {isInWatchlist ? "Remove Watchlist" : "➕ Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;

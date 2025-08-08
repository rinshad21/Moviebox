import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
  //intialized Search Query store user input
  const [searchQuery, setSearchQuery] = useState("");

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  //we are loading popular movies here from api.js
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(); //get popular movies from tmdb api 
        setMovies(popularMovies);//update ui to populare movies
        setError(null);//clear previous error
      } catch (err) {
        console.log(err);
        setError("failed to load");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();//runs on MOUNt
  }, []);

  //function that handle serching of movies
  const handleSearch = async (e) => {
    e.preventDefault(); //prevents reloading
    if (searchQuery.trim() === "") return;
    if (loading) return;

    setLoading(true);
    //calling api for searching movies
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("failed to load");
    } finally {
      setLoading(false);
      setSearchQuery("");
    }
  };

  return (
    <div>
      <div className=" flex items-center ">
        <form onSubmit={handleSearch}>
          <input
            className="bg-gray-800 rounded p-2 lg:w-100 mt-5 w-50 border-0 ml-18 lg:ml-110"
            type="text"
            value={searchQuery}
            placeholder="search for movies"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="bg-red-800 p-2 ml-2 rounded" type={"submit"}>
            Search
          </button>
        </form>
      </div>
      <h3 className="font-semibold text-2xl lg:mt-2 mt-5 lg:ml-9 ml-17">
        Popular this week
      </h3>
      {error && <div className="text-red-500">{error}</div>}
{/* loading screen */}
      {loading ? (
        <div className="flex items-center mt-60 ml-30  lg:ml-60  text-5xl">Loading...</div>
      ) : (
          <div className="flex flex-wrap gap-4 px-4">
            {/* displaying moviecard on the home ui by loading props */}
            {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

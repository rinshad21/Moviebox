import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, searchMovies } from "../services/api";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
    //search bar 
    <div>
      <div className=" flex items-center ">
        <form onSubmit={handleSearch} className="flex items-center gap-2 mt-5">
    <Input
      className="bg-gray-800 border-blue-400/50 active:border-blue-400/70 
                 focus:ring-2 focus:ring-blue-400/50 outline-none 
                 transition duration-200 rounded-xl p-2 w-66 ml-7 lg:ml-120 lg:w-96 border-0"
      type="text" 
      value={searchQuery}
      placeholder="Search for movies"
      onChange={(e) => setSearchQuery(e.target.value)}
    />

    <Button
      type="submit"
      className="flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-800 
                 active:from-red-600 active:to-red-700 text-white 
                 px-4 py-2 rounded-xl shadow-md border border-red-900/40 
                 transition duration-200 "
    >
      <Search size={16} className="text-white" />
      <span className="hidden sm:inline">Search</span>
    </Button>
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

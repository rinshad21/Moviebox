import { useMoviecontext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
const { favorites } = useMoviecontext();
    if (favorites && favorites.length > 0) {
        return (
            <div>
                <h3 className="font-semibold text-2xl lg:text-3xl lg:mt-2 mt-5 lg:ml-9 ml-17">Your Favorite films</h3>
                <div className="flex flex-wrap gap-4 px-4">
                    {favorites.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                        />
                    ))}
                </div>
            </div>
        )
    }
     
        return (
    
<div className="flex items-center justify-center min-h-screen ">
  <div className="bg-gray-700 text-red-600 text-2xl lg:text-5xl font-semibold rounded-xl p-8 m-7 lg:p-10 lg:m-60 lg:ml-80 text-center">
    <h1 className="text-xl mt-4">NO MOVIES ADDED YET</h1>
    <p className="text-sm italic mt-2 lg:text-3xl">Start Adding Movies To Favorites</p>
  </div>
</div>

        )
    }
    

export default Favorites
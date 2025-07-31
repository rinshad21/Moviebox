import { useMoviecontext } from "../contexts/MovieContext"
import MovieCard from "../components/MovieCard"

function Favorites(){
const { favorites } = useMoviecontext();
    if (favorites && favorites.length > 0) {
        return (
            <div>
                <h3 className="font-semibold text-2xl lg:text-3xl lg:mt-2 mt-5 lg:ml-9 ml-17">Your Watchlist</h3>
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
            <div className="bg-gray-700 text-red-600 lg:text-5xl font-semibold lg:p-15 lg:m-50   lg:ml-120 text-2xl mt-50 m-3 p-6 h-30  rounded-xl">
                <h1 className="ml-5">NO MOVIES ADDED YET</h1>
                <p className="lg:text-3xl text-xl italic lg:ml-8 ml-3">Start Adding Movies To Wathclist</p>

            </div>
        )
    }
    

export default Favorites
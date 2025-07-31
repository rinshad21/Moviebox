import { createContext, useState, useContext, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";

const MovieContext = createContext()

export const useMoviecontext = () => useContext(MovieContext)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavourites] = useLocalStorage("favourites", [])
    const [watchlist, setWatchlist] = useLocalStorage("watchlist", [])


    const addToFav = (movie) => {
        setFavourites((prev) => [...prev, movie])
    }
    const RemoveFav = (movieId) => {
        setFavourites((prev) => prev.filter((movie) => movie.id !== movieId))
    }
    const isFav = (movieId) => {
        return favorites.some((movie) => movie.id === movieId)
    
    }
    const addToWathclist = (movie) => {
        setWatchlist((prev) => [...prev, movie])
    }
    const RemovWathclist = (movieId) => {
        setWatchlist((prev) => prev.filter((movie) => movie.id !== movieId))
    }
    const isWatchlist = (movieId) => {
        return watchlist.some((movie) => movie.id === movieId)
    
    }

    const value = {
        favorites,
        addToFav,
        RemoveFav,
        isFav,
        watchlist,
        addToWathclist,
        RemovWathclist,
        isWatchlist,
    };
    return (

        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    )
}
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Watchlist from "./pages/Watchlist";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <>
      <MovieProvider>
      <NavBar />
      <main className="flex flex-wrap ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Favorites" element={<Favorites />} />
          <Route path="/Watchlist" element={<Watchlist />} />
        </Routes>
        </main>
        </MovieProvider>
    </>
  );
} 

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
    //usestate for hamburger
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu=()=>setIsOpen(!isOpen)

  return (
    <nav className="bg-slate-900 text-white rounded-xl mx-3 mt-4 px-4 py-3
    shadow-lg shadow-gray-600/25">
      
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">MOVIEBOX</Link>
        </div>

        {/* Hamburger menu button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex gap-8 text-lg font-semibold">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/Favorites" className="hover:text-blue-400">Favorites</Link>
          <Link to="/Watchlist" className="hover:text-blue-400">Watchlist</Link>
        </div>
      </div>

      {/* Mobile dropdown links */}
      {isOpen && (
        <div className="lg:hidden flex flex-col mt-3 gap-3 text-base font-semibold">
          <Link to="/" onClick={toggleMenu} className="active:text-blue-400">Home</Link>
          <Link to="/Favorites" onClick={toggleMenu} className="active:text-blue-400">Favorites</Link>
          <Link to="/Watchlist" onClick={toggleMenu} className="active:text-blue-400">Watchlist</Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

import { Link } from "react-router-dom"

function NavBar() {
    return (
      
      <nav className='bg-slate-900 rounded-xl ml-2 lg:ml-5 flex p-3 w-100 lg:w-360 md:w-200 lg:font-semibold 
       lg:text-2xl text-xl h-15 mt-8'>
          <div className="font-semibold  hover:text-blue-900"> <Link to="/">MOVIEBOX</Link></div>
          <div className="lg:ml-170 ml-5 hover:text-blue-900 text-ms">
              <Link to="/">Home</Link>  
          </div>
           <div className="lg:ml-10 ml-4 hover:text-blue-900 text-ms">
              <Link to="/Favorites">Favorites</Link>   
          </div>
          <div className="lg:ml-10 ml-2 hover:text-blue-900 text-ms">
              <Link to="/Watchlist">Watchlist</Link>   
          </div>
        </nav>
        
  )
}

export default NavBar
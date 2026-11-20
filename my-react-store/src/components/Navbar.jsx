// Import
import "./Navbar.css";

// Logic Section
function Navbar(){
    return(
      <nav className= "navbar-expanded-lg bg-dark" data-bs-theme= "dark">
          <div className= "container-fluid">
             <a className= "navbar-brand" href="/">Online Store</a>

             <button className= "navbar-toggler" type="button" data-bs-toggle= "collapse" data-bs-target= "#navbarNav" aria-controls= "navbarNav" aria-expand= "false" aria-label= "Toggle navigation"><span className= "navbar-toggler-icon"></span></button>

             <div className= "collapse navbar-collapse" id="navbarNav">
              <ul className= "navbar-nav">
                <li className= "nav-item"><a className= "nav-link" href="/">Home</a></li>
                <li className= "nav-item"><a className= "nav-link" href="/catalog">Catalog</a></li>
                <li className= "nav-item"><a className= "nav-link" href="/about">About</a></li>
                <li className= "nav-item"><a className= "nav-link" href="/contact">Contact</a></li>
              </ul>
             </div>
          </div>  
      </nav>
    )
}

// Export
export default Navbar;

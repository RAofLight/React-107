function NotFound(){
    return(
        <div className= "text-center py-5">
           <h1 className= "display-1">404</h1>
           <h2>Page Not Found</h2>
           <p claassName= "text-secondary">The page you are looking for does not exist.</p>
           <a className= "btn btn-dark" href="/">Back to Home</a>
        </div>
    );
}

export default NotFound;
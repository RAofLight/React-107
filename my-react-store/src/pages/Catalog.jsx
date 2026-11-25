import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react"; // react hooks
import DataService from "../Services/dataService";

function Catalog(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // const [state, setState] = useState(initialValue);
    const [categories, setCategories] = useState(["Crystals", "Insense"]); // State variable
    const [prodsToDisplay, setProdsToDisplay] = useState([]);

    
    useEffect(()=>{
       loadCatalog();
    }, []);

    function loadCatalog(){
        let service = new DataService();
        let data = service.getProducts();

        console.log(data);
        
        setProducts(data);
        setProdsToDisplay(data);

    }

    function handleAddToCart(item){
        setCart([...cart, item]); // spread Operator to populate the stateVariable array
        // cart.push(item) vanilla JS
        console.log(item);
    }

    function myFilterFunction(category) {
        console.log(category);
        let list = products.filter(product => product.category === category)
        console.log(`List ${list}`);
        setProdsToDisplay(list)
    }

    return(
        <div className="catalog">
            <div className="d-flex flex-column">
                <h1>Catalog</h1>

                <h2>Categories</h2>
                <div className="d-flex justify-content-center align-items-center gap-4">
                    {categories.map(category => <button onClick={()=>myFilterFunction(category)} className="btn btn-primary">{category}</button>)}
                </div>
             </div>
          

            <p className= "text-secondary">Cart: {cart.length}</p>

            {prodsToDisplay.map(prod => <Product key = {prod._id} data = {prod} onAdd = {handleAddToCart}/>)}
                     {/* for(i=0; i<products; i++)
                               let prod = products[i] */}
        </div>

    
    );
}

export default Catalog;
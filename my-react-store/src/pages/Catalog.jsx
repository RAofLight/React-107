import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../Services/dataService";

function Catalog(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [categories, setCategories] = useState([]);
    const [prodsToDisplay, setProdsToDisplay] = useSate([]);
    
    
    useEffect(()=>{
       loadCatalog();
    }, []);

    function loadCatalog(){
        let service = new DataService();
        let data = service.getProducts();

        setProducts(data);
        setProdsToDisplay(data);

        let cats = [];
        setCategories(cats);
    }

    function handleAddToCart(item){
        setCart([...cart, item]); // spread Operator to populate the stateVariable array
        // cart.push(item) vanilla JS
        console.log(item);
    }

    return(
        <div className="catalog">
          <h1>Catalog</h1>
          <p className= "text-secondary">Cart: {cart.length}</p>
          {prodsToDisplay.map(prod => <Product key = {prod._id} data = {prod} onAdd = {handleAddToCart}/>)}
                     {/* for(i=0; i<products; i++)
                               let prod = products[i] */}
        </div>

    
    );
}

export default Catalog;
import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";

function Catalog(){
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        // Load the data from the dataService
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]); // The empty array means that this runs only once

    function handleAddToCart(item){
        setCart([...cart, item]); // spread Operator to populate the stateVariable array
        // cart.push(item) vanilla JS
        console.log(item);
    }

    return(
        <div className="catalog">
            <p>Cart: {cart.length}</p>
            {products.map(prod => <Product key = {prod._id} data = {prod} onAdd = {handleAddToCart}/>)}
                     {/* for(i=0; i<products; i++)
                               let prod = products[i] */}
        </div>
    );
}

export default Catalog;
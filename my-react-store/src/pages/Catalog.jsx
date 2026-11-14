import "./Catalog.css";
import Product from "../components/Product";
import { useEffect, useState } from "react";
import DataService from "../dataServices/dataService";

function Catalog(){
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        // Load the data from the dataService
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    },[]); // The empty array means that this runs only once

    return(
        <div className="catalog">
            {products.map(prod => <Product key = {prod._id} data = {prod}/>)}
                     {/* for(i=0; i<products; i++)
                               let prod = products[i] */}
        </div>
    );
}

export default Catalog;
import "./Product.css";
import QuantityPicker from "./QuantityPicker";
import {useState} from "react";

function Product(props){
    const [ qty, setQty] = useState(1);

    function calculateTotal(){
        let total = props.data.price * qty;
        return total;
    }
    
    function handleQtyChange(quantity){
        console.log(quantity);
        setQty(quantity);
    }

    function handleAdd(){
        props.onAdd({...props.data, quantity: qty});
    }
    // Calculate the total price using the data from the Quanity Picker
    return(
        <div className=" card product">
            <img src={"/images/" + props.data.image} className= "card-img-top" alt={props.data.title}></img>
            <h5>{props.data.title}</h5>
            <label className="text-secondary">Price: ${props.data.price.toFixed(2)}</label>
            <label className="fw-bold">Total: ${calculateTotal()}</label>
            <QuantityPicker onChange = {handleQtyChange}/>
            <button className= "btn btn-dark w-100 mt-3" onClick = {handleAdd}>Add to cart</button>
        </div>
    );
}

export default Product;
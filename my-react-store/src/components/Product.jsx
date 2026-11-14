import "./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){

    return(
        <div className="prodcut">
            <img src={"/images/" + props.data.image}></img>
            <h5>{props.data.title}</h5>
            <label>{props.data.price}</label>
            <label>Total</label>
            <QuantityPicker/>
        </div>
    );
}

export default Product;
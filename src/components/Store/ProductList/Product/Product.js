import { useNavigate } from "react-router-dom"
import "./Product.modules.css"
const Product = ({id, img, title, price, link}) => {   
    const navigate = useNavigate()
    const toProduct = async () =>{
        navigate(link)
    }
    return ( 

        <div  className="Product" onClick={toProduct}>
                <img className="Product__img" src={img} alt={title}></img>
                <h3 className="Product__title">{title}</h3>
                <h4 className="Product__price">{price}$</h4>
        </div>
    );
}
 
export default Product;
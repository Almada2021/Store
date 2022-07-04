import "./ProductPage.modules.css"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {getProducts} from "../../getProducts/getProducts";
import Loading from "../Loading/Loading";
import ProductComponent from "./ProductComponent/ProductComponent";
const ProductPage = () => {
    const [product, setProduct] = useState(false)
    const {id} = useParams();
    const apiURL = `https://fakestoreapi.com/products/${id}`
    
    useEffect(()=>{
        getProducts(apiURL).then((res) => setProduct(res))
    },[apiURL, id])
    return (<div className="ProductPage">
            {product === false ? <Loading/> 
            :
                <ProductComponent product={product}/>            
            }</div>  );
}
 
export default ProductPage;
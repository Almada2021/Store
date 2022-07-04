import { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import Product from "./Product/Product";
import { useNavigate } from "react-router-dom";
const ProductList = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    async function productState(){
        const url = await fetch("https://fakestoreapi.com/products")
        const json = await url.json()
        return json
    }
   
    useEffect(() =>{
        productState().then((res) => setProducts(res))
    },[])
    return ( 
        <section className="Product__list">
            {products.length <= 0 ? <Loading/> 
            : 
            products.map((element)=>{
                            return <Product link={`/store/${element.id}`} key={element.id} img={element.image} title={element.title} price={element.price} />
                        })
            
            }
            
        </section>
    );
}
 
export default ProductList;
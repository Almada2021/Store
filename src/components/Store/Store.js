import FormProducts from "../FormProducts/FormProducts";
import ProductList from "./ProductList/ProductList";
import "./Store.css"
const Store = () =>{
    return(
        <main className="Store">
            <FormProducts/>        
            <ProductList/>
        </main>
    )
}
export default Store;
import { Link } from "react-router-dom";

const ListLinks = (props) =>{
    return(
        <ul className="Navigation__link">
            <Link className="Navigation__link-li" to="/" onClick={() => props.change(false)}>Home</Link>                
            <Link className="Navigation__link-li" to="/blog" onClick={() => props.change(false)}>Blog</Link>                
            <Link className="Navigation__link-li" to="/store" onClick={() => props.change(false)}>Store</Link>                
            <Link className="Navigation__link-li" to="/about" onClick={() => props.change(false)}>About</Link> 
        </ul>
    )
   
}
export default  ListLinks
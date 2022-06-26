import { Link } from "react-router-dom";

const ListLinks = () =>{
    return(
        <ul className="Navigation__link">
            <Link className="Navigation__link-li" to="/home">Home</Link>                
            <Link className="Navigation__link-li" to="/blog">Blog</Link>                
            <Link className="Navigation__link-li" to="/store">Store</Link>                
            <Link className="Navigation__link-li" to="/about">About</Link> 
        </ul>
    )
   
}
export default  ListLinks
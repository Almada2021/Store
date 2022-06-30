import { Link } from "react-router-dom";

const ListLinks = (props) =>{
    return(
        <ul className="Navigation__link">
            <Link className="Navigation__link-li" to="/" onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}}}>Home</Link>                
            <Link className="Navigation__link-li" to="/blog" onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}}}>Blog</Link>                
            <Link className="Navigation__link-li" to="/store" onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}}}>Store</Link>                
            <Link className="Navigation__link-li" to="/about"onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}}}>About</Link> 
        </ul>
    )
   
}
export default  ListLinks
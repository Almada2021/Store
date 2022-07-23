import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCartShopping } from '@fortawesome/free-solid-svg-icons';

const ListLinks = (props) =>{
    return(
        <ul className="Navigation__link">
            <Link className="Navigation__link-li" to="/" onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}window.scroll(0, 0);  }}>Home</Link>                
            <Link className="Navigation__link-li" to="/blog" onClick={() =>{
                if(Number(window.innerWidth) < 768){ props.change(false)}
                window.scroll(0, 0);  
                }}>Blog</Link>                
            <Link className="Navigation__link-li" to="/store" onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}window.scroll(0, 0);  }}>Store</Link>                
            <Link className="Navigation__link-li" to="/about"onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}window.scroll(0, 0);  }}>About</Link> 
            <Link className="Navigation__link-li" to="/store" onClick={() =>{if(Number(window.innerWidth) < 768){ props.change(false)}window.scroll(0, 0);  }}><FontAwesomeIcon icon={faCartShopping} /></Link>               
        </ul>
    )
   
}
export default  ListLinks
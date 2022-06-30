import "./Footer.modules.css"
import { Link } from "react-router-dom";
import poster from "./img/Poster.png";
const Footer = () => {
    return (
        <footer className="Footer">
            <div className="Footer__image">
                <img className="Footer__image-img" src={poster} alt="image"></img>
                <p className="Footer__image-p">Neo Store</p>
            </div>
            <ul className="Footer__list">
                <Link className="Footer__list-li" to="/">Home</Link>
                <Link className="Footer__list-li" to="/blog">Blog</Link>
                <Link className="Footer__list-li" to="/store">Store</Link>
                <Link className="Footer__list-li" to="/about">About</Link>
            </ul>
            <ul className="Footer__list">
                <Link className="Footer__list-li" to="/">Home</Link>
                <Link className="Footer__list-li" to="/blog">Blog</Link>
                <Link className="Footer__list-li" to="/store">Store</Link>
                <Link className="Footer__list-li" to="/about">About</Link>
            </ul>
            <ul className="Footer__list">
                <Link className="Footer__list-li" to="/">Home</Link>
                <Link className="Footer__list-li" to="/blog">Blog</Link>
                <Link className="Footer__list-li" to="/store">Store</Link>
                <Link className="Footer__list-li" to="/about">About</Link>
            </ul>

        </footer>
    );
}
 
export default Footer;
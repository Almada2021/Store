import  "./Button.modules.css";
import { useNavigate } from "react-router-dom";
const Button = ({text, size}) => {
    const navigate = useNavigate()
    return (  
        <button className={size} onClick={() =>{
            navigate("/store");
        }} >{text}</button>
    );
}

 
export default Button;
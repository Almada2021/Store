import {useState,useEffect} from "react"
import { ReactComponent as LogoMenu } from "./img/menu.svg";
import ListLinks from "./ListLinks/ListLinks"; 
import "./Navigation.modules.css";
const Navigation = () =>{
    const [extend, setExtend] = useState(false)
    const getDimension= () =>{
        const {innerWidth, innerHeight} =window
        return ({
            width: innerWidth, 
            height: innerHeight

        }
        )
    }
    const [size,setSize] = useState(getDimension);
    const change = (action) =>{
        switch(action){
            case true:
                return setExtend(true)
            case false:
                return setExtend(false)
            case undefined:
                return setExtend(!extend)                
            default:
                return setExtend(!extend)

        }

    }
    
    useEffect(() => {
        if(Number(size.width) >768){
            change(true)
        }
        const handleResize = () =>{
            window.addEventListener("resize",setSize(getDimension));
            let temp =getDimension()
            if(Number(size.width) >=768 ){
                change(true)
            }
            if(size.width <= temp.width && size.width < 768){
                change(false)
            }

        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    },[])
    return(
            <nav className="Navigation">
                <div className="Navigation__button" onClick={change}>
                    <LogoMenu className="Navigation__button-icon"/>
                </div>

                {extend === true ? 
                    <ListLinks change={setExtend}/>
                :
                    <p className="p"></p>
                }
            </nav>
       
    )
}
export default Navigation;
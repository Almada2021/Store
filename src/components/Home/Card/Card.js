import "./Card.modules.css"
const Card = (props) =>{
    return(
        <li className="Card" key={props.id} >
            <div className="Card__containerImg">
                <img className="Card__containerImg-img" src={props.img}></img>
            </div>
            <div className="Card__text">
                <h3 className="Card__text-h3">{props.title}</h3>
                <p className="Card__text-p">{props.description}</p>
            </div>
        </li>
    )
}
export default Card;
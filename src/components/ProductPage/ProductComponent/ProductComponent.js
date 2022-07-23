import "./ProductComponent.modules.css"
import { useState } from "react";
import Modal from 'react-modal';
const ProductComponent = (props) => {
    const {title, price, image, description} = props.product
    const [modal, setModal] = useState(false)
    return (
        <div className="ProductComponent">
             <Modal isOpen={modal} >
                <div className="Modal__Close"><p className="Modal__close-btn" onClick={() => { setModal(false)}}>X</p></div>
                
            </Modal>
            <header className="ProductComponent__header">
                <div className="ProductComponent__container">
                    <img alt={title} className="ProductComponent__container-img" src={image}></img>
                </div>
                <section className="ProductComponent__text">
                    <h4 className="ProductComponent__text-product">{title}</h4>
                    <h4 className="ProductComponent__text-price">{price}$</h4>
                    <div className="container__btn">
                        <form>
                            <div>
                                <input className="container__form-btn" type="number" min={0}/>

                            </div>
                            <button onClick={(e) =>{  
                                e.preventDefault()
                                setModal(true)
                            }} className="ProductComponent__text-btn">Buy</button>
                        </form>
                    </div>

                </section>
            </header>
            <footer className="ProductComponent__footer">
                <p className="ProductComponent__footer-p">
                    {description}
                </p>
            </footer>
           
        </div>
    );
}
 
export default ProductComponent;
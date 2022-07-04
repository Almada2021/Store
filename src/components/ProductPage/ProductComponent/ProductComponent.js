import "./ProductComponent.modules.css"
const ProductComponent = (props) => {
    const {title, price, image, description} = props.product
    return (
        <div className="ProductComponent">
            <header className="ProductComponent__header">
                <div className="ProductComponent__container">
                    <img alt={title} className="ProductComponent__container-img" src={image}></img>
                </div>
                <section className="ProductComponent__text">
                    <h4 className="ProductComponent__text-product">{title}</h4>
                    <h4 className="ProductComponent__text-price">{price}$</h4>
                </section>
            </header>
            <footer>
                <p>
                    {description}
                </p>
            </footer>
        </div>
    );
}
 
export default ProductComponent;
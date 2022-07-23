import "./Home.modules.css"
import Card from "./Card/Card";
import Button from "../Button/Button";
const Home = () =>{
    console.log(window.clientWidth)
    return(
        <div className="Home" >
            <header className="Home__header">
                <h1 className="Home__header-h1">The store of dreams</h1>
                <Button text="Buy now" size="Button__big"></Button>
            </header>  
            <section className="Home__cards">
                <ul className="Home__cards-list">
                    <Card img="https://i.pinimg.com/236x/7d/70/f9/7d70f926c9e4b8ae96669b5e4451e453.jpg" title="high quality products" description="the best products from all over the world with quality certification"/>
                    <Card img="https://i.pinimg.com/564x/bd/e5/8b/bde58b4d6e723da97afb23786a8d05cd.jpg" title="Make your dreams" description="buy your dreams at the best price"/>
                    <Card img="https://i.pinimg.com/236x/32/2c/5d/322c5d3fb0fcff602463f5db38216c73.jpg" title="connect with the family" description="our products bring you closer together"/>

                </ul>
            </section>         
           
        </div>
    )
}
export default Home;

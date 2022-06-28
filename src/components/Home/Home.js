import "./Home.modules.css"
import Card from "./Card/Card";
const Home = () =>{
    return(
        <div className="Home">
            <header className="Home__header">
                <h1 className="Home__header-h1">The store of dreams</h1>
                <button>click</button>
            </header>  
            <section className="Home__cards">
                <ul className="Home__cards-list">
                    <Card img="https://i.pinimg.com/564x/7e/19/17/7e1917e89b7848481499233506b22358.jpg" title="Make your shops" description="All buy in anywhere place"/>
                    <Card img="https://i.pinimg.com/564x/7e/19/17/7e1917e89b7848481499233506b22358.jpg" title="Make your shops" description="All buy in anywhere place"/>
                    <Card img="https://i.pinimg.com/564x/7e/19/17/7e1917e89b7848481499233506b22358.jpg" title="Make your shops" description="All buy in anywhere place"/>

                </ul>
            </section>         
           
        </div>
    )
}
export default Home;

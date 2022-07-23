import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigaton';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
import ProductPage from './components/ProductPage/ProductPage';
import About from './components/About/About';
import PayForm from './components/PayForm/Payform';
function App() {
  return (
    <div className="App" >
    
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>        
        <Route path='/blog'element={<Blog></Blog>}></Route>
        <Route path='/store'element={<Store></Store>}></Route>
        <Route path='/store/:id' element={<ProductPage/>}/>
        <Route path='/about'element={<About/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

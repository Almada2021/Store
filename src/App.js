import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigaton';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
import Footer from './components/Footer/Footer';
import Blog from './components/Blog/Blog';
function App() {
  return (
    <div className="App">
    
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>        
        <Route path='/blog'element={<Blog></Blog>}></Route>
        <Route path='/store'element={<Blog></Blog>}></Route>
        <Route path='/about'element={<Blog></Blog>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigaton';
import Home from './components/Home/Home';
import Store from './components/Store/Store';
function App() {
  return (
    <div className="App">
    
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>} exact={true}/>        
        <Route path='/store'element={<Store></Store>}></Route>
      </Routes>
    </div>
  );
}

export default App;

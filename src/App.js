import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigaton';
import Home from './components/Home/Home';
function App() {
  return (
    <div className="App">
    
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>}/>        
      </Routes>
    </div>
  );
}

export default App;

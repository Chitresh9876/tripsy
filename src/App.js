import './App.css';
import {Routes, Route} from 'react-router-dom'
import Contact from './routes/Contact'
import Home from './routes/Home'
import Service from './routes/Service'
import About from './routes/About'
function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/service' element={<Service/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

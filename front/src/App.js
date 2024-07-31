
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Loginregnav } from './Components/Loginregnav/Loginregnav';
import { Register } from './Pages/Register';


function App() {
  return (
    <div >


    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>

    </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

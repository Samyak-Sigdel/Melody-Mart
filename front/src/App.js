
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';

import { Register } from './Pages/Register';

import { Main } from './Pages/Main';



function App() {
  return (
    <div >


    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/main' element={<Main/>}/>

    </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

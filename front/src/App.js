
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';

import { Register } from './Pages/Register';

import { Main } from './Pages/Main';
import { Category } from './Pages/Category';
import { Subcategory } from './Pages/Subcategory';



function App() {
  return (
    <div >

    <Navbar />
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/main' element={<Main/>}/>
    <Route path='/category' element={<Category/>}/>
    <Route path='/guitar' element={<Subcategory category="guitar"/>}/>


    </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;

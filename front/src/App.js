import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Main } from './Pages/Main';
import { Category } from './Pages/Category';
import { Subcategory } from './Pages/Subcategory';
import { Product } from './Pages/Product'; 
import { Contactus } from './Pages/Contactus';

import guitarbanner from './Assets/guitarbanner.jpg';

import ppp from './Assets/ppp.jpg';
import drum from './Assets/drumsb.jpg'



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/category' element={<Category />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Product route */}

          <Route path='/contactus' element={<Contactus />} />

          <Route path='/guitar' element={<Subcategory banner ={guitarbanner} category="guitar" />} />
          <Route path='/violin' element={<Subcategory  category="violin" />} />
          <Route path='/drums' element={<Subcategory banner = {drum} category="drums" />} />
          <Route path='/piano' element={<Subcategory banner = {ppp} category="piano" />} />
          <Route path='/flute' element={<Subcategory category="flute" />} />

    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

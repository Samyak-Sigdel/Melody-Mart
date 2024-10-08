import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Register } from './Pages/Register';
import { Main } from './Pages/Main';
import { Category } from './Pages/Category';
import { Subcategory } from './Pages/Subcategory';
import { Product } from './Pages/Product'; // Add the Product page
import { Contactus } from './Pages/Contactus';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Main />} />
          <Route path='/category' element={<Category />} />
          <Route path='/guitar' element={<Subcategory category="guitar" />} />
          <Route path='/violin' element={<Subcategory category="violin" />} />
          <Route path='/product/:productId' element={<Product />} /> {/* Product route */}

          <Route path='/contactus' element={<Contactus />} />


    
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

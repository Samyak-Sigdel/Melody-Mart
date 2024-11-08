import React from 'react'
import './Admin.css'
import {Route, Routes} from 'react-router-dom'

import { Sidebar } from '../../Components/Sidebar/Sidebar'
import { Addproducts } from '../../Components/Addproducts/Addproducts'
import { ListProduct } from '../../Components/ListProduct/ListProduct'

export const Admin = () => {
  return (
    
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route path ='/api/admin/addproduct' element={<Addproducts/>}/>
            <Route path ='/listproduct' element={<ListProduct/>}/>
        </Routes>       
    </div>

  )
}

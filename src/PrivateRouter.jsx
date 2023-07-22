import React from 'react'
import { Route, Routes } from 'react-router'
import Products from './Product/Products'
import Product from './Product/Product'
import { Contact } from './Contact/Contact'
import SliderProduct from './Home/SliderProduct'
import { Cart } from './Cart/Cart'


export const PrivateRouter = () => {
  
  return (
<>
<Routes>
   
    <Route path='/porducts' element={<Products/>}/>
    <Route path='/products/:id' element={<Product/>}/>
    <Route path='/Head/:id' element={<Product/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/' element={<SliderProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>



</> 
 )
}

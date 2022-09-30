import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/Navbar/ItemListContainer';
import Cart from './components/cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CartProvider from './context/CartContext';



function App() {
  return (
      <>
      <BrowserRouter>
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer/>}></Route>
      </Routes>
      </CartProvider>
      </BrowserRouter>
      </>
  );
}

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ListProducto } from '../components/productos';
import Home from "../pages/inicio/Home"

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<ListProducto />} />
    </Routes>
  );
};

export default Rutas;

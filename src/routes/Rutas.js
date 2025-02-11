import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ListProducto } from '../components/productos';
import { Home } from "../pages/inicio/Home";
import { Layout } from "../layouts";

export function Rutas() {
  const Rutas = () => {

    const plantillas = (Layout, Page) => (
      <Layout>
        <Page />
      </Layout>
    );

    return (
      <Routes>
        <Route path='/' element={plantillas(Layout, Home)} />
        <Route path='/card' element={plantillas(Layout, ListProducto)} />
      </Routes>
    );
  };

  return <Rutas />;
}

export default Rutas;
import React from 'react'
import {Stack} from "react-bootstrap"
import {ItemProductos} from "../ItemProductos";
import { Productos } from '../../../utils';

export function ListProducto() {
  return (
    <Stack gap={3}>
    <div className="container p=2" style={{textAlign:"center"}}>
        <h1> Lista  De Productos</h1>
        <div className="target">
            {Productos.map((Producto)=>(
                    <ItemProductos 
                    nombre={Producto.nombre}
                    descripcion= {Producto.descripcion} 
                    />
                ))}
    </div>
    </div>
  </Stack>
  );
}
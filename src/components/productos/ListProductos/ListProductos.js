import React from 'react';
import { Stack, Row, Col } from "react-bootstrap";
import { ItemProductos } from "../ItemProductos";
import { Productos } from '../../../utils';

import "./ListProducto.scss";

export function ListProducto() {
  return (
    <Stack gap={3}>
      <h1>Lista de Productos</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="container">
        {Productos.map((producto, index) => (
          <Col key={index}>
            <ItemProductos 
              nombre={producto.nombre}
              descripcion={producto.descripcion} 
            />
          </Col>
        ))}
      </Row>
    </Stack>
  );
}
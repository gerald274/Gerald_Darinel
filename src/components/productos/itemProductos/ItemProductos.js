import React from "react";
import { Card, Button } from "react-bootstrap";

export function ItemProductos(props) {
  const { nombre, descripcion } = props;
  
  return (
    <div>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
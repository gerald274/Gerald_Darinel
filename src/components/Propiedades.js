import React from "react";
import Propiedades from "./Propiedades";

export default function Propiedades(props) {
  const { valor, incrementar, decrementar } = props;
  return (
    <div>
      <h1>Valor del hook: {valor}</h1>
      <button onClick={incrementarValor}>Incrementar</button>
      <button onClick={decrementarValor}>Decrementar</button>
    </div>
  );
}

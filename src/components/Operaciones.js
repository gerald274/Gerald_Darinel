import { useState } from "react";
import Propiedades from "./Propiedades";

export default function Operaciones() {
  const [valor, setValor] = useState(0);

  const incrementarValor = () => {
    setValor(valor + 1);
  };

  const decrementarValor = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <Propiedades
        valor={valor}
        Incrementar={incrementarValor}decrementar={decrementarValor}
      />
    </div>
  );
}

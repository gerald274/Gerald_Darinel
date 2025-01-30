import { useState } from "react";

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
        incrementar={incrementarValor} 
        decrementar={decrementarValor} 
      />
    </div>
  );
}

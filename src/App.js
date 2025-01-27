
function Mensaje(){
  return(
    <div>soy un componente</div>
  )
}


function App() {
  const datos = [
    {
      nombre: "danny",
      apellido: "cambrano"
    }
  ];

  const mensajeSaludo = () => {
    alert("hola a todos");
    console.log("Soy el click");
  };

  return (
    <div className="App">
      <ejemplo/>
      <Mensaje/>
      <h1>Hola mundo</h1>
      <h1>Nombre: {datos[0].nombre}</h1>
      <h1>Apellido: {datos[0].apellido}</h1>
      <button onClick={mensajeSaludo}>Click aquí</button>
      <ejemplo/>
    </div>
  );
}

export default App;
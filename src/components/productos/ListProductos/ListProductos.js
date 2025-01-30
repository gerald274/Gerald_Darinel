import React from 'react'
import {Stack} from "react-bootstrap";
import {ItemProductos} from "../itemProductos"
import {Productos} from "../../../utils"

export  function Productos() {
  return (
    <Stack gap={3}>
      <div className="p-2 center" style={{textAlign:"center"}}>
      <h1>Lista de productos</h1>
      <div className='target'>
        {
          Productosroductos.map((productos)=>(
            <ItemProductos />
          ))
        }
    

      </div>
      </div>
      
    </Stack>
  )
}

export default Productos;
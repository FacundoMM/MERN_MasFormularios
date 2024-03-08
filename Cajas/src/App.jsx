
import Formulario from "../Components/Formulario";
import { useState } from "react";

function App() {
  const [color, setcolor] = useState('#000');

  
  return (
    <>
      <h1 className="text-center">Agrega cuadros de colores</h1>
      <Formulario color = {color} setcolor = {setcolor}/>
    </>
  )
} 

export default App

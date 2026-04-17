//import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { useState, useEffect } from "react"; // Importamos hooks

// Componente principal
export default function App(): JSX.Element {

  // Estado para guardar el valor del contador
  const [contador, setContador] = useState<number>(0);

  // useEffect que se ejecuta cuando cambia el contador
  useEffect(() => {

    // Mostramos en consola el valor actual
    console.log("El contador cambió:", contador);

  }, [contador]); 
  // Dependencia: este efecto se ejecuta SOLO cuando cambia "contador"

  // Función que incrementa el contador
  function aumentar(): void {
    setContador(contador + 1); // Actualiza el estado
  }

  return (
    <div>
      <h2>Contador: {contador}</h2>

      {/* Botón que cambia el estado */}
      <button onClick={aumentar}>
        Aumentar
      </button>
    </div>
  );
}
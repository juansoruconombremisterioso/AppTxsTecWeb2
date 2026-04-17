import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Componente principal
export default function App(): JSX.Element {

  // Lista estática (no cambia, no usa estado)
  const nombres: string[] = ["Ana", "Luis", "Carla", "Pedro"];
  let indice:number=1; //para probar recursividad
  //creando indice manualmente

  return (
    <div>
      <h2>Lista de nombres</h2>
      <ul>
        {

          //Recorremos el arreglo "nombres"
          //map: Recorre el arreglo - Devuelve un elemento JSX por cada item
          //Es como un for, pero para renderizar UI.
          // Recorremos el array "nombres"        
          nombres.map((item, index) => (

            // key: identificador único por cada elemento
            <li key={index}>
              {indice++} {item} {/* Mostramos el nombre */}
            </li>
          ))
        }
      </ul>
    </div>
  );
}
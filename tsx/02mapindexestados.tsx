import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

// Componente principal
export default function App(): JSX.Element {

  // Estado para guardar el nombre que el usuario escribe
  const [nombre, setNombre] = useState<string>("");

  // Estado para guardar la lista de nombres
  const [lista, setLista] = useState<string[]>([]);

  // Función que se ejecuta al hacer clic en "Agregar"
  function agregarNombre(): void {

    // Validamos que no esté vacío
    if (nombre.trim() === "") return;

    // Creamos una nueva lista agregando el nombre actual
    // ...lista = copia de los elementos anteriores
    //lista = original
    //...lista = fotocopia
    setLista([...lista, nombre]);
    // setLista no es un método, es una función (setter)
    // que React nos proporciona a través de useState
    // para actualizar el estado de la lista

    // Limpiamos el input
    setNombre("");
  }

  return (
    <div>
      <h2>Lista de nombres</h2>

      {/* INPUT CONTROLADO */}
      <input
        type="text"
        placeholder="Escribe un nombre"
        
        // value conecta el input con el estado
        value={nombre}

        // onChange captura lo que el usuario escribe
        onChange={(e) => setNombre(e.target.value)}
      />

      {/* BOTÓN PARA AGREGAR A LA LISTA */}
      <button onClick={agregarNombre}>
        Agregar
      </button>

      <h2>Agregando: {nombre}</h2> {/* efecto del input controlado */}

      {/* LISTA RENDERIZADA CON map */}
      <ul>

        {
          //map: Recorre el arreglo - Devuelve un elemento JSX por cada item
          //Es como un for, pero para renderizar UI.
          // Recorremos el array "lista"
          lista.map((item, index) => (
            // key: identificador único por elemento (obligatorio en React)
            <li key={index}>
              {item} {/* Mostramos el nombre */}
            </li>

          ))
        }

      </ul>
    </div>
  );
}
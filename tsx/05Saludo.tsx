import { useState } from 'react'

// Definimos el tipo de la prop
type Props = {
  nombre: string; // dato que recibirá del padre
};

// Componente hijo
export function Saludo({ nombre }: Props): JSX.Element {

  return (
    <h2>Hola {nombre}</h2> // mostramos el nombre
  );
}
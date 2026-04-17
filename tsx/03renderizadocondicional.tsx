import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App(): JSX.Element {

  const [nota, setNota] = useState<number>(0);

  function manejarCambio(e: React.ChangeEvent<HTMLInputElement>): void {
    setNota(Number(e.target.value));
  }

  // Lógica con if fuera del JSX
let resultado: JSX.Element | null;

if (nota === 0) {
  resultado = null;
} else if (nota > 50) {
  resultado = <p>Aprobado</p>;
} else {
  resultado = <p>Reprobado</p>;
}

  return (
    <div>
      <input type="number" onChange={manejarCambio} />
      <h3>Nota: {nota}</h3>

      {/* Renderizamos el resultado */}
      {resultado}
    </div>
  );
}
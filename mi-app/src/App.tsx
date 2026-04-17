import { useState, type JSX } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
type Props={
  nombre: string;
  ciudad: string;
}
function Saludo({ nombre, ciudad }: Props): JSX.Element {
    return <h1>Hola {nombre} de la ciudad {ciudad}</h1>;
}



export default function App(): JSX.Element {
  const [contador, setContador]=useState<number>(0);
  function aumentarContador(): void{
  setContador(contador+1);
}

function disminuirContador(): void{
  setContador(contador-1);
}
  return(
    <div>
      <input type="text" placeholder='Escribe tu nombre' onChange={(e)=>setNombre(e.target.value)} />
      <h2>Hola {nombre||"Mundo"}</h2>
    </div>
  );
}

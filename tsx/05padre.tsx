import { useState } from "react"; // hook de estado
import { Saludo } from "./05Saludo"; // importamos el hijo

export default function App(): JSX.Element {

  // Estado para guardar el nombre
  const [nombre, setNombre] = useState<string>("");

  return (
    <div>
      <h1>Ejemplo Padre - Hijo</h1>

      {/* INPUT CONTROLADO */}
      <input
        type="text"
        placeholder="Escribe tu nombre"
        value={nombre} // conectado al estado
        onChange={(e) => setNombre(e.target.value)} // actualiza estado
      />

      {/* USO DEL HIJO */}
      {/* Le enviamos el nombre como prop */}
      <Saludo nombre={nombre} />

    </div>
  );
}
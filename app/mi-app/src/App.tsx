import { useState, type JSX } from "react"; // hook de estado

export default function App(): JSX.Element {

  const [numerosPares, setNumerosPares] = useState<number[]>([]);
  const [numerosImpares, setNumerosImpares] = useState<number[]>([]);

  const [nuevoNumero, setNumero] = useState<number>(0);

  // Función para agregar producto
  function agregarNumero(): void {

    // Validar vacío
    if (nuevoNumero === 0) return;
    if (nuevoNumero <0 || nuevoNumero>100) {
      alert("Por favor, ingrese un número entre 0 y 100");
      return;
    }

    if(nuevoNumero % 2 === 0) {
      if (numerosPares.includes(nuevoNumero)) {
        alert("El numero par ya existe");
        return; 
      }
      setNumerosPares([...numerosPares, nuevoNumero]);
    }
    else{
      if (numerosImpares.includes(nuevoNumero)) {
        alert("El numero impar ya existe");
        return; 
      }
      setNumerosImpares([...numerosImpares, nuevoNumero]);
    }
    setNumero(0);
  }

  function eliminarNumeroImpar(indexEliminar: number): void {
    const nuevaLista = [
      ...numerosImpares.slice(0, indexEliminar),
      ...numerosImpares.slice(indexEliminar + 1)
    ];
    setNumerosImpares(nuevaLista);
  }

  function eliminarNumeroPar(indexEliminar: number): void {
    const nuevaLista = [
      ...numerosPares.slice(0, indexEliminar),
      ...numerosPares.slice(indexEliminar + 1)
    ];
    setNumerosPares(nuevaLista);
  }

  function manejarCambio(e: React.ChangeEvent<HTMLInputElement>): void {
    setNumero(Number(e.target.value));
  }

  return (
    <div>
      <h2>Clasificador de numeros</h2>
      <input
        type="number"
        placeholder="Ej: 3"
        value={nuevoNumero}
        onChange={manejarCambio}
      />

      <button onClick={agregarNumero}>
        Agregar
      </button>
      <h2>Numeros Pares</h2>
      {
        numerosPares.length === 0
        ? <p>No hay numeros pares</p>
        : (
          <ul>
            {
              numerosPares.map((numero, index) => (
                <li key={index}>
                  {numero}
                  <button onClick={() => eliminarNumeroPar(index)}>
                    Eliminar
                  </button>
                </li>
              ))
            }
          </ul>
        )
      }
      <h2>Numeros Impares</h2>
      {
        numerosImpares.length === 0
        ? <p>No hay numeros impares</p>
        : (
          <ul>
            {
              numerosImpares.map((numero, index) => (
                <li key={index}>
                  {numero}
                  <button onClick={() => eliminarNumeroImpar(index)}>
                    Eliminar
                  </button>
                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  );
}
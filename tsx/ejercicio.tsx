import { useState } from "react"; // hook de estado

export default function App(): JSX.Element {

  // Estado de productos
  const [productos, setProductos] = useState<string[]>([]);

  // Estado del input
  const [nuevoProducto, setNuevoProducto] = useState<string>("");

  // Función para agregar producto
  function agregarProducto(): void {

    // Validar vacío
    if (nuevoProducto.trim() === "") return;

    // Agregar producto
    setProductos([...productos, nuevoProducto]);

    // Limpiar input
    setNuevoProducto("");
  }

  return (
    <div>
      <h2>Lista de Compras</h2>

      {/* INPUT */}
      <input
        type="text"
        placeholder="Ej: Leche"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />

      {/* BOTÓN */}
      <button onClick={agregarProducto}>
        Agregar
      </button>

      {/* RENDERIZADO CONDICIONAL */}
      {
        productos.length === 0
        ? <p>No hay productos</p>
        : (
          <ul>
            {
              productos.map((prod, index) => (
                <li key={index}>
                  {index + 1}. {prod}
                </li>
              ))
            }
          </ul>
        )
      }

    </div>
  );
}
import { useEffect, useState } from "react";
import { Cabecera } from "./components/Cabecera";
import { Formulario } from "./components/Formulario";
import { Amigos } from "./components/Amigos";
function App() {
  // Declariaciones API
  const [arrayAmigos, setArrayAmigos] = useState([]);
  const urlAPI = "http://localhost:3001/amigos/";

  // LLamada get API

  const llamadaAPI = async () => {
    const resp = await fetch(urlAPI);
    const datosResp = await resp.json();
    setArrayAmigos(datosResp);
  };
  useEffect(() => {
    llamadaAPI();
  }, []);

  // otras declaraciones
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [valoracion, setValoracion] = useState(null);
  const [idParaEditar, setIdParaEditar] = useState(null);

  const [editando, setEditando] = useState(false);
  const toggleEditando = () => {
    setEditando(!editando);
  };

  return (
    <>
      <div className="container">
        <Cabecera arrayAmigos={arrayAmigos} />
        <Formulario
          urlAPI={urlAPI}
          llamadaAPI={llamadaAPI}
          editando={editando}
          toggleEditando={toggleEditando}
          nombre={nombre}
          setNombre={setNombre}
          apellido={apellido}
          setApellido={setApellido}
          idParaEditar={idParaEditar}
        />
        <Amigos
          arrayAmigos={arrayAmigos}
          urlAPI={urlAPI}
          llamadaAPI={llamadaAPI}
          toggleEditando={toggleEditando}
          setNombre={setNombre}
          setApellido={setApellido}
          setValoracion={setValoracion}
          setIdParaEditar={setIdParaEditar}
        />
      </div>
    </>
  );
}

export default App;

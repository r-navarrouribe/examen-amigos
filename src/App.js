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

  return (
    <>
      <div className="container">
        <Cabecera arrayAmigos={arrayAmigos} />
        <Formulario urlAPI={urlAPI} llamadaAPI={llamadaAPI} />
        <Amigos arrayAmigos={arrayAmigos} urlAPI={urlAPI} />
      </div>
    </>
  );
}

export default App;

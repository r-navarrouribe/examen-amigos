import { useCallback, useState } from "react";
import { FaStar } from "react-icons/fa";

export const Formulario = (props) => {
  const { urlAPI } = props;
  const [creando, setCreando] = useState(false);
  const toggleCreando = () => {
    setCreando(!creando);
  };
  // post request
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const anyadirAmigo = useCallback(async () => {
    const resp = await fetch(urlAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        valoracion: <FaStar />,
      }),
    });
  }, [apellido, nombre, urlAPI]);

  return (
    <section>
      {creando === false && (
        <button type="button" className="boton btn" onClick={toggleCreando}>
          Crear amigo
        </button>
      )}
      {creando && (
        <form className="row" onSubmit={anyadirAmigo}>
          <div className="form-group col-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="input-formulario form-control"
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              className="input-formulario form-control"
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="form-group col-2">
            <label htmlFor="valoracion">Valoración</label>
            <select id="valoracion" className="input-formulario form-control">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="col-4 botones-form">
            <button type="sumbit" className="boton btn mb-2">
              Crear
            </button>
            <button type="button" className="boton btn" onClick={toggleCreando}>
              Cancelar
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

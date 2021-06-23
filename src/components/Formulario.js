import { useCallback } from "react";
import { FaStar } from "react-icons/fa";

export const Formulario = (props) => {
  const {
    urlAPI,
    llamadaAPI,
    editando,
    toggleEditando,
    nombre,
    setNombre,
    apellido,
    setApellido,
    idParaEditar,
    toggleCreando,
    creando,
    valoracion,
    setValoracion,
  } = props;

  // post request

  const anyadirAmigo = useCallback(
    async (e) => {
      e.preventDefault();
      const resp = await fetch(urlAPI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          valoracion: +valoracion,
        }),
      });
      llamadaAPI();
      toggleCreando();
    },
    [apellido, llamadaAPI, nombre, toggleCreando, urlAPI, valoracion]
  );

  // put request
  const editarAmigo = useCallback(
    async (e) => {
      e.preventDefault();
      const resp = await fetch(urlAPI + idParaEditar, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          apellido: apellido,
          valoracion: +valoracion,
        }),
      });
      llamadaAPI();
      toggleEditando();
    },
    [
      urlAPI,
      idParaEditar,
      nombre,
      apellido,
      valoracion,
      llamadaAPI,
      toggleEditando,
    ]
  );

  return (
    <section>
      {creando === false && editando === false && (
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
            <select
              id="valoracion"
              className="input-formulario form-control"
              onChange={(e) => setValoracion(e.target.value)}
            >
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
      {editando && (
        <form className="row" onSubmit={editarAmigo}>
          <div className="form-group col-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="input-formulario form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="form-group col-3">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              className="input-formulario form-control"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="form-group col-2">
            <label htmlFor="valoracion">Valoración</label>
            <select
              id="valoracion"
              className="input-formulario form-control"
              onChange={(e) => setValoracion(e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="col-4 botones-form">
            <button type="sumbit" className="boton btn mb-2">
              Editar
            </button>
            <button
              type="button"
              className="boton btn"
              onClick={toggleEditando}
            >
              Cancelar
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

import { useState } from "react";

export const Formulario = () => {
  const [creando, setCreando] = useState(true);
  const toggleCreando = () => {
    setCreando(!creando);
  };
  return (
    <section>
      {creando === false && (
        <button type="button" className="boton btn">
          Crear amigo
        </button>
      )}
      {creando && (
        <form className="row">
          <div className="form-group col-3">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              className="input-formulario form-control"
            />
          </div>
          <div className="form-group col-3">
            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              className="input-formulario form-control"
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
            <button type="button" className="boton btn">
              Cancelar
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

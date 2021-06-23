import { Amigo } from "./Amigo";
import PropTypes from "prop-types";

export const Amigos = (props) => {
  const {
    arrayAmigos,
    urlAPI,
    llamadaAPI,
    toggleEditando,
    setNombre,
    setApellido,
    setValoracion,
    setIdParaEditar,
  } = props;
  return (
    <ul className="row list-unstyled">
      {arrayAmigos.map((amigo) => (
        <Amigo
          key={amigo.id}
          amigo={amigo}
          urlAPI={urlAPI}
          llamadaAPI={llamadaAPI}
          toggleEditando={toggleEditando}
          setNombre={setNombre}
          setApellido={setApellido}
          setValoracion={setValoracion}
          setIdParaEditar={setIdParaEditar}
        />
      ))}
    </ul>
  );
};

Amigos.propTypes = {
  arrayAmigos: PropTypes.array.isRequired,
  urlAPI: PropTypes.string.isRequired,
  llamadaAPI: PropTypes.func.isRequired,
  toggleEditando: PropTypes.func.isRequired,
  setNombre: PropTypes.func.isRequired,
  setApellido: PropTypes.func.isRequired,
  setValoracion: PropTypes.func.isRequired,
  setIdParaEditar: PropTypes.func.isRequired,
};

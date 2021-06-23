import { useCallback } from "react";
import { FaPencilAlt, FaStar, FaTimes } from "react-icons/fa";

export const Amigo = (props) => {
  const {
    amigo,
    urlAPI,
    llamadaAPI,
    toggleEditando,
    setNombre,
    setApellido,
    setValoracion,
    setIdParaEditar,
  } = props;
  // delete request
  const eliminarAmigo = useCallback(async () => {
    const resp = await fetch(urlAPI + amigo.id, { method: "DELETE" });
    llamadaAPI();
  }, [amigo.id, llamadaAPI, urlAPI]);

  const llenarFormEditar = () => {
    setNombre(amigo.nombre);
    setApellido(amigo.apellido);
    setValoracion(amigo.valoracion);
    setIdParaEditar(amigo.id);
    toggleEditando();
  };

  const cuentaEstrellas = () => {
    if (amigo.valoracion === 0) {
      return;
    } else if (amigo.valoracion === 1) {
      return <FaStar />;
    } else if (amigo.valoracion === 2) {
      return (
        <span>
          <FaStar />
          <FaStar />
        </span>
      );
    } else if (amigo.valoracion === 3) {
      return (
        <span>
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
      );
    } else {
      return (
        <span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
      );
    }
  };

  return (
    <li className="col-4 mt-4">
      <ul className="articulo-amigo list-unstyled p-3">
        <li className="propiedad-amigo">Nombre: {amigo.nombre} </li>
        <li className="propiedad-amigo">Apellido: {amigo.apellido}</li>
        <li className="propiedad-amigo">Valoración: {cuentaEstrellas()}</li>
        <li className="funciones-amigo">
          <i>
            <FaPencilAlt onClick={llenarFormEditar} />
          </i>
          <i>
            <FaTimes onClick={eliminarAmigo} />
          </i>
        </li>
      </ul>
    </li>
  );
};

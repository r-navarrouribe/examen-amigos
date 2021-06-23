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
    setValoracion(amigo.setValoracion);
    setIdParaEditar(amigo.id);
    toggleEditando();
  };

  return (
    <li className="col-4 mt-4">
      <ul className="articulo-amigo list-unstyled p-3">
        <li className="propiedad-amigo">Nombre: {amigo.nombre} </li>
        <li className="propiedad-amigo">Apellido: {amigo.apellido}</li>
        <li className="propiedad-amigo">
          Valoración: <FaStar />
        </li>
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

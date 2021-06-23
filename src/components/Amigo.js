import { FaPencilAlt, FaStar, FaTimes } from "react-icons/fa";

export const Amigo = (props) => {
  const { amigo } = props;
  return (
    <li className="col-4 mt-4">
      <ul className="articulo-amigo list-unstyled p-3">
        <li className="propiedad-amigo">Nombre: {amigo.nombre} </li>
        <li className="propiedad-amigo">Apellido: {amigo.apellido}</li>
        <li className="propiedad-amigo">
          Valoración: <FaStar />
        </li>
        <li className="funciones-amigo">
          <span>
            <FaPencilAlt />
          </span>
          <span>
            <FaTimes />{" "}
          </span>
        </li>
      </ul>
    </li>
  );
};

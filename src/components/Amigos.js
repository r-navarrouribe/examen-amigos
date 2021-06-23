import { Amigo } from "./Amigo";

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

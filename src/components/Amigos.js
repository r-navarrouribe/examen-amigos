import { Amigo } from "./Amigo";

export const Amigos = (props) => {
  const { arrayAmigos, urlAPI, llamadaAPI } = props;
  return (
    <ul className="row list-unstyled">
      {arrayAmigos.map((amigo) => (
        <Amigo
          key={amigo.id}
          amigo={amigo}
          urlAPI={urlAPI}
          llamadaAPI={llamadaAPI}
        />
      ))}
    </ul>
  );
};

import { Amigo } from "./Amigo";

export const Amigos = (props) => {
  const { arrayAmigos } = props;
  return (
    <ul className="row list-unstyled">
      {arrayAmigos.map((amigo) => (
        <Amigo key={amigo.id} amigo={amigo} />
      ))}
    </ul>
  );
};

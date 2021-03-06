import PropTypes from "prop-types";

export const Cabecera = (props) => {
  const { arrayAmigos } = props;
  return (
    <header className="cabecera row">
      <h1 className="col">Gestión de mis {arrayAmigos.length} amigos</h1>
    </header>
  );
};

Cabecera.propTypes = {
  arrayAmigos: PropTypes.array.isRequired,
};

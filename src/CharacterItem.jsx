
import PropTypes from 'prop-types'; // Importa PropTypes

const CharacterItem = ({ character, onDelete }) => {
  return (
    <div>
      <p>{character.name}</p>
      <button onClick={() => onDelete(character.id)}>Eliminar</button>
    </div>
  );
};

// Agrega la validación de los props con PropTypes
CharacterItem.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    // Agrega otras propiedades aquí según la estructura del objeto character
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CharacterItem;

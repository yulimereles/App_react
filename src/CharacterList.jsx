
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://api.disneyapi.dev/characters')
      .then(response => {
        setCharacters(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDelete = (id) => {
    const updatedCharacters = characters.filter(character => character.id !== id);
    setCharacters(updatedCharacters);
  };

  return (
    <div>
      {characters.map(character => (
        <CharacterItem
          key={character.id}
          character={character}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default CharacterList;

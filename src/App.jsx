import { PersonajeCard } from './components/card';
import { PersonajeContext } from './context/Context';
import { useContext } from 'react';
function App() {
  const personajeContext = useContext(PersonajeContext)
  const { handleSubmit, personaje } = personajeContext

  return (
    <div className='container'>
      <button className='btn btn-info' onClick={handleSubmit}>
        Cargar Personajes
      </button>

      {
        personaje && personaje.length > 0 ? (
          <div className='row justify-content-center'>
            {personaje.map((personaje) => (
              <PersonajeCard key={personaje.name} personaje={personaje} />
            ))}
          </div>
        ) : (
          <h1>No hay personaje</h1>
        )
      }
    </div>
  );
}

export default App;
import  { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { PersonajeContext } from '../context/Context';

export const PersonajeCard = ({ personaje }) => {
    const personajeContext = useContext(PersonajeContext);
    const { handleDelete } = personajeContext;

    useEffect(() => {
        fetch(personaje.url)
            .then(res => res.json())
            .then(data => setPersonaje(data));
    }, [personaje]);

    return (
        <section className="col-2 card border rounded-3 shadow" style={{ width: '18rem' }}>
            <img src={personaje.sprites?.front_default} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <button id={personaje.name} onClick={handleDelete} className='btn btn-danger'>Delete</button>
                </div>
        </section>
    )
}

PersonajeCard.propTypes = {
    personaje: PropTypes.shape({
        url: PropTypes.string.isRequired,
        sprites: PropTypes.shape({
            front_default: PropTypes.string.isRequired
        }),
        name: PropTypes.string.isRequired
    }).isRequired
};


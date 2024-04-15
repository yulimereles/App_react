import  { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const PersonajeContext = createContext();

export const PersonajeProvider = ({ children }) => {

    const [personajesDisney, setPersonajesDisney] = useState([]);
    const [personajeDisney, setPersonajeDisney] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://api.disneyapi.dev/character')
            .then(res => res.json())
            .then(data => setPersonajesDisney(data.results));
    };

    const handleDelete = (e) => {
        const name = e.target.id;
        setPersonajesDisney(personajesDisney.filter(personaje => personaje.name !== name));
    };


    return (
        <PersonajeContext.Provider value={{ handleSubmit, personajesDisney, setPersonajesDisney, personajeDisney, setPersonajeDisney, handleDelete }}>
            {children}
        </PersonajeContext.Provider>
    )
}
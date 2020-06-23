import React, { useEffect, useState } from 'react';

import PokemonList from '../components/PokemonList';

const PokemonListContainer = () => {
    const [fetchStatus, updateFetchStatus] = useState('IDLE'); // 'STARTED', 'SUCCEED', 'FAILED'
    const [fetchError, setFetchError] = useState(null);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        updateFetchStatus('STARTED');

        fetch('https://serene-everglades-84644.herokuapp.com/pokemon')
            .then(response => response.json())
            .then(data => {
                setPokemonList(data);
                updateFetchStatus('SUCCEED');
            })
            .catch(err => {
                setFetchError(err.message);
                updateFetchStatus('FAILED');
            })
    }, []);

    return (
        <PokemonList
            fetchStatus={fetchStatus}
            pokemonList={pokemonList}
            fetchError={fetchError}
        />
    )
};

export default PokemonListContainer;
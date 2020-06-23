import React from 'react';

const PokemonList = (props) => {
    const { fetchStatus, pokemonList, fetchError } = props;

    return (
        <div>
            {fetchStatus === 'IDLE' && (
                <div>
                    wait for it...
                </div>
            )}

            {fetchStatus === 'STARTED' && (
                <div>
                    wait for it...
                </div>
            )}

            {fetchStatus === 'SUCCEED' && (
                <div className='pokemon-list'>
                    <pre>
                        {pokemonList.map(pokemon => (
                            <div>
                                {pokemon.name}
                            </div>
                        ))}
                    </pre>
                </div>
            )}

            {fetchStatus === 'FAILED' && (
                <div>
                    Something went wrong.
                    <pre>
                        {fetchError}
                    </pre>
                </div>
            )}

        </div>
    )
};

export default PokemonList;
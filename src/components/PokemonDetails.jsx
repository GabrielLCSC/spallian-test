import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPokemonDetails } from '../api';

function PokemonDetails() {
    const { pokemonName } = useParams();
    const { data, error, isLoading } = useQuery(['pokemonDetails', pokemonName], () => fetchPokemonDetails(pokemonName));


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const hpStat = data.stats.find((stat) => stat.stat.name === 'hp');

    return (
        <div>
            <h2 className='title-home'>Détails du pokémon</h2>
            <div className="card-placement">
                
                <div className='card-details'>
                    <h2>{data.name}</h2>
                    
                    

                    <img src={data.sprites.front_default} alt={`${data.name} sprite`} />
                    <div className="details">
                        <p>Height : {data.height}</p>
                        <p>Type(s) : {data.types.map((type) => type.type.name).join(', ')}</p>
                        <p>HP : {hpStat.base_stat}</p>
                    </div>
                    <div className='btns'>
                    <button className='return-btn'><Link to={`/`}>Retour</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;

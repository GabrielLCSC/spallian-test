import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchPokemonDetails } from '../api';
import './PokemonDetails.css';

function PokemonDetails({ addFavorite, favorites }) {

    const { pokemonName } = useParams();

    const { data, error, isLoading } = useQuery(['pokemonDetails', pokemonName], () => fetchPokemonDetails(pokemonName));

    const handleLikeClick = () => {
        if (!favorites.some(favorite => favorite.id === data.id)) {
            addFavorite(data);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    const hpStat = data.stats.find((stat) => stat.stat.name === 'hp');

    return (
        <div>
            <Link className='fav-mobile' to={`/likes`}>Favoris</Link>
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
                        <button className='like-btn' onClick={handleLikeClick}>Like</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PokemonDetails;
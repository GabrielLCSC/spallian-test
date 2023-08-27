import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchPokemonList } from '../api';
import { Link } from 'react-router-dom';
import './PokemonList.css';


function PokemonList() {
    const { data, error, isLoading } = useQuery('pokemonList', fetchPokemonList);
    const [searchTerm, setSearchTerm] = useState('');


    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    function getPokemonImage(id) {
        return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
    }

    return (
        <div className='PokemonList'>
            <input
            type="text"
            placeholder="Rechercher ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2 className='title-home'>Liste de pokémons</h2>
        <ul className='card-list'>
            {data
            .filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
            .map((pokemon) => (
                <Link to={`/pokemon/${pokemon.name}`}>
                <div className="card">
                    <li key={pokemon.name}>
                <a className='names' href="#">{pokemon.name}
                    <img src={getPokemonImage(pokemon.id)} alt={pokemon.name} /></a>
                    
                
                </li>
                </div>
                </Link>
            ))}
        </ul>
        </div>
    );
}

export default PokemonList;

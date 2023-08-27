import React from 'react';


function PokemonLikes({ favorites, removeFavorite }) {
    if (favorites.length === 0) {
        return (
            <div>
                <h2 className='fav-title'>Vos coups de cœur</h2>
                <p className='empty'>Vous n'avez encore aucun pokémon favori !</p>
            </div>
        );
    }
    return (
        <div>
            <h2 className='fav-title'>Vos coups de cœur</h2>
            <ul className='cardLikes-list'>
                {favorites.map((favorite) => (
                    <div className="cardLikes">
                        <li key={favorite.name}>
                        <h3>{favorite.name}</h3>
                        <img src={favorite.sprites.front_default} alt={`${favorite.name} sprite`} />
                        <p>Types: {favorite.types.map((type) => type.type.name).join(', ')}</p>
                        <button onClick={() => removeFavorite(favorite)}>X</button>
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default PokemonLikes;

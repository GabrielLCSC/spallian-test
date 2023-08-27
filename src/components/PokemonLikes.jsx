import React from 'react';


function PokemonLikes({ favorites }) {

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
                    </li>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default PokemonLikes;

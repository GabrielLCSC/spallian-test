import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import PokemonLikes from './components/PokemonLikes';
import './styles.css'

function App() {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (pokemon) => {
        setFavorites((prevFavorites) => [...prevFavorites, pokemon]);
    };

    const removeFavorite = (pokemon) => {
        setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav !== pokemon));
    };

    return (
        <Router>
            <div className="App">
                <header>
                    <nav>
                        <img src={require('./images/logo.png')} alt="PokeAPI" />
                        <h1>PokeSearch</h1>
                        <Link className='fav' to={`/likes`}>Favoris</Link>
                    </nav>
                </header>
                <Routes>
                    <Route path="/" element={<PokemonList />} />

                    <Route path="/pokemon/:pokemonName" element={<PokemonDetails 
                    addFavorite={addFavorite} favorites={favorites} />} />

                    <Route path="/likes" element={<PokemonLikes favorites={favorites} 
                    removeFavorite={removeFavorite} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
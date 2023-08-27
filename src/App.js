import PokemonList from './components/PokemonList';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './styles.css'

function App() {

    return (
        <Router>
            <div className="App">
            <header>
                    <nav>
                        <img src={require('./images/logo.png')} alt="PokeAPI" />
                        <h1>PokeSearch</h1>
                    </nav>
                </header>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemon/:pokemonName" element={<PokemonDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

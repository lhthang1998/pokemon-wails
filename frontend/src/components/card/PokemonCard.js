import React, { FunctionComponent } from 'react'
import './PokemonCard.css'

const PokemonCard: FunctionComponent = ({ pokemon }) => {
    return (
        <div className="myCard">
            <img src={pokemon.image} width="100px"></img>
            <strong>{pokemon.name.toUpperCase()}</strong>
        </div>
    );
}

export default PokemonCard;
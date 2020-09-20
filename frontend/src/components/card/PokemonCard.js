import React, { FunctionComponent } from 'react'
import { Card } from 'react-bootstrap'
import './PokemonCard.css'

const PokemonCard: FunctionComponent = ({ pokemon }) => {
    return (
        <div className="myCard">
            <div className="row" className="headerCard">
                <strong className="headerTitle">{pokemon.name.toUpperCase()}</strong>
                <strong className="headerId">#{pokemon.id}</strong>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div style={{margin:'5px',flex:2}} >
                    <img src={pokemon.image} width='100px' height='100px'></img>
                </div>
                <div style={{margin:'5px',flex:5}} >
                    Here is properties
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;
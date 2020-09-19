import React, { FunctionComponent } from 'react'
import './PokemonCard.css'

const PokemonCard: FunctionComponent = ({ pokemon }) => {
    return (
        <div className="myCard">
            <div className="row">
                <div className="col col-xs-4">
                    <img src={pokemon.image} width="100px" height="100px" style={{ padding: '5px' }}></img>
                </div>
                <div className="col col-xs-7" >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="headerCard">
                            <strong >{pokemon.name.toUpperCase()}</strong>
                            <strong >#{pokemon.id}</strong>
                        </div>
                        <div>SSSSSSSSSSSSSSSSSSSSS</div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default PokemonCard;
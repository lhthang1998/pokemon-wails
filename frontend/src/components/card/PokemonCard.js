import React, { FunctionComponent } from 'react'
import { Card } from 'react-bootstrap'
import './PokemonCard.css'

const PokemonCard: FunctionComponent = ({ pokemon }) => {
    return (
        <Card className="myCard">
            <Card.Header className="headerCard">
                <strong>{pokemon.name.toUpperCase()}</strong>
                <strong>#{pokemon.id}</strong>
            </Card.Header>
            <Card.Body>
                <div className="row">
                    <div className="col col-xs-4">
                        <img src={pokemon.image} width='100px' height='100px'></img>
                    </div>
                    <div className="col col-xs-8">

                    </div>
                </div>
            </Card.Body>
        </Card>
    );
}

export default PokemonCard;
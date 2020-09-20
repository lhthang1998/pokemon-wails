
import React, { FunctionComponent } from 'react'
import './Type.css'

import { TiChevronLeft, TiChevronRight } from 'react-icons/ti/index'

const TypeCard: FunctionComponent = ({ pokemon, type }) => {

    var bgColor = 'red';
    var c = 'white';

    const id = pokemon.id + type.name;
    if (type.name === 'grass' || type.name === 'bug') {
        bgColor = '#91e600';
        c = 'black';
    }
    if (type.name === 'fire') {
        bgColor = 'red';
    }
    if (type.name === 'ghost') {
        bgColor = 'red';
    }
    if (type.name === 'water') {
        bgColor = '#12baf4';
    }
    if (type.name === 'flying') {
        bgColor = '#b3b3b3';
        c = 'black';
    }
    if (type.name === 'poison') {
        bgColor = '#cc33ff';
    }
    if (type.name === 'normal') {
        bgColor = '#8c8c8c';
    }
    if (type.name === 'electric') {
        bgColor = '#e6e600';
        c = 'black';
    }
    if (type.name === 'ground') {
        bgColor = '#b38f00';
    }
    if (type.name === 'fighting') {
        bgColor = '#e67300';
    }
    if (type.name === 'fairy') {
        bgColor = '#ff4da6';
    }
    if (type.name === 'psychic') {
        bgColor = '#ff1a75';
    }
    if (type.name === 'rock') {
        bgColor = '#cccc00';
    }
    if (type.name === 'steel') {
        bgColor = '#c2c2a3';
        c = 'black';
    }
    if (type.name === 'dragon') {
        bgColor = '#cccc00';
    }
    if (type.name === 'ice') {
        bgColor = '#cccc00';
    }
    if (type.name === 'dark') {
        bgColor = '#cccc00';
    }
    if (type.name === 'unknown') {
        bgColor = '#cccc00';
    }
    if (type.name === 'shadow') {
        bgColor = '#cccc00';
    }
    return (
        <div key={id} className="typeCard">
            <small className="tile" style={{ backgroundColor: bgColor, color: c }}>{type.name}</small>
        </div>
    );
}

export default TypeCard;
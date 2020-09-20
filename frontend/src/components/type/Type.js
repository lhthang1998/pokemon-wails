
import React, { FunctionComponent } from 'react'
import './Type.css'

import { TiChevronLeft, TiChevronRight } from 'react-icons/ti/index'

const TypeCard: FunctionComponent = ({ pokemon, type }) => {

    var bgColor = 'red';
    var c = 'white';
    var bg = '';

    const id = pokemon.id + type.name;
    if (type.name === 'grass') {
        bgColor = '#9bcc50';
        c = '#212121';
    }
    if (type.name === 'bug'){
        bgColor = '#009900';
    }
    if (type.name === 'fire') {
        bgColor = '#fd7d24';
    }
    if (type.name === 'ghost') {
        bgColor = '#7b62a3';
    }
    if (type.name === 'water') {
        bgColor = '#4592c4';
    }
    if (type.name === 'flying') {
        bg = 'linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)';
        bgColor = '#b3b3b3';
        c = '#212121';
    }
    if (type.name === 'poison') {
        bgColor = '#b97fc9';
    }
    if (type.name === 'normal') {
        bgColor = '#a4acaf';
    }
    if (type.name === 'electric') {
        bgColor = '#eed535';
        c = '#212121';
    }
    if (type.name === 'ground') {
        bg= 'linear-gradient(180deg, #f7de3f 50%, #ab9842 50%)';
        bgColor = '#f7de3f';
        c = '#212121';
    }
    if (type.name === 'fighting') {
        bgColor = '#d56723';
    }
    if (type.name === 'fairy') {
        bgColor = '#fdb9e9';
        c = '#212121';
    }
    if (type.name === 'psychic') {
        bgColor = '#f366b9';
    }
    if (type.name === 'rock') {
        bgColor = '#a38c21';
    }
    if (type.name === 'steel') {
        bgColor = '#9eb7b8';
        c = '#212121';
    }
    if (type.name === 'dragon') {
        bgColor = '#53a4cf';
        bg= 'linear-gradient(180deg, #53a4cf 50%, #f16e57 50%)';
    }
    if (type.name === 'ice') {
        bgColor = '#51c4e7';
    }
    if (type.name === 'dark') {
        bgColor = '#707070';
    }
    if (type.name === 'unknown') {
        bgColor = '#cccc00';
    }
    if (type.name === 'shadow') {
        bgColor = '#cccc00';
    }
    return (
        <div key={id} className="typeCard">
            {(type.name!=='ground' && type.name!=='flying' && type.name!=='dragon') &&<small className="tile" style={{ backgroundColor: bgColor, color: c }}>{type.name}</small>}
            {(type.name==='ground' || type.name==='flying' || type.name==='dragon') &&<small className="tile" style={{ backgroundColor: bgColor, color: c, background:bg}}>{type.name}</small>}
        </div>
    );
}

export default TypeCard;
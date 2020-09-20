import React, { FunctionComponent } from 'react'
import PokemonCard from '../card/PokemonCard';

const PokemonList: FunctionComponent = ({ pokemons, loading }) => {

    console.log(pokemons);
    // const pkms = [];
    // while (pokemons.length) {
    //     pkms.push(pokemons.splice(0, itemPerRow))
    // }

    // console.log(pkms);

    // const table = pkms.map((pkm, i) => (
    //     <div className="row" key={i}>
    //         {pkm.map((item, index) => (
    //             <div key={i + index.toString()} style={{ width: '50px', height: '50px', backgroundColor: 'green' }}></div>
    //         ))}
    //     </div>
    // ));

    // console.log('sssss', table)

    return (
        <>
           {pokemons.map(pkm=>(
            <div  key={pkm.id}  className="col col-md-4">
                <PokemonCard pokemon={pkm}></PokemonCard>
            </div>
        ))} 
        </>
    );
}

export default PokemonList
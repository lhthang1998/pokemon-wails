import {Spinner} from 'react-bootstrap'
import React, { FunctionComponent, useState, useEffect } from 'react'
import './Content.css'
import axios from 'axios'
import { Waypoint } from 'react-waypoint'
import PokemonList from '../pokemon/Pokemon'
import Pagination from '../pagination/Pagination'

const Content: FunctionComponent = () => {

  const ITEM_PER_PAGE = 15;
  const url = 'https://pokeapi.co/api/v2/pokemon?limit='+ITEM_PER_PAGE;

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUrl, setCurrentUrl] = useState(url);
  const [prevUrl, setPrevUrl] = useState();
  const [nextUrl, setNextUrl] = useState();

  useEffect(() => {
    loadPokemon();
  }, [currentUrl])


  const loadPokemon = function () {
    let cancel;
    setLoading(true);
    window.backend.fetchPokemons(currentUrl).then(
      res=>{
        setNextUrl(res.next);
        setPrevUrl(res.previous);
    
        setPokemons(res['pokemons']);
        setLoading(false);
      }
    );
    return ()=>cancel();
  }
  function goToNextPage() {
    setCurrentUrl(nextUrl);
  }

  function goToPrevPage() {
    setCurrentUrl(prevUrl);
  }
  return (
    <>
      <div className="content">
        {loading && <div style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}><Spinner animation="border" /></div>}
        {!loading &&
          <>
            <div className="row">
              <PokemonList pokemons={pokemons} loading={loading} itemPerRow='2'></PokemonList>
            </div>
            <Pagination next={nextUrl ? goToNextPage : null} previous={prevUrl ? goToPrevPage : null}></Pagination>
          </>}
      </div>
    </>
  );
}

export default Content
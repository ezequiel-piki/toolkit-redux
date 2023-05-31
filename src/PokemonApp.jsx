import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemons } from './features/pokemon/thunks';

const PokemonApp = () => {

  const dispatch = useDispatch();
  
  useEffect(()=>{
   dispatch(getPokemons());
  },[])
  
  return (
    <>
    <h1>Pokemon App</h1>
    <hr />
    <ul>
        <li>
          hola
        </li>
        <li>hola</li>
        <li>hola</li>
    </ul>
    </>
  )
}

export default PokemonApp
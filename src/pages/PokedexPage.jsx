import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import useFetch from '../hooks/useFetch'
import PokeCard from '../components/PokedexPage/PokeCard'
import SelectType from '../components/PokedexPage/SelectType'
import './styles/PokedexPage.css'
import { useNavigate } from 'react-router-dom'


const PokedexPage = () => {
  
  const trainer = useSelector( states => states.trainer ) 

  const [ pokemons , getPokemons, getTypePokemons ] = useFetch()
  
  const [namePoke, setNamePoke] = useState('');
  const [typeSelected, settypeSelected] = useState('allPokemons');

 
  useEffect( () => {

    if(typeSelected === 'allPokemons'){
      const url = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
      getPokemons(url);
    }else{

      getTypePokemons(typeSelected)
    }
    
    
  }, [typeSelected])


  const inputName = useRef()

  function captureName(e){
    e.preventDefault()
    setNamePoke(inputName.current.value.trim().toLowerCase())
  }

  function filterByName(poke){
    const filterName = poke.name.includes(namePoke)
    return filterName;
  }

  const navegate = useNavigate();
  function meHanCliekeado_goToHome(){
    navegate(`/`)
  } 


  return(
    <div>

      <header className='header__podedex'>

        <div className='header__contenedor'>
          <img onClick={meHanCliekeado_goToHome} src="img/pokedex.png" alt=""  />
        </div>
        <div className='header_down'></div>
        
      </header>

      <h1 className='title__pokedex'>Welcome <span className='name__trainer'> {trainer} </span>, here you will to fing your favorite pokemon.</h1>

      <form className='form__pokedex' onClick={captureName}>
        <input type="text" ref={inputName} placeholder='Find your favorite pokemon'/>
        <button>Search</button>
        <SelectType settypeSelected={settypeSelected}/>
      </form>


      <div className='container__cards'>
        {
         
         pokemons && pokemons.results.filter(filterByName).length === 0
         ? <h2 className='error_not_found'>Not Found Your Pokemon By name Error 404</h2>
         : (
          pokemons?.results.filter(filterByName).map( poke => (
            <PokeCard
              key={poke.url}
              poke={poke}
            />
          )))

        }
      </div>

    </div>
  )
}

export default PokedexPage
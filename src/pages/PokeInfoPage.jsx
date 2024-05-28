import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import CardFullinfo from '../components/PokeInfoPage/CardFullinfo'
import CardMovimients from '../components/PokeInfoPage/CardMovimients'
import './styles/PokeInfoPage.css'

const PokeInfoPage = () => {

  const { name } = useParams()
  const [pokemon, getPokemon] = useFetch()
  
  useEffect(()=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    getPokemon(url)
  }, [name]   )
  
  console.log("🚀 ~ PokeInfoPage ~ pokemon:", pokemon)

  const navegate = useNavigate();
  function meHanCliekeado_goToHome(){
    navegate(`/`)
  } 
  
  return (
    <article className='pageInfo'>

      <header className='header__podedex'>
        <div className='header__contenedor'>
          <img onClick={meHanCliekeado_goToHome} src="img/pokedex.png" alt=""  />
        </div>
        <div className='header_down'></div>
      </header>

      <CardFullinfo key={pokemon?.name}
        pokemon={pokemon}
      />

      <CardMovimients 
        key={pokemon?.name}
        pokemon={pokemon}
      />

    </article>
  )
}

export default PokeInfoPage
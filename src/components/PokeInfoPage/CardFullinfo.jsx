import React from 'react'
import './styles/CardFullinfo.css'

const CardFullinfo = ({pokemon}) => {

  return (
    <div className='fullInfo__container'>
        <header className='fullInfo__header'>
          <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>

        <div>

          <div className='fullInfo__title'>
            <span>{`#${pokemon?.id}`}</span>
            <h2>{pokemon?.name}</h2>
            <hr />
          </div>

          <ul className='fullInfo__peso_altura'>

            <li className='fullInfo__li'>
              <span className='fullInfo__li-label'>Peso</span>
              <span className='fullInfo__li-data'>{pokemon?.weight}</span>
            </li>

            <li className='fullInfo__li'>
              <span className='fullInfo__li-label'>Altura</span>
              <span className='fullInfo__li-data'>{pokemon?.height}</span>
            </li>
          </ul>

          <div className='fullInfo__tipos_habilities'>

              <div className='fullInfo__tipos'>
                <p className='title_mediun'>Tipo</p>
                <ul className='data_mediun'>
                  {
                    pokemon?.types.map(type => (
                      <li key={type.type.url} >{type.type.name}</li>
                    ))
                  }
                </ul>
              </div>

              <div className='fullInfo__habilities'>
                <p className='title_mediun' >Habilidades</p>
                <ul className='data_mediun'>
                  {
                      pokemon?.abilities.map(ability => (
                        <li key={ability.ability.url} >{ability.ability.name}</li>
                      ))
                  }
                </ul>
              </div>

          </div>
          


        </div>

        <div className='cardFullInfo__stats'>
            <header>
              <h2>Stats</h2>
              <hr />
            </header>

            <div>
              <ul>

                {
                    pokemon?.stats.map(stat => (
                      <li className='stat__item' key={stat.stat.url}>
                        <div className='stat__data'>
                          <span className='stat__label'>{stat.stat.name}</span>
                          <span>{stat.base_stat}/150</span>
                        </div>
        
                        <div>
                          <span className='stat__barra' style={{ width: `${stat.base_stat}%` }}></span>
                        </div>
                      </li>
                    ))
                }

              </ul>
            </div>
        </div>

    </div>
  )
}

export default CardFullinfo



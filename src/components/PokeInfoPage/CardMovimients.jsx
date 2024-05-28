import React from 'react'
import './styles/CardMovimients.css'

const CardMovimients = ({pokemon}) => {


  return (
    <div className='move__container'>
        <header className='move__header'>
            <h2>Movements</h2>
            <hr />
        </header>
        <div className=' body__movimients'>
            {
                pokemon?.moves.map((move, index ) => {

                    //profe en figma solo vi 24 elementos
                    if(index <= 24 ){
                        return (
                            <span className='move__item'>{move.move.name}</span>                
                        )
                    }
                })
            }
        </div>
    </div>
  )
}

export default CardMovimients
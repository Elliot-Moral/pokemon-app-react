import React, { useRef } from 'react'
import { setTrainer } from '../store/slices/trainer.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './styles/HomePage.css';

const HomePage = () => {
  
  //## Las actions de los esatados globales no se pueden despachar solas, necensitan una ayudita! pasa eso se usa useDispatch()
  const dispatch = useDispatch()

//### como accedo a la variable local si ya se guarda?, => pues con el useSelector que reseibe una funcallback
//## use selector nos permite acceder a todos los estados globales. y se debe retornar el estado deado
  const trainer = useSelector( states => states.trainer )
  // console.log("🚀 ~ HomePage ~ trainer:", trainer)

  
  const inputTrainer = useRef()
  
  const navegate = useNavigate()


  function capturarNameTrainer(e) {
    e.preventDefault();
    
    //## Estado global
    dispatch(setTrainer(inputTrainer.current.value.trim())) 

    navegate('/pokedex')
  }
  
  

  return (
    <div className='container__homepague' >

      <img className='img_pokedex' src="img/pokedex.png" alt="" />

      <div className='content'>
        <h1>Hi, Trainer!</h1>
        <p> if you want to find your favorite pokemon please give me your trainer name</p>

        <form className='form' onSubmit={capturarNameTrainer}>
          <input type="text" placeholder='Your Name Trainer' ref={inputTrainer} />
          <button>Start Now Trainer!!</button>
        </form>
      </div>


      <div className='footer'>
        <div className='footer_up'></div>
        <div className='footer_down'></div>
      </div>

    </div>
  )
}

export default HomePage
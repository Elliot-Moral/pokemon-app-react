import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/SelectType.css'

const SelectType = ({settypeSelected}) => {


   const [types, getTypes ] = useFetch();
   
   useEffect(()=>{
       const url = 'https://pokeapi.co/api/v2/type?offset=0&limit=100';
       getTypes(url)
    }, [])


    function valueSelected(e){
        settypeSelected(e.target.value) 
    }

    // console.log("🚀 ~ SelectType ~ type:", types?.results)
    
  return (


    <select className='select__type' name="" id="" onChange={valueSelected}>

    <option value="allPokemons">All pokemons</option> 

    {
        types?.results.map(type => (
            <option key={type.name} value={type.url} > {type.name}</option>            
        ))
    }
    </select>
  )
}

export default SelectType
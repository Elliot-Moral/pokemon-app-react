import axios from "axios"
import { useState } from "react"

const useFetch = () => {
  
    const [ response, setResponse] = useState()

    function getApi(url){
        axios.get(url).then(res => setResponse(res.data) ).catch(err => console.log(err))
    }

    function getTypeApi(url){
        axios.get(url).then(res => {

            const obj = {
                //trasnfromar la respuestar para que se paresca lo de arriba a nivel de funcionaliada.
                results: res.data.pokemon.map(poke => poke.pokemon)
            }

            setResponse(obj);
            
        } ).catch(err => console.log(err))
    }

    return [response, getApi, getTypeApi];
}

export default useFetch
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch"
import { useNavigate } from "react-router-dom";
import './styles/pokecard.css'

const PokeCard = ({poke}) => {

    const [ infoPoke , getInfoPoke ] = useFetch();

    const navegate = useNavigate();
    
    
    useEffect(() => {
        
        const url = poke.url;
        getInfoPoke(url)
    }, [])
    
    function meHanCliekeado(){
        navegate(`/pokemon/${infoPoke?.name}`)
    }

    // console.log("🚀 ~ PokeCard ~ infoPoke:", infoPoke)
 
  return (
    <article className={`poke__container border_${infoPoke?.types[0].type.name}`} onClick={meHanCliekeado}> 
        <header className={`header bg_${infoPoke?.types[0].type.name}`} >
            <img src={infoPoke?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="poke__body">
            <h3 className={`poke__name text_${infoPoke?.types[0].type.name}`} >{infoPoke?.name}</h3>
            <p className="poke__type__label" >{infoPoke?.types[0].type.name}</p>
            <ul className="poke__types">{infoPoke?.types.map( infoType => (
                //## No se necesita ? una ves se haya puesto antes.
                <li className="poke__types__item" key={infoType.type.url} >{infoType.type.name}</li>
            ))}</ul>
            <hr className="poke__hr"/>

            <ul className="poke__stats">
                
                {
                    infoPoke?.stats.map( statsInfo => (
                        <li className="poke__stats__item" key={statsInfo.stat.url} >
                            <span className="poke__stats__label" >{statsInfo.stat.name}</span>
                            <span className={`poke__stats__value text_${infoPoke?.types[0].type.name}`}  >{ statsInfo.base_stat}</span>
                        </li>
                     ))
                }
            
            </ul>

        </section>
    </article>
  )
}

export default PokeCard
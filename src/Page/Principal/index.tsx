import './style.css';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Results } from '../../types/results';
import CardPokemon from '../../components/CardPokemon';
import { Link } from 'react-router-dom';

const Principal = () => {

    const [pokemon, setPokemons] = useState<Results[]>([]);

    const [filter, setFilter] = useState('');
    const page = useRef(20);

      useEffect(() => {        
        const endpoint = "https://pokeapi.co/api/v2/pokemon"
        axios.get(`${endpoint}?limit=${page.current}&offset=0`)
        .then(response =>{
            setPokemons(response.data.results)
        }) 
      }, []);  
      
      useEffect(() => {      
        /// Infinity Scroll Implementado  
        window.addEventListener('scroll', (() => {
          if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
            const endpoint = "https://pokeapi.co/api/v2/pokemon"
            axios.get(`${endpoint}?limit=${page.current += 10}&offset=0`)
            .then(response =>{
                setPokemons(response.data.results)
            }) 
          }
        }))
      }, []); 

      const searchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
      }
      let dataSearch = pokemon.filter(item=>{
        
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
          )
      });    
      
      
    return(
        <>
            <section className="py-4 container">
            <div className="conteudo row">

            <div className='searchDiv col-12 mb-5 d-flex'>
                  <div className='divbotao'>
                  <Link to="/botaocarregar"><button className='buttonPage'>BPage</button></Link>
                  </div>
                    <div className='mb-3 col-4 mx-auto'>
                        <h1>Search</h1>
                        <input 
                            type="text"
                            className='searchBar from-control'
                            value={filter}
                            onChange={searchText.bind(this)}
                        />
                  </div>  
                  <div className='divbotao'></div>                  
                </div>
                {dataSearch.map((item, index)=>{  
                    return(
                      <div className='searchPoke row col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                        <CardPokemon pokemon={item} key={index} name={item.name} />
                      </div>
                    )                
                })}
            </div>           
        </section>
        
        </>
        
    )
    
}

export default Principal;
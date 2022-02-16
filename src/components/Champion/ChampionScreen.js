import React from 'react'
import { useParams } from 'react-router-dom'
import { useChampFetch } from '../../hooks/useChampFetch';
import { ChampionCard } from './ChampionCard';

export const ChampionScreen = () => {


    const {champId} = useParams();
    const url = `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/es_ES/champion/${champId}.json`
    const champ = useChampFetch(url, champId);


  return (
        <div className='container'>
        
           { champ &&  <ChampionCard champ = {champ}/>} 
        
        </div>
  )


}

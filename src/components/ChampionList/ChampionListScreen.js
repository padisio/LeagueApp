import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import { ChampionListItem } from './ChampionListItem';

export const ChampionListScreen = () => {

  const url = `http://ddragon.leagueoflegends.com/cdn/12.4.1/data/es_ES/champion.json`;
  const list = useFetch(url);
  // list && console.log(list.data.Aatrox.name)
  
  return (<div className='container'>
      {
      list && <>
      
        {

         list.map(champ => <ChampionListItem key={champ.id} champ = {champ}/>
         
         )
          

        }
      
      </>
    }

  </div>
  )
}

import React from 'react'
import { SkillsScreen } from './SkillsScreen';
import { SkinCarousel } from './SkinCarousel';
import { StatsBar } from './StatsBar';

export const ChampionCard = ({ champ }) => {
    console.log(champ)

    const imgCuadrada = `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/${champ.image.full}`
    return (
        <>
            <div className='row d-flex justify-content-between mt-2 mb-2'>

                <div className='col-6 row'>

                    <div className='col-2'>
                        <img className='iconoChamp' src={imgCuadrada}  alt={champ.name}/>
                    </div>

                    <div className='col-10 '>
                        <h2>{champ.name}</h2>
                        <h5>{champ.title}</h5>
                    </div>

                </div>

                <div className='col-6'>
                    <p className='text-end'>{champ.tags.map(tag => <span key={tag} className='mx-1 champCardTag'>{tag}</span>)}</p>
                </div>

            </div>


            <hr />

            <div className='row'>
                <div className='col-6 loreArea'>
                    <h5>Historia:</h5>
                    <p>{champ.lore}</p>

                </div>
                <div className='col-6'>

                    <SkinCarousel champ={champ} />

                </div>
            </div>


            <div className='row mt-3'>

                <div className='col-10'>       
                
                    <SkillsScreen skills = {champ.spells} pasiva = {champ.passive}/>
               
                </div>



                <div className='col-2'>
                    <div className='mt-5'>
                        <div className='mb-2 pb-1 text-end'>Ataque: <StatsBar num={champ.info.attack}/></div>
                        <div className='mb-2 pb-1 text-end'>Defensa: <StatsBar num = {champ.info.defense}/></div>
                        <div className='mb-2 pb-1 text-end'>Magia: <StatsBar num = {champ.info.magic}/></div>
                        <div className='mb-2 pb-1 text-end'>Dificultad: <StatsBar num = {champ.info.difficulty}/></div>
                    </div>
                    <div className='mt-4 statsCont mb-3'> 
                        <h5>Stats:</h5>
                        <p>HP: {champ.stats.hp}</p>
                        <p>MP: {champ.stats.mp}</p>
                        <p>Vel.Mov: {champ.stats.movespeed}</p>
                        <p>Armadura: {champ.stats.armor}</p>
                        <p>Rango: {champ.stats.attackrange}</p>
                        <p>Daño Atq: {champ.stats.attackdamage}</p>
                        <p>Vel Atq: {champ.stats.attackspeed}</p>
                    </div>
                    
                </div>


            </div>

        </>
    )
}

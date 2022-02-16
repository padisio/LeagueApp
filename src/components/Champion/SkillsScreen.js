import React from 'react'

export const SkillsScreen = ({ skills, pasiva }) => {
    console.log(skills)
    console.log(pasiva)

    const passiveUrlImg = `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/passive/`;
    const skillUrlImg = `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/`;


    return (<div className='fichaHabilidades'>
        <h3 className='mb-4'>Habilidades:</h3>

        <div className='skillCont'>
            <h5 className='mb-2 pt-3'>Pasiva</h5>
            <div className='row'>
                <div className='col-2 p-2'>
                    <img className='skillIcon img-thumbnail' src={passiveUrlImg + pasiva.image.full} />
                </div>
                <div className='col-10 '>
                    <h5>{pasiva.name}</h5>
                    <p>{pasiva.description}</p>
                </div>

            </div>
        <hr/>
        </div>

        {skills.map((skill, i) => {
            let tecla = '';
            i === 0 ?
                tecla = 'Q'
                :
                i === 1 ?
                    tecla = 'W'
                    :
                    i === 2 ?
                        tecla = 'E'
                        :
                        tecla = 'R';

            return <div className='skillCont'>
                <h5 className='mb-2'>{tecla}</h5>
                <div className='row'>
                    <div className='col-2 p-2'>
                        <img className='skillIcon img-thumbnail' src={skillUrlImg + skill.image.full} />
                    </div>
                    <div className='col-10 '>
                        <h5>{skill.name}</h5>
                        <p>{skill.description}</p>
                    </div>

                </div>
                {i < 3 && <hr/> }
            </div>

        })}





    </div>
    )
}

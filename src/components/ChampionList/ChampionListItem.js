import React from 'react'
import { Link } from 'react-router-dom';

export const ChampionListItem = ({ champ }) => {
    const champUrl = `campeon/${champ.id}`;
    const imgUrl = `http://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/`;
    const handleDifficult = (dif) => {
        switch (dif) {
            case 0:
            case 1:
            case 2:
            case 3:
                return 'easyClass'

            case 4:
            case 5:
            case 6:
            case 7:
                return 'mediumClass'
            case 8:
            case 9:
            case 10:
                return 'hardClass'
            default:
                break;
        }


    }
    return (<div className='row d-flex mt-5 fichaListado'>
        <div className='col-3'>
            {/* <img className='listChampImage' src={imgUrl + champ.image.full} /> */}
            <img className={handleDifficult(champ.info.difficulty)} src={imgUrl + champ.image.full} />
            <ul className='list-group ListChampionTagsCont'>
                {champ.tags.map(tag => <li className='list-group-item' key={tag}>{tag}</li>)}
            </ul>
        </div>
        <div className='col-9'>
            <h4>{champ.name}</h4>
            <p>{champ.title}</p>
            <hr />
            <p>{champ.blurb}</p>
            <div className='text-end align-self-end'>
                <Link to= {champUrl}>
                    <button className='listChampButton'>Ver mas</button>
                </Link>
            </div>
        </div>
    </div>
    )
}

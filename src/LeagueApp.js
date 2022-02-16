import React from 'react'
import { Link } from 'react-router-dom'
import { AppRouter } from './routers/AppRouter'

export const LeagueApp = () => {
  return (<div className='container'>

    <div className='row mt-3' >

    <img onClick={()=> <Link to="/"/>} className='logo col' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/256px-LoL_icon.svg.png?20201029024159'/>

    <h2 className='col'>LeagueApp</h2>

    </div>

    <hr/>
    <AppRouter/>
  </div>
  )
}

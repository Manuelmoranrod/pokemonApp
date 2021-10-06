import React from 'react'

import NavBar from '../NavBar/NavBar'
import ball from '../../assets/pokeballS.png'

const Header = () => {
  return (
    <header className="header">
      <div className="header--logo">
        <img src={ball} alt="pokeball"></img>
        <h1>PoKEMóN</h1>
      </div>
      <NavBar/>
    </header>
  )
}

export default Header


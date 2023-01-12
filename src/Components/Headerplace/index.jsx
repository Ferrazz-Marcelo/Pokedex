import React from 'react'
import Logo from '../Headerplace/pokemon-logo.png'

const index = () => {
  return (
    <header>
      <img  className="logoplace" src={Logo} alt="" />
      <input type="search" name="an" id="" />
    </header>
  )
}

export default index
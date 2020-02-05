import React from 'react'

import Logo from '../../../../assets/images/logo-pruden.png'
import './Header.css'

const Header = () => (
  <header className="Header">
    <img src={Logo} width="120" alt="Bossjob"/>
      {window.innerWidth >= 768 ?
          <text style={{fontSize:30, textAlign:'center', marginLeft:10, color:'white'}}>Performance Monitoring</text>
          :
          <text style={{fontSize:15, textAlign:'center', marginLeft:10, color:'white'}}>Performance Monitoring</text>
      }
  </header>
)

export default Header
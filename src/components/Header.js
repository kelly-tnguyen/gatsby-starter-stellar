import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Kelly Nguyen</h1>
        <p>I design and build user interfaces</p>
    </header>
)

export default Header

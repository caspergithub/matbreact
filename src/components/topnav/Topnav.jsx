import React from 'react'
import { Link } from 'react-router-dom'
import './Topnav.scss'
import headerimg from '../../assets/images/header.png'

function Topnav() {
    return (
        <div>
            <header>
                <img src={headerimg} alt="headerimg" className="headerimg" />
            </header>
            <nav>
                <Link to="/frontpage" className="topnavLink">Forside</Link>
                <Link to="/matblinks" className="topnavLink">matb links</Link>
                <Link to="/matbexamples" className="topnavLink">Matb exempler</Link>
            </nav>
        </div>
    )
}

export default Topnav

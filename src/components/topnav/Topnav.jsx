import React from 'react'
import { Link } from 'react-router-dom'
import './Topnav.scss'
import headerimg from '../../assets/images/MATBKogebogcropped.png'
import { FaHome } from 'react-icons/fa'
import { FaLink } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'

function Topnav() {
    return (
        <div>
            <header>
                <img src={headerimg} alt="headerimg" className="headerimg" />
            </header>
            <nav>
                <Link to="/frontpage" className="topnavLink"><FaHome /> Forside</Link>
                <Link to="/matblinks" className="topnavLink"><FaLink /> matb links</Link>
                <Link to="/matbexamples" className="topnavLink"><FaBook /> Matb exempler</Link>
            </nav>
        </div>
    )
}

export default Topnav

import React from 'react';
import Logo from '../../assets/img/AulaFlixLogo.png';
import './Menu.css';
import Button from '../components/Button';
//import ButtonLink from '../components/ButtonLink';

function Menu() {
    return(
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="AulaFlix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                 Novo Video
            </Button>
        </nav>
    );
}

export default Menu;
import React from 'react';
import './NavTab.css';

import { Link } from "react-scroll";

function NavTab() {
    return (
        <nav className='navtab'>
            <Link to='project' className='navtab__link' smooth={true} duration={700}
                type='button'>О проекте
            </Link>
            <Link to='techs' className='navtab__link' smooth={true} duration={700}
                type='button'>
                Технологии</Link>
            <Link to='about-me' className='navtab__link' smooth={true} duration={700}
                type='button'>
                Студент</Link>
        </nav>
    )
}

export default NavTab;
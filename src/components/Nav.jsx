import { Link, useLocation } from 'react-router-dom';
import React from 'react';

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <Link className={`nav-link ${currentPage === '/' ? 'active' : ''}`} to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${currentPage === '/About' ? 'active' : ''}`} to='/About'>About</Link>
                </li>
                <li className='nav-item'>
                    <Link className={`nav-link ${currentPage === '/Contact' ? 'active' : ''}`} to='/Contact'>Contact</Link>
                </li>
            </ul>
        </header>
    );
}

export default Nav;
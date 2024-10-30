import { useLocation } from 'react-router-dom';
import React from 'react';

function Header() {
    const currentPage = useLocation().pathname;

    return (
        <header>
            <h1>Living Waters Church</h1>
        </header>
    )
}

export default Header;
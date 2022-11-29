import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div>Logo</div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Sobre</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
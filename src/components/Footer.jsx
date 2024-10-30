import React from 'react';

const Footer = () => {
    const HandleIconClick = (url) => {
        window.open(url, '_blank');
    };

    return (
        <footer>
             <div className="container">
            <div className="footer-content">
                <h4>Contact Us</h4>
                <p>lwchurch@gmail.com</p>
                <p>(612)900-5629</p>
                <p>5314 E. Ardelle Ave Stockton, CA 95215</p>
            </div>
            <div className="footer-content">
                <h4>Links</h4>
                <ul className="list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Worship</a></li>
                    <li><a href="#">Sermons</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Forms</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-content">
                <h4>Ministries</h4>
                <ul className="list">
                    <li><a href="#">Womens</a></li>
                    <li><a href="#">Mens</a></li>
                    <li><a href="#">Youth</a></li>
                </ul>
                </div>
            <div className="footer-content">
                <h4>Follow Us</h4>
                <ul className="social-icons">
                <li><a href="https://www.facebook.com/groups/430540913789564"><i className='bx bxl-facebook-circle'></i></a></li>
                </ul>
            </div>
            </div>
        <div className="bottom-bar">
            <p>&copy; 2024 Living Waters Church. All rights reserved</p>
        </div>
        </footer>
    );
};

export default Footer;
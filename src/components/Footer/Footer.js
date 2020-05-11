import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="pa2">
            <a href="https://github.com/fabianvieri/decify" className="link">
                <FontAwesomeIcon icon={faGithub} className="f2 white" />
            </a>
        </footer>
    );
};

export default Footer;
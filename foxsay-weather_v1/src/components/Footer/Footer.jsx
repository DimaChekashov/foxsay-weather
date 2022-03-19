import React from 'react';

import './Footer.scss';

function Footer(){ 
    return (
        <div className="footer">
            <ul className="footer__list">
                <li><a href="https://career.habr.com/foxsayjs">DmitryChekashov</a></li>|
                <li><a href="https://github.com/DimaChekashov">GitHub</a></li>
            </ul>
        </div>
    )
}

export default Footer;
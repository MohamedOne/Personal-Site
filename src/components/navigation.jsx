import React from 'react';

const Navigation = (props) => {

    return (
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>

            <label htmlFor="navi-toggle" className="navigation__button">
                <span className="navigation__icon"></span>
            </label>

            <div className="navigation__background">&nbsp;</div>

            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>Mass Surveillance</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Story of Willpower</a></li>
                    <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>How many?</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navigation
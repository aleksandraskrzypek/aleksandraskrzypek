import React from 'react'
import "./Banner.css"
import "./proba.sass"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Banner() {

    return (
        <div className="banner" id="home">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        
            <div className="banner-center">
                <div className="banner-center-border">
                    <div className="banner-center-name">
                        <p>A</p><p>L</p><p>E</p><p>K</p><p>S</p><p>A</p><p>N</p><p>D</p><p>R</p><p>A</p>
                    </div>
                    <div className="banner-center-name">
                        <p>S</p><p>K</p><p>R</p><p>Z</p><p>Y</p><p>P</p><p>E</p><p>K</p>
                    </div>
                </div>
                <div className="banner-center-long">
                    <p>Zapraszam do zapoznania się z moim portfolio.</p>
                </div>
                <div className="banner-center-arrow">
                <a href="#aboutme"><p><KeyboardArrowDownIcon className="icon" fontSize="large"/></p></a>
                </div>
            </div>
        </div>
    )
}

export default Banner

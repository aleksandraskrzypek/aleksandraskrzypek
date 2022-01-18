import React, { useEffect, useState } from 'react'
import "./nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    

    return (
        <div className={`nav ${show && "nav-black"}`}>
            <ul>
                <li><a href="#contact" >KONTAKT</a></li>
                <li><a href="#portfolio">PORTFOLIO</a></li>
                <li><a href="#aboutme">O MNIE</a></li>
                <li><a href="#home">HOME</a></li>
            </ul>

        </div>
    )
}

export default Nav

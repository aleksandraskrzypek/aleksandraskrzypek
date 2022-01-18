import React from 'react'
import './contact.css'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="contact-content-mail">
                <p>Napisz do mnie na: <h1>aleksandraskrzypek97@gmail.com</h1></p>
            </div>
            <div className="contact-content-rest">
                <p>Tu mnie znajdziesz:</p>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/aleksandra-skrzypek-7575b2188/"><LinkedInIcon className="icon-contact"/></a><a href="https://github.com/aleksandraskrzypek"><GitHubIcon className="icon-contact"/></a>
                </div>
            </div>
        </div>
    )
}

export default Contact

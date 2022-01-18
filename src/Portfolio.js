import React from 'react'
import './portfolio.css'
import GitHubIcon from '@material-ui/icons/GitHub';

import weather from './img-pages/weatherapp.jpg'
import google from './img-pages/googleclone.jpg'
import netflix from './img-pages/netflixclone.jpg'
import quizapp from './img-pages/quizapp.jpg'
import todoapp from './img-pages/todoapp.jpg'
import norwegia from './img-pages/norwegia.jpg'
import shop from './img-pages/shop.jpg'
import clicked from './img-pages/clicked.jpg'
import hboclone from './img-pages/hbo-clone.jpg'
import weather2 from './img-pages/weathe-app-2.0.jpg'
import spotify from './img-pages/spotify1.jpg'

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfolio-text">
                <h1>Portfolio</h1>
            </div>
            <div className="portfolio-projects">
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={spotify} alt=""></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/spotify-clone"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Spotify clone</h1>
                        <p>Strona napisana w ramach nauki Next.js, wykorzystuje: Middleware, Spotify API, Tailwind, NextAuth, Recoil</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={weather2} alt="p"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/weather-app-2.0"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Weather App 2.0</h1>
                        <p>Aplikacja, która umożliwia sprawdzenie pogody w mieście, które nas najbardziej interesuje. Napisana w React'cie przy wykorzystaniu React Hook oraz API ze strony openweathermap.org. Ładniejsze css'y..</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={hboclone} alt=""></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/hbo-clone"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>HBO clone</h1>
                        <p>Klon platformy HBO, napisany przy pomocy projektu Netflix-clone. Wyświetla filmy oraz seriale z wybranych kategorii.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={shop} alt="shopapp"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/shop-app"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Shop App</h1>
                        <p>Aplikacja symulująca dodawanie produktów do koszyka, ponadto zlicza ona ceny poszczególnych ilości oraz sumę łączną.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={weather} alt="weatherapp"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://aleksandraskrzypek.github.io/weather-app/"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Weather App</h1>
                        <p>Aplikacja, która umożliwia sprawdzenie pogody w mieście, które nas najbardziej interesuje. Napisana w React'cie przy wykorzystaniu React Hook oraz API ze strony openweathermap.org.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={clicked} alt="clickedapp"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/clicked"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Clicked App</h1>
                        <p>Prosty clicked, po osiągnięciu określonej ilości warzyw bądź owoców pojawiąją się kolejne okienka z droższymi produktami.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={google} alt="googleclone"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/google-clone"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Google Clone</h1>
                        <p>Klon wyszukiwarki Google, projekt napisany w ramach nauki podstaw React'a z kanałem Clever Programmer. Pozwala wyszukać konkretne zagadnienie i przekierowywuje na wybraną stronę.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={netflix} alt="netflixclone"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/netflix-clone"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Netflix Clone</h1>
                        <p>Klon platfrormy streamingowej Netflix, projekt napisany w ramach nauki podstaw React'a z kanałem Clever Programmer. Pozwala przeszukiwać akutaulne trendy w konrketnych kategoriach oraz włącza zwiastuny filmów czy seriali, kóre akutalnie wyświetlają się użytkownikowi.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={quizapp} alt="quizapp"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/quizzapp"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Quizz App</h1>
                        <p>Aplikacja oparta na Uniwersum Harrego Pottera. Poprzez udzielenie odpowiedzi na kilkanaście pytań dopasowywuje użytkownika do jednego z czterech domów w Hogwarcie.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={todoapp} alt="todoapp"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><GitHubIcon className="icon-portfolio"/></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Todo App</h1>
                        <p>Aplikacja napisana w ramach rekrutacji. Umożliwia logowanie/rejestracje użytkownika do swojego profilu, a później przeglądanie swoich todo-list, dodawania ich, modyfikowanie.</p>
                    </div>
                </div>
                <div className="portfolio-project">
                    <div className="project-image">
                        <img src={norwegia} alt="niesamowitanorwegia"></img>
                        <div className="portfolio-middle"><div className="text"><p>ZOBACZ TU:</p><br /><a href="https://github.com/aleksandraskrzypek/norwegia"><GitHubIcon className="icon-portfolio"/></a></div></div>
                    </div>
                    <div className="project-text">
                        <h1>Norwegia</h1>
                        <p>Strona internetowa - wykorzystuje JS'a, CSS'a oraz HTML'a. Projekt napisany na zaliczenie przedmiotu - moja ostatnia strona przed nauką React'a.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

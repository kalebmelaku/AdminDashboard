
import React, { useState, useEffect } from 'react';
// import Dark from './img/icons/moon.png';
import MainComponent from '../components/mainComponent';
import SideNav from '../components/sideNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        return () => {
                // ------------------------------------------------------- //
                // Sidebar Functionality
                // ------------------------------------------------------ //
                var sidebarToggler = document.querySelector(".sidebar-toggle");
                var sidebar = document.querySelector("#sidebar");
                var pageContent = document.querySelector(".page-content");
                var navBrand = document.querySelector(".navbar-brand");
                if (sidebarToggler) {
                    sidebarToggler.addEventListener("click", function () {
                        this.classList.toggle("active");
                        navBrand.classList.toggle("active");

                        sidebar.classList.toggle("shrinked");
                        pageContent.classList.toggle("active");
                        document.dispatchEvent(new Event("sidebarChanged"));
                    });
                }
        };
    }, []);
    return (
        <div className={darkMode ? 'App' : 'light App'} id={'app'}>
            <header className="header">
                <nav className="navbar navbar-expand-lg bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10">

                    <div className="container-fluid d-flex align-items-center justify-content-between py-1">
                        <div className="navbar-header d-flex align-items-center">
                            <Link className="navbar-brand text-uppercase text-reset" to="/">
                            <div className="brand-text brand-big"><strong>Dash </strong><strong>Board</strong></div>
                                <div className="brand-text brand-sm"><strong>D</strong><strong>B</strong></div>
                            </Link>
                            <button className="sidebar-toggle">
                                <svg className="svg-icon svg-icon-sm svg-icon-heavy transform-none">
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                </svg>
                            </button>
                        </div>
                        <div className="dark_light_switch">
                            <span className='light' style={{ color: darkMode ? '#fff' : '#000' }}>
                                <FontAwesomeIcon icon={faSun} />
                            </span>
                            <div className="switch-checkbox">
                                <label className='switch'>
                                    <input type="checkbox"
                                        id='icon'
                                        checked={darkMode}
                                        onChange={() => setDarkMode(!darkMode)}
                                    />
                                    <span className="slider round"> </span>
                                </label>
                            </div>
                            <span className='dark' style={{ color: darkMode ? '#fff' : '#2d3035' }}>
                                <FontAwesomeIcon icon={faMoon}
                                />
                            </span>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="d-flex custom">
                    <SideNav/>
                <div className="page-content">
                    <MainComponent />
                </div>
            </div>
        </div>
    );
}
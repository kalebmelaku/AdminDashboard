
import React, { useState, useEffect } from 'react';
import Dark from './img/icons/moon.png';
import MainComponent from './components/mainComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGrip, faChartLine, faClipboard, faLock, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    return () => {
      "use strict";

document.addEventListener("DOMContentLoaded", function () {
    // ------------------------------------------------------- //
    // Transition Placeholders
    // ------------------------------------------------------ //
    let materialInputs = document.querySelectorAll("input.input-material");
    let materialLabel = document.querySelectorAll("label.label-material");

    // activate labels for prefilled values
    let filledMaterialInputs = Array.from(materialInputs).filter(function (input) {
        return input.value !== "";
    });
    filledMaterialInputs.forEach((input) => input.parentElement.lastElementChild.setAttribute("class", "label-material active"));

    // move label on focus
    materialInputs.forEach((input) => {
        input.addEventListener("focus", function () {
            input.parentElement.lastElementChild.setAttribute("class", "label-material active");
        });
    });

    // remove/keep label on blur
    materialInputs.forEach((input) => {
        input.addEventListener("blur", function () {
            if (input.value !== "") {
                input.parentElement.lastElementChild.setAttribute("class", "label-material active");
            } else {
                input.parentElement.lastElementChild.setAttribute("class", "label-material");
            }
        });
    });

    // ------------------------------------------------------- //
    // Footer
    // ------------------------------------------------------ //
    let footer = document.querySelector("#footer");
    if (footer) {
        document.addEventListener("sidebarChanged", function () {
            adjustFooter();
        });
        window.addEventListener("resize", function () {
            adjustFooter();
        });
    }

    function adjustFooter() {
        var footerBlockHeight = document.querySelector("#footer").outerHeight;
        pageContent.style.paddingBottom = `${footerBlockHeight}px`;
    }

    // ------------------------------------------------------- //
    // Card Close
    // ------------------------------------------------------ //
    const closeCardBtn = document.querySelectorAll(".card-close a.remove");
    closeCardBtn.forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();
            el.closest(".card").style.opacity = "0";
            setTimeout(function () {
                el.closest(".card").classList.add("d-none");
            }, 300);
        });
    });

    // ------------------------------------------------------- //
    // Card Close dropdown
    // ------------------------------------------------------ //
    const cardSettingsToggle = document.querySelectorAll(".card-close .dropdown-toggle");
    cardSettingsToggle.forEach((el) => {
        el.addEventListener("click", () => {
            if (el.classList.contains("show")) {
                setTimeout(function () {
                    el.nextElementSibling.classList.add("is-visible");
                }, 100);
            }
        });
    });

    document.addEventListener("click", function (e) {
        cardSettingsToggle.forEach((el) => {
            if (e.target == el) {
                setTimeout(function () {
                    el.nextElementSibling.classList.add("is-visible");
                }, 100);
            } else {
                el.nextElementSibling.classList.remove("is-visible");
            }
        });
    });

    // ------------------------------------------------------- //
    // Search Popup
    // ------------------------------------------------------ //
    var searchOpenBtn = document.querySelector(".search-open");
    var searchPanel = document.querySelector(".search-panel");
    var searchCloseBtn = document.querySelector(".search-panel .close-btn");
    if (searchOpenBtn) {
        searchOpenBtn.addEventListener("click", function (e) {
            e.preventDefault();
            searchPanel.style.display = "block";
        });
        searchCloseBtn.addEventListener("click", function (e) {
            e.preventDefault();
            searchPanel.style.display = "none";
        });
    }

    // ------------------------------------------------------- //
    // Tooltips init
    // ------------------------------------------------------ //
    // var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    // var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    //     return new bootstrap.Tooltip(tooltipTriggerEl);
    // });

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

    function bsValidationBehavior(errorInputs, form) {
        function watchError() {
            errorInputs.forEach((input) => {
                if (input.classList.contains("js-validate-error-field")) {
                    input.classList.add("is-invalid");
                    input.classList.remove("is-valid");
                } else {
                    input.classList.remove("is-invalid");
                    input.classList.add("is-valid");
                }
            });
        }
        watchError();
    }

    // ------------------------------------------------------- //
    // Login Form Validation
    // ------------------------------------------------------ //
    let loginForm = document.querySelector(".login-form");
    if (loginForm) {
        new window.JustValidate(".login-form", {
            rules: {
                loginUsername: {
                    required: true,
                    email: true,
                },
                loginPassword: {
                    required: true,
                },
            },
            messages: {
                loginUsername: "Please enter a valid email",
                loginPassword: "Please enter your password",
            },
            invalidFormCallback: function () {
                let errorInputs = document.querySelectorAll(".login-form input[required]");
                bsValidationBehavior(errorInputs, loginForm);
                loginForm.addEventListener("keyup", () => bsValidationBehavior(errorInputs, loginForm));
            },
        });
    }

    // ------------------------------------------------------- //
    // Register Form Validation
    // ------------------------------------------------------ //
    let registerForm = document.querySelector(".register-form");
    if (registerForm) {
        new window.JustValidate(".register-form", {
            rules: {
                registerUsername: {
                    required: true,
                },
                registerEmail: {
                    required: true,
                    email: true,
                },
                registerPassword: {
                    required: true,
                },
                registerAgree: {
                    required: true,
                },
            },
            messages: {
                registerUsername: "Please enter your username",
                registerEmail: "Please enter a valid email address",
                registerPassword: "Please enter your password",
                registerAgree: "Your agreement is required",
            },
            invalidFormCallback: function () {
                let errorInputs = document.querySelectorAll(".register-form input[required]");
                bsValidationBehavior(errorInputs, registerForm);
                registerForm.addEventListener("keyup", () => bsValidationBehavior(errorInputs, registerForm));
                registerForm.addEventListener("change", () => bsValidationBehavior(errorInputs, registerForm));
            },
        });
    }

    // ------------------------------------------------------- //
    // Profile page choices
    // ------------------------------------------------------ //
    function injectClassess(x) {
        let pickerCustomClass = x.dataset.customclass;
        let pickerSevClasses = pickerCustomClass.split(" ");
        x.parentElement.classList.add.apply(x.parentElement.classList, pickerSevClasses);
    }

    // const profileCountryChoices = document.querySelector(".profile-country-choices");
    // if (profileCountryChoices) {
    //     const countryChoices = new Choices(profileCountryChoices, {
    //         searchEnabled: false,
    //         placeholder: false,
    //         callbackOnInit: () => injectClassess(profileCountryChoices),
    //     });
    // }

    // ------------------------------------------------------- //
    // Masonry with ImagesLoaded
    // ------------------------------------------------------ //
    // const masonryGrid = document.querySelector(".msnry-grid");
    // if (masonryGrid) {
    //     var msnry = new Masonry(masonryGrid, {
    //         percentPosition: true,
    //     });
    //     imagesLoaded(masonryGrid).on("progress", function () {
    //         msnry.layout();
    //     });
    // }
});

    }
  }, [])
  
  return (
    <div className={darkMode ? 'App' : 'light App'}>
      <header className="header">
        <nav className="navbar navbar-expand-lg bg-dash-dark-2 border-bottom border-dash-dark-1 z-index-10">

          <div className="container-fluid d-flex align-items-center justify-content-between py-1">
            <div className="navbar-header d-flex align-items-center">

              <a className="navbar-brand text-uppercase text-reset"
                href="index.html">
                <div className="brand-text brand-big"><strong>Dash </strong><strong>Board</strong></div>
                <div className="brand-text brand-sm"><strong>D</strong><strong>B</strong></div>
              </a>
              <button className="sidebar-toggle">
                <svg className="svg-icon svg-icon-sm svg-icon-heavy transform-none">
                  <use xlinkHref="#arrow-left-1"> </use>
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
        <nav id="sidebar">


          <ul className="list-unstyled">
            <li className="sidebar-item active"><a className="sidebar-link" href="index.html">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                {/* <use xlinkHref="#real-estate-1"> </use> */}
                <FontAwesomeIcon icon={faHouse} />
              </svg><span>Home </span></a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="tables.html">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                {/* <use xlinkHref="#portfolio-grid-1"> </use> */}
                <FontAwesomeIcon icon={faGrip} />
              </svg><span>Tables </span></a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="charts.html">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                {/* <use xlinkHref="#sales-up-1"> </use> */}
                <FontAwesomeIcon icon={faChartLine} />
              </svg><span>Charts </span></a></li>
            <li className="sidebar-item"><a className="sidebar-link" href="forms.html">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                {/* <use xlinkHref="#survey-1"> </use> */}
                <FontAwesomeIcon icon={faClipboard} />
              </svg><span>Forms </span></a></li>

            <li className="sidebar-item"><a className="sidebar-link" href="login.html">
              <svg className="svg-icon svg-icon-sm svg-icon-heavy">
                {/* <use xlinkHref="#disable-1"> </use> */}
                <FontAwesomeIcon icon={faLock} />
              </svg><span>Login page </span></a></li>
          </ul>

        </nav>
        <div className="page-content">
          <MainComponent />
        </div>
      </div>
    </div>

);
}
const icon = document.getElementById('icon_switch');
document.addEventListener("DOMContentLoaded", () => {
  let status = sessionStorage.getItem("colorMode");
  // document.body.classList.remove('')
  console.log(icon);
  if (status === 'dark') {
    document.body.classList.remove('light');
    icon.src = '../img/icons/sun.png';
  } else {
    document.body.classList.add(status);
  }
});

export default App;

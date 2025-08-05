import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { images } from '../../assets/assetsManager'

const Footer = () => {
    return (
        <footer id="site-footer">
            <div className="footer_contact_section container">
                <h2 className="section-title text-center">Kontaktieren Sie uns</h2>
                <p class="text-center">Brauchen Sie Hilfe bei einer Anfrage, Bestellung oder haben Sie eine andere Frage? Nehmen Sie Kontakt mit uns auf!</p>
                <div class="footer-contact-banner">
                    <div class="row justify-content-center">
                        <div class="col-lg-4">
                            <div class="d-flex justify-content-center gap-3">
                                <div>
                                    <h5 class="title mb-0">TELEFON</h5>
                                    <a href="tel: +43 (0) 1 58802">+43 (0) 1 58802</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 border-start border-end">
                            <div class="d-flex justify-content-center gap-3">
                                <div>
                                    <h5 class="title mb-0">E-MAIL</h5>
                                    <a href="mailto:office@nebel.co.at">office@nebel.co.at</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="d-flex justify-content-center gap-3">
                                <div>
                                    <h5 class="title mb-0">FAX</h5>
                                    <p class="mb-0">+43 (0) 1 58802 - 32</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_top_wrapper">
                <div className="container">
                    <div className="row gy-3">
                        <div className="col-sm-6 col-lg-2">
                            <h5 className="block_title">mehr über nebel</h5>
                            <ul className="nav navbar-nav">
                                <li><NavLink to="#">Über uns</NavLink></li>
                                <li><NavLink to="#">Preise</NavLink></li>
                                <li><NavLink to="#">Abverkauf</NavLink></li>
                                <li><NavLink to="#">Kontakt</NavLink></li>
                            </ul>
                            <a href="#">
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.79063C0 0.801563 0.821875 0 1.83594 0H23.1641C24.1781 0 25 0.801563 25 1.79063V23.2094C25 24.1984 24.1781 25 23.1641 25H1.83594C0.821875 25 0 24.1984 0 23.2094V1.79063ZM7.72344 20.9281V9.63906H3.97188V20.9281H7.72344ZM5.84844 8.09688C7.15625 8.09688 7.97031 7.23125 7.97031 6.14687C7.94687 5.03906 7.15781 4.19688 5.87344 4.19688C4.58906 4.19688 3.75 5.04063 3.75 6.14687C3.75 7.23125 4.56406 8.09688 5.82344 8.09688H5.84844ZM13.5172 20.9281V14.6234C13.5172 14.2859 13.5422 13.9484 13.6422 13.7078C13.9125 13.0344 14.5297 12.3359 15.5672 12.3359C16.925 12.3359 17.4672 13.3703 17.4672 14.8891V20.9281H21.2188V14.4531C21.2188 10.9844 19.3687 9.37187 16.9 9.37187C14.9094 9.37187 14.0172 10.4656 13.5172 11.2359V11.275H13.4922L13.5172 11.2359V9.63906H9.76719C9.81406 10.6984 9.76719 20.9281 9.76719 20.9281H13.5172Z" fill="#53A447" />
                                </svg>
                            </a>
                        </div>
                        <div className="col-sm-6 col-lg-2">
                            <h5 className="block_title">addresse</h5>
                            <p className="address">
                                Nebel GmbH & Co.KG <br /> Otto-Bauer-Gasse 4-6 <br /> A-1060 Vienna <br />Austria
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="block_title">Öffnungszeiten Büro</h5>
                            <p className="timing">
                                Mo-Do: 8-12 Uhr, 12:30-17 Uhr <br />
                                Freitag: 8-12 Uhr, 12:30-14:30 Uhr <br />
                                Samstag geschlossen
                            </p>
                        </div>
                        <div className="col-lg-3">
                            <h5 className="block_title">Kontakt</h5>
                            <p>Versandpreise</p>
                            <p><img src={images.dbFooterLogo} alt="db" /></p>
                            <p><img src={images.dpdFooterLogo} alt="dpd" /></p>
                        </div>
                        <div className="col-lg-2">
                            <div className="d-flex gap-2 justify-content-lg-end align-items-start">
                                <img src={images.interbookFooterLogo} alt="interbook" />
                                <img src={images.fscFooterLogo} alt="fsc" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom_wrapper">
                <div className="container">
                    <div className="d-flex justify-content-evenly align-items center gap-5">
                        <p className="mb-0">Copyright © 2024 Nebel GmbH & Co.KG</p>
                        <ul className="nav gap-3">
                            <li><NavLink to="#">Datenschutz</NavLink></li>
                            <li><NavLink to="#">Impressum</NavLink></li>
                            <li><NavLink to="#">AGB</NavLink></li>
                            <li><NavLink to="#">Kontakt</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
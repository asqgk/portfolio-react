export default function Menu() {
    return (
        <header className="header" id="header">
            <nav className="nav nav container">
                <a href="#" className="nav__logo">
                    Francisco
                </a>
                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon" /> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon" /> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon" /> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link">
                                <i className="uil uil-briefcase-alt nav__icon" /> Services
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <i className="uil uil-scenery nav__icon" /> Portfolio
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon" /> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" id="nav-close" />
                </div>
                <div className="nav__btns">
                    {/* Theme change button */}
                    <i className="uil uil-moon change-theme" id="theme-button" />
                    <div className="nav__toggle" id="nav-toggle">
                        <i className="uil uil-apps" />
                    </div>
                </div>
            </nav>
        </header>

    )
}
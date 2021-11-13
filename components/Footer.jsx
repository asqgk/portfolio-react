export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Francisco</h1>
                        <span className="footer__subtitle">Fullstack developer</span>
                    </div>
                    <ul className="footer__links">
                        <li>
                            <a href="#services" className="footer__link">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className="footer__socials">
                        <a
                            href="https://www.linkedin.com/in/francisco-dos-passos-220908184/"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="uil uil-linkedin-alt" />
                        </a>
                        <a
                            href="https://github.com/asqgk"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="uil uil-github-alt" />
                        </a>
                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            className="footer__social"
                        >
                            <i className="uil uil-facebook-f" />
                        </a>
                    </div>
                </div>
                <p className="footer__copy">© Francisco dos Passos. All right reserved</p>
            </div>
        </footer>

    )
}
export default function About() {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>
            <div className="about__container container grid">
                
                {/* <img src="assets/img/about.jpg" alt="" class="about__img"> */}
                <div className="about__data">
                    <p className="about__description">
                        Web developer, currently working with main focus on JavaScript
                        applications using Node.js and React.js
                    </p>
                    <div className="about__info">
                        <div>
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">
                                Years <br /> experience
                            </span>
                        </div>
                        {/* <div>
                                <span class ="about__info-title">02+</span>
                                <span class ="about__info-name">Completed <br> project</span>
                            </div> */}
                        
                        <div>
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">
                                Companies <br /> worked
                            </span>
                        </div>
                    </div>
                    <div className="about__buttons">
                        <a
                            download
                            href="assets/pdf/Francisco-Cv.pdf"
                            className="button button--flex"
                        >
                            Download CV
                            <i className="uil uil-download-alt button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className="qualification__button button--flex qualification__active"
                        data-target="#education"
                    >
                        <i className="uil uil-graduation-cap qualification__icon" />
                        Education
                    </div>
                    <div className="qualification__button button--flex" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification__icon" />
                        Work
                    </div>
                </div>
                <div className="qualification__sections">
                    {/*==================== QUALIFICATION CONTENT 1 ====================*/}
                    <div
                        className="qualification__content qualification__active"
                        data-content
                        id="education"
                    >
                        {/*==================== QUALIFICATION 1 ====================*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Scientist</h3>
                                <span className="qualification__subtitle">Brazil - University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />
                                    2017 - 2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                        </div>
                        {/*==================== QUALIFICATION 2 ====================*/}
                        <div className="qualification__data">
                            <div />
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Design</h3>
                                <span className="qualification__subtitle">Brazil - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />
                                    2013 - 2018
                                </div>
                            </div>
                        </div>
                        {/*==================== QUALIFICATION 3 ====================*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Brazil - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />
                                    2020 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                {/*<span class="qualification__line"></span> */}
                            </div>
                        </div>
                        {/*==================== QUALIFICATION 4 ====================*/}
                        {/* <div class="qualification__data">
                                <div></div>

                                <div>
                                    <span class="qualification__rounder"></span>
                                    <span class="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 class="qualification__title">Master in Ui/Ux</h3>
                                    <span class="qualification__subtitle">Brazil - Institute</span>
                                    <div class="qualification__calendar">
                                        <i class="uil uil-calendar-alt"></i>
                                        2019 - 2021
                                    </div>
                                </div>
                            </div> */}


                    </div>
                    {/*==================== QUALIFICATION CONTENT 2 ====================*/}
                    <div className="qualification__content" data-content id="work">
                        {/*==================== QUALIFICATION 1 ====================*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Technical Support</h3>
                                <span className="qualification__subtitle">Brazil - University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />
                                    2010 - 2012
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                        </div>
                        {/*==================== QUALIFICATION 2 ====================*/}
                        <div className="qualification__data">
                            <div />
                            <div>
                                <span className="qualification__rounder" />
                                <span className="qualification__line" />
                            </div>
                            <div>
                                <h3 className="qualification__title">Quality Controller</h3>
                                <span className="qualification__subtitle">Brazil - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />
                                    2013 - 2018
                                </div>
                            </div>
                        </div>
                        {/*==================== QUALIFICATION 3 ====================*/}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">Brazil - Institute</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt" />
                                    2020 - 2021
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder" />
                                {/*<span class="qualification__line"></span>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
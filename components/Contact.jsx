export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>
            <div className="contact__container container grid">
                <div>
                    <div className="contact__information">
                        <i className="uil uil-phone contact__icon" />
                        <div>
                            <h3 className="contact__title">Call Me</h3>
                            <span className="contact__subtitle">+55 99192-9294</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-envelope contact__icon" />
                        <div>
                            <h3 className="contact__title">Email</h3>
                            <span className="contact__subtitle">160650@upf.br</span>
                        </div>
                    </div>
                    <div className="contact__information">
                        <i className="uil uil-map-marker contact__icon" />
                        <div>
                            <h3 className="contact__title">Location</h3>
                            <span className="contact__subtitle">Brasil - Rio Grande do Sul</span>
                        </div>
                    </div>
                </div>
                {/* <form action className="contact__form grid"> */}
                <form className="contact__form grid">
                    <div className="contact__inputs grid">
                        <div className="contact__content">
                            {/* <label htmlFor className="contact__label"> */}
                            <label className="contact__label">
                                Name
                            </label>
                            <input type="text" className="contact__input" />
                        </div>
                        <div className="contact__content">
                            <label className="contact__label">
                                Email
                            </label>
                            <input type="email" className="contact__input" />
                        </div>
                    </div>
                    <div className="contact__content">
                        <label className="contact__label">
                            Project
                        </label>
                        <input type="text" className="contact__input" />
                    </div>
                    <div className="contact__content">
                        <label className="contact__label">
                            Message
                        </label>
                        <textarea
                            // name
                            // id
                            cols={0}
                            rows={7}
                            className="contact__input"
                            defaultValue={""}
                        />
                    </div>
                    <div>
                        <a href="#" className="button button--flex">
                            Send Message
                            <i className="uil uil-message button__icon" />
                        </a>
                    </div>
                </form>
            </div>
        </section>

    )
}
export default function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>
            <div className="skills__container container grid">
                <div>
                    {/*==================== SKILLS 1 ====================*/}
                    <div className="skills__content skills__open">
                        <div className="skills__header">
                            <i className="uil uil-brackets-curly skills__icon" />
                            <div>
                                <h1 className="skills__title">Frontend developer</h1>
                                <span className="skills__subtitle">More than 1 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">HTML</h3>
                                    <span className="skills__number">85%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__html" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">CSS</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__css" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__js" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">React</h3>
                                    <span className="skills__number">65%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__react" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*==================== SKILLS 2 ====================*/}
                    {/* <div class="skills__content skills__close">
                      <div class="skills__header">
                          <i class="uil uil-server-network skills__icon"></i>
                          <div>
                              <h1 class="skills__title">Backend developer</h1>
                              <span class="skills__subtitle">More than 1 years</span>
                          </div>
                          <i class="uil uil-angle-down skills__arrow"></i>
                      </div>
                      <div class="skills__list grid">
                          <div class="skills__data">
                              <div class="skills__titles">
                                  <h3 class="skills__name">PHP</h3>
                                  <span class="skills__number">60%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__php"></span>
                              </div>
                          </div>
                          <div class="skills__data">
                              <div class="skills__titles">
                                  <h3 class="skills__name">Node Js</h3>
                                  <span class="skills__number">75%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__node"></span>
                              </div>
                          </div>
                          <div class="skills__data">
                              <div class="skills__titles">
                                  <h3 class="skills__name">Firebase</h3>
                                  <span class="skills__number">45%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__firebase"></span>
                              </div>
                          </div>
                          <div class="skills__data">
                              <div class="skills__titles">
                                  <h3 class="skills__name">Python</h3>
                                  <span class="skills__number">35%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__python"></span>
                              </div>
                          </div>
                      </div>
                  </div> */}
                </div>
                <div>
                    {/*==================== SKILLS 2 ====================*/}
                    <div className="skills__content skills__close">
                        <div className="skills__header">
                            <i className="uil uil-server-network skills__icon" />
                            <div>
                                <h1 className="skills__title">Backend developer</h1>
                                <span className="skills__subtitle">More than 1 years</span>
                            </div>
                            <i className="uil uil-angle-down skills__arrow" />
                        </div>
                        <div className="skills__list grid">
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Node Js</h3>
                                    <span className="skills__number">60%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__php" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Express</h3>
                                    <span className="skills__number">75%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__node" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">Python</h3>
                                    <span className="skills__number">45%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__firebase" />
                                </div>
                            </div>
                            <div className="skills__data">
                                <div className="skills__titles">
                                    <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__number">35%</span>
                                </div>
                                <div className="skills__bar">
                                    <span className="skills__percentage skills__python" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
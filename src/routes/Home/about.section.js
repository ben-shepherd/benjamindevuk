import React from 'react'
import { getHtml } from '../../apis/cockpit'

const About = (props) => {
    const { singleton } = props
    const { title, servicesTitle, services, interestsTitle, interests } = singleton

    return (
        <section className="About section-dark section-padding-3 text-white">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                    <div className="developer-text">
                        <h3>{title}</h3>
                    </div>
                </div>
            </div>
            <div className="About-flex d-flex">
                <div className="developer-summary">
                    <h2 className="mt-5">{servicesTitle}</h2>

                    <div className="Services ml-3">
                        {getHtml(services)}
                    </div>
                </div>
                <div className="developer-skills">
                    <div className="Interests">
                        <h6 className="text-center mt-5 mb-5">{interestsTitle}</h6>
                        {getHtml(interests)}
                    </div>
                </div>


            </div>
        </section>
    )
}

export default About
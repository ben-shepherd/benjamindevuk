import React from 'react'
import Welcome from './welcome.section'
import About from './about.section'
import Portfolio from './portfolio.section'
import Contact from './contact.section'
import '../../_scss/homepage.scss'
import '../../_scss/devices.scss'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <a name="home" />
                <Welcome />

                <a name="about"></a>
                <About />
                <section className="AboutDivider"></section>

                <a name="portfolio"></a>
                <Portfolio />

                <a name="contact"></a>
                <Contact />
            </div>
        )
    }
}
import React from 'react'
import Welcome from './welcome.section'
import About from './about.section'
import Portfolio from './portfolio.section'

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
            </div>
        )
    }
}
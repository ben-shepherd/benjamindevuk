import React from 'react'
import Welcome from './welcome.section'
import About from './about.section'
import Portfolio from './portfolio.section'

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Welcome />
                <About />
                <section className="AboutDivider"></section>
            </div>
        )
    }
}
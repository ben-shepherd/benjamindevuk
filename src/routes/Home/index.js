import React from 'react'
import Welcome from '../../components/sections/welcome.section'
import About from '../../components/sections/about.section'
import Portfolio from '../../components/sections/portfolio.section'

export default class Home extends React.Component {

    render() {
        console.log('Home')
        return (
            <div>
                <Welcome />
                <About />
                <section className="AboutDivider"></section>
            </div>
        )
    }
}
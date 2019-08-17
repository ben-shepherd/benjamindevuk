import React from 'react'
import { Link } from 'react-router-dom'

// portfolio items
import Puretree from './portfolio/puretree'
import Hindhead from './portfolio/hindhead'
import Gtblitz from './portfolio/gtblitz'
import Hbc from './portfolio/hbc'
import Kaitenbun from './portfolio/kaitenbun'

const Portfolio = () => {
    return (
        <section className="Portfolio">
            <div className="section-title">
                <h1>Recent Work</h1>
            </div>
            <div className="portfolio-items d-flex">
                <Puretree />
                <Hindhead />
                <Gtblitz />
                <Hbc />
                <Kaitenbun />
            </div>
        </section>
    )
}

const PortfolioItem = (props) => (
    <div className="PortfolioItem">

    </div>
)

export default Portfolio
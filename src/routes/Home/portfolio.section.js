import React from 'react'
import { withRouter } from 'react-router-dom'

// portfolio items
import Puretree from './portfolioItems/puretree'
import Hindhead from './portfolioItems/hindhead'
import Gtblitz from './portfolioItems/gtblitz'
import Hbc from './portfolioItems/hbc'
import Kaitenbun from './portfolioItems/kaitenbun'

const Portfolio = (props) => {
    const onClick = (url) => {
        props.history.push(url)
    }

    return (
        <section className="Portfolio">
            <div className="section-title">
                <h1>Recent Work</h1>
            </div>
            <div className="portfolio-items d-flex">
                {/* <Puretree onClick={onClick} /> */}
                <Hindhead onClick={onClick} />
                <Gtblitz onClick={onClick} />
                <Hbc onClick={onClick} />
                <Kaitenbun onClick={onClick} />
            </div>
        </section>
    )
}

export default withRouter(Portfolio)
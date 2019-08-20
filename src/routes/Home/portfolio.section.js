import React from 'react'
import { withRouter } from 'react-router-dom'

// portfolio items
//import Puretree from './portfolioItems/puretree'
import Hindhead from './portfolioItems/hindhead'
import Gtblitz from './portfolioItems/gtblitz'
import Hbc from './portfolioItems/hbc'
import Kaitenbun from './portfolioItems/kaitenbun'
import PensionAdmin from './portfolioItems/pensionadmin'
import Tipsntoes from './portfolioItems/tipsntoes'
import Workinprogress from './portfolioItems/workinprogress'

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
                <PensionAdmin onClick={onClick} />
                <Hbc onClick={onClick} />
                <Hindhead onClick={onClick} />
                <Tipsntoes onClick={onClick} />
                <Gtblitz onClick={onClick} />
                <Kaitenbun onClick={onClick} />
            </div>
            <div className="section-title mt-5">
                <h1>Active Development</h1>
            </div>
            <div className="portfolio-items d-flex">
                <Workinprogress />
            </div>
        </section>
    )
}

export default withRouter(Portfolio)
import React from 'react'
import { connect } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'

// portfolio items
//import Puretree from './portfolioItems/puretree'
// import Hindhead from './portfolioItems/hindhead'
// import Gtblitz from './portfolioItems/gtblitz'
// import Hbc from './portfolioItems/hbc'
// import Kaitenbun from './portfolioItems/kaitenbun'
// import PensionAdmin from './portfolioItems/pensionadmin'
// import Tipsntoes from './portfolioItems/tipsntoes'
// import Workinprogress from './portfolioItems/workinprogress'
import Work from '../Work'
import WorkPreview from '../Work/Preview'

const Portfolio = (props) => {

    const { portfolio } = props.cockpit

    const onClick = (url) => {
        scroll.scrollToTop()
        props.history.push(url)
    }

    return (
        <section className="Portfolio">
            <div className="section-title">
                <h1>Recent Work</h1>
            </div>
            <div className="preview-container d-flex">

                {portfolio.entries.map((portfolioItem) =>
                    <WorkPreview {...portfolioItem} />
                )}
            
            </div>
            <div className="section-title pt-3">
                <h1>How was this website built?</h1>
            </div>
            <div className="github-repo">
                <p>Check out the websites source code on GitHub</p>
                <a href="https://github.com/ben-shepherd/benjamindevuk" target="_blank" rel="noopener noreferrer">
                    <img src="/img/logos/github.png" alt="GitHub Repositry" title="GitHub - benshepherd-react" />
                </a>
            </div>
        </section>
    )
}

const mapState = (state) => ({
    cockpit: state.app.cockpit,
})
const connected = connect(mapState)(Portfolio)

export default connected
import React from 'react'
import { connect } from 'react-redux'
import { animateScroll as scroll } from 'react-scroll'

import WorkPreview from '../Work/Preview'

const Portfolio = (props) => {

    const { portfolio } = props

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
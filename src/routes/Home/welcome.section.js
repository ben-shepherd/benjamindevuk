import React, { useState, useEffect } from 'react'
import { getStorageUrl } from '../../apis/cockpit'
import { withRouter } from 'react-router-dom'
import Particles from 'react-particles-js'
import config from '../../config';
import AutoType from '../../components/AutoType'
import { Link } from 'react-router-dom'
import urlService from '../../_services/url.service';
import { animateScroll as scroll } from 'react-scroll'

const introTexts = [
    "Image Galleries",
    "Single Paged Websites",
    "User Profiles",
    "PayPal Intergration",
    "Stripe Integration",
    "User Authentication",
    "Administrative Dashboard",
    "Content Management Systems",
    "Data Reporting & Analytics",
    "Website Hosting",
    "Business Software",
    "Geographical Queries",
    "Automated Scripts",
    "Socially Interactive Features",
    "Third Party e.g. Facebook, Instagram"
];

const fallbackButtons = () => (
    <ul class="fallback-buttons">
        <li><Link to="/#about">About</Link></li>
        <li><Link to="/#work">Work</Link></li>
        <li><Link to="/#posts">Posts</Link></li>
        <li><Link to="/#contact">Message Me</Link></li>
    </ul>
);

const Welcome = (props) => {

    const { welcomeButtons } = props

    const { singleton } = props
    const { title, subTitle, introTexts, logos } = singleton    

    React.useEffect(() => {
        console.log('Welcome buttons changed', {welcomeButtons})
    }, [welcomeButtons])

    React.useEffect(() => {
        console.log('Welcome singleton changed', {singleton})
    }, [welcomeButtons])

    React.useEffect(() => {
        console.log('Welcome logos', {logos})
    }, [logos])

    console.log('Welcome logos', {logos})

    return (
        <section className="Welcome full-height d-relative">
            <div className="catchy">
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
            </div>

            <div className="intro container">
                <div className="row">
                    <div className="col-12 col-md-8 offset-md-2 auto-type-container">
                        <h3 class="auto-type-title">Recently, I've worked on...</h3>
                        <AutoType textList={introTexts.items} />
                    </div>
                </div>
            </div>

            <div className="welcome-explorer">
                {typeof welcomeButtons === 'undefined' ? (
                    fallbackButtons()
                ) : (
                    <ul>
                        {welcomeButtons.entries.map((btn,i) => 
                            <li>
                                <a href={btn.customRoute} target="_blank" rel="noopener noreferrer">{btn.text}</a>
                                {/* {(typeof btn.route !== 'object' && btn.route) && btn.customRoute.length ? (
                                    <a href={btn.customRoute} target="_blank" rel="noopener noreferrer">{btn.text}</a>
                                ) : (
                                    <a href={btn.route.path} target="_blank" rel="noopener noreferrer">{btn.text}</a>
                                )} */}
                            </li>
                        )}
                    </ul>
                )}
            </div>

            <div className="logos">
                {logos.map((logo,k) => 
                    <img key={k} className="logo-img" alt="" src={getStorageUrl(logo.path)} />
                )}
            </div>

            <div className="ParticlejsContainer">
                <Particles params={config.fallbackParticlejs} />
            </div>

        </section>
    )
}


const Welcome2 = withRouter(class Welcome extends React.Component {
    componentDidMount() {
        console.log('Welcome mounted', {props: this.props})
    }
    
    onFreeQuoteClick = () => {
        var el = document.querySelector(`a[name=contact]`);
        if(el) {
            scroll.scrollTo(el.offsetTop)
            this.props.history.push({pathname: urlService.routes.contact()})
        }
    }
    
    render() {
        return (
            <section className="Welcome full-height d-relative">
                <div className="catchy">
                    <h1>Web Design & Software</h1>
                    <h2>UK Based Developer</h2>
                </div>

                <div className="intro container">
                    <div className="row">
                        <div className="col-12 col-md-6 offset-md-3 auto-type-container">
                            <h3 class="auto-type-title">Recently, I've worked on...</h3>
                            <AutoType textList={introTexts} />
                        </div>
                    </div>
                </div>

                <div className="welcome-explorer">
                    <ul>
                        <li><Link to="/#about">About</Link></li>
                        <li><Link to="/#work">Work</Link></li>
                        <li><Link to="/#posts">Posts</Link></li>
                        <li><Link to="/#contact">Message Me</Link></li>
                    </ul>
                </div>

                {/* <div className="welcome-contact">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-4">
                                <Link className="btn btn-primary" to={urlService.routes.contact()} onClick={this.onFreeQuoteClick}>Get a free quote</Link>
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="logos">
                    <div className="logo laravel"></div>
                    <div className="logo nodejs"></div>
                    <div className="logo reactjs"></div>
                </div>

                <div className="ParticlejsContainer">
                    <Particles params={config.particlejs} />
                </div>

            </section>
        )
    }
})

export default Welcome
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

const Welcome = (props) => {

    const { singleton } = props

    return (
        <section className="Welcome full-height d-relative">
            <div className="catchy">
                <h1>{singleton.title}</h1>
                <h2>{singleton.subTitle}</h2>
            </div>

            <div className="intro container">
                <div className="row">
                    <div className="col-12 col-md-6 offset-md-3 auto-type-container">
                        <h3 class="auto-type-title">Recently, I've worked on...</h3>
                        <AutoType textList={singleton.introTexts.items} />
                    </div>
                </div>
            </div>

            <div className="welcome-explorer">
                <ul>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Work</Link></li>
                    <li><Link to="">Posts</Link></li>
                    <li><Link to="">Message Me</Link></li>
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
                {singleton.logos.map((logo,k) => 
                    <img key={k} className="logo-img" src={getStorageUrl(logo.path)} />
                )}
            </div>
            {/* <div className="logo" style={{backgroundImage: `url(${getStorageUrl(logo.path)})`}}></div> */}

            <div className="ParticlejsContainer">
                <Particles params={config.particlejs} />
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
                        <li><Link to="">About</Link></li>
                        <li><Link to="">Work</Link></li>
                        <li><Link to="">Posts</Link></li>
                        <li><Link to="">Message Me</Link></li>
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
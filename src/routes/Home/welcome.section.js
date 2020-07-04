import React from 'react'
import { getStorageUrl } from '../../apis/cockpit'
import Particles from 'react-particles-js'
import config from '../../config';
import AutoType from '../../components/AutoType'
import { Link } from 'react-router-dom'
import { animateScroll } from 'react-scroll'

const introTexts = {items: [
    "Authentication",
    "Booking Software",
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
    "Geographical Datanase Queries",
    "Automated Scripts",
    "Socially Interactive Features",
    "Third Party e.g. Facebook, Instagram",
    "Web Crawlers",
    "SEO Optimization",
    "Automation",
    "React.js Projects",
    "Geographicial Based Software",
    "Customisable User Profiles",
    "Language Translation",
    "Database Optimization",
    "Vehicle Routing",
    "Geographical Vehicle Routing",
    "Financial Reporting",
    "Cart Checkouts"
]};

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
    const { title, subTitle, logos } = singleton    

    const handleCustomRoute = (e, path) => {
        e.preventDefault()
        try {
            const offsetTop = document.getElementById(path.replace('#','')).offsetTop
            animateScroll.scrollTo(offsetTop)   
        }
        catch (err) {
            console.warn(err)
        }
    }

    const activeWelcomeButtons = welcomeButtons.entries.filter((wb) => wb.active)

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
                        {activeWelcomeButtons.map((btn,i) => 
                            <li>
                                {btn.customRoute.length ? (
                                    <a className="customRoute" href={btn.customRoute} target="_blank" rel="noopener noreferrer" onClick={(e) => handleCustomRoute(e, btn.customRoute)}>{btn.text}</a>
                                ) : (
                                    <a className="externalRoute" href={btn.route.display} target="_blank" rel="noopener noreferrer">{btn.text}</a>
                                )}
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

export default Welcome
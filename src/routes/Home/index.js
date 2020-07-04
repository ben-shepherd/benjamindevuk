import React from 'react';
import { connect } from 'react-redux';
import cockpitActions from '../../_actions/cockpit.action'

import Welcome from './welcome.section'
import About from './about.section'
import Portfolio from './portfolio.section'
import Contact from './contact.section'
import '../../_scss/homepage.scss'
import '../../_scss/devices.scss'
import SiteWrapper from '../../components/SiteWrapper';
import { singletons, collections } from '../../apis/cockpit';

const Home = (props) => {

    const { cockpit } = props
    const { loadedHome, welcome, welcomeButtons, about, portfolio } = cockpit

    const fetchData = async () => {
        try {
            if(!loadedHome) {
                const cockpitPayload = {
                    ...props.cockpit,
                    loadedHome:     true,
                    welcome:        await singletons.get('welcome'),
                    welcomeButtons: await collections.posts('welcomeButtons', {active: true}),
                    about:          await singletons.get('about'),
                    portfolio:      await collections.posts('portfolio')
                }

                props.setCockpit(cockpitPayload)
            }
        }
        catch (err) {
            console.error(err)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])
    
    if(!loadedHome) {
        return null
    }

    return (
        <SiteWrapper content={(
            <React.Fragment>

                <a name="home" href="#home"> </a>
                <Welcome singleton={welcome} welcomeButtons={welcomeButtons} />

                <a name="about" id="about" href="#about"> </a>
                <About singleton={about} />
                <section className="AboutDivider"></section>

                <a name="portfolio" id="portfolio" href="#portfolio"> </a>
                <Portfolio portfolio={portfolio} />

                <a name="contact" id="contact" href="#contact"> </a>
                <Contact />

            </React.Fragment>
        )} />
    )
}

const mapState = (state) => ({
    cockpit: state.cockpit,
})
const mapDispatch = (dispatch) => ({
    setCockpit: (payload) => dispatch(cockpitActions.cockpit(payload)),
})
const connected = connect(mapState, mapDispatch)(Home);

export default connected
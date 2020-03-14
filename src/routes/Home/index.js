import React from 'react'
import { connect } from 'react-redux';
import Welcome from './welcome.section'
import About from './about.section'
import Portfolio from './portfolio.section'
import Contact from './contact.section'
import '../../_scss/homepage.scss'
import '../../_scss/devices.scss'
import SiteWrapper from '../../components/SiteWrapper';

const Home = (props) => {

    const { cockpit } = props
    const { loaded, welcome, portfolio } = cockpit

    React.useEffect(() => {
        console.log('Home change', {cockpit})
    }, [cockpit])
    
    if(!loaded) {
        return null
    }

    return (
        <SiteWrapper content={(
            <React.Fragment>

                <a name="home" />
                <Welcome singleton={welcome} />

                <a name="about"></a>
                <About />
                <section className="AboutDivider"></section>

                <a name="portfolio"></a>
                <Portfolio portfolio={portfolio} />

                <a name="contact"></a>
                <Contact />

            </React.Fragment>
        )} />
    )
}

// const mapState = (state) => ({
//     cockpit: state.app.cockpit,
// })
// const connected = connect(mapState, null)(Home);

// export default connected
export default Home;
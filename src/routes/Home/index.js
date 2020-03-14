import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import appActions from '../../_actions/app.action'
import { singletons, collections } from '../../apis/cockpit';
import Welcome from './welcome.section'
import About from './about.section'
import Portfolio from './portfolio.section'
import Contact from './contact.section'
import '../../_scss/homepage.scss'
import '../../_scss/devices.scss'
import SiteWrapper from '../../components/SiteWrapper';
import Loading from '../../components/Loading';

const Home = (props) => {
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const cockpitData = {
    //             welcome: await singletons.get('welcome'),
    //             portfolio: await collections.posts('portfolio'),
    //         }
            
    //         props.setCockpit(cockpitData);
    //     }

    //     fetchData();
    // }, [])

    // if(props.cockpit === null) {
    //     return (
    //         <Loading />
    //     )
    // }

    const { welcome } = props.cockpit
    
    return (
        <SiteWrapper content={(
            <React.Fragment>

                <a name="home" />
                <Welcome singleton={welcome} />

                <a name="about"></a>
                <About />
                <section className="AboutDivider"></section>

                <a name="portfolio"></a>
                <Portfolio />

                <a name="contact"></a>
                <Contact />

            </React.Fragment>
        )} />
    )
}

const mapState = (state) => ({
    cockpit: state.app.cockpit,
})
// const mapDispatch = (dispatch) => ({
//     setCockpit: (payload) => dispatch(appActions.cockpit(payload)),
// })
const connected = connect(mapState, null)(Home);

export default connected
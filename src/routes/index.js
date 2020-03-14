import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import appActions from '../_actions/app.action'
import { collections, singletons } from '../apis/cockpit'
import ModalDialog from '../components/Modal'

import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Work from './Work'
// import Puretrees from './Portfolio/puretrees'
// import Hindhead from './Portfolio/hindhead'
// import Gametimeblitz from './Portfolio/gametimeblitz'
// import Habbocreate from './Portfolio/habbocreate'
// import Kaitenbun from './Portfolio/kaitenbun'
// import PortfolioPension from './Portfolio/thepensionadmin'
// import Tipsntoes from './Portfolio/tipsntoes'

// import ArticleOne from './Articles/One'

const components = {
    Home,
    Work
}

const Routes = (props) => {

    const { cockpit } = props

    useEffect(() => {
        const fetchData = async () => {
            try {
                props.setCockpit({
                    ...props.cockpit,
                    routes: await collections.posts('routes'),
                    welcome: await singletons.get('welcome'),
                    portfolio: await collections.posts('portfolio')
                })
            }   
            catch (err) {
                console.error(err)
            } 
        }

        fetchData()
    }, [])  

    useEffect(() => {
        console.log('Routes - cockpit updated', )
    }, [props.cockpit])

    if(!cockpit || !cockpit.routes) {
        return null
    }

    return (
        <React.Fragment>
            <ModalDialog />

            <Switch>
                {cockpit.routes.entries.map((route) => 
                    <Route exact path={route.path} component={components[route.component]} />
                )}
            </Switch>
        </React.Fragment>
    )
}

const mapState = (state) => ({
    cockpit: state.app.cockpit,
})
const mapDispatch = (dispatch) => ({
    setCockpit: (payload) => dispatch(appActions.cockpit(payload)),
})

export default connect(mapState, mapDispatch)(Routes)
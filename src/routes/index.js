import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import cockpitAction from '../_actions/cockpit.action'
import { collections, singletons } from '../apis/cockpit'
import ModalDialog from '../components/Modal'

import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Work from './Work'

const components = {
    Home,
    Work
}

const Routes = (props) => {

    const { cockpit } = props
    const { routes } = cockpit

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cockpitPayload = {
                    ...props.cockpit,
                    routes: await collections.posts('routes'),
                    welcome: await singletons.get('welcome'),
                    about: await singletons.get('about'),
                    portfolio: await collections.posts('portfolio')
                }

                props.setCockpit(cockpitPayload)
            }   
            catch (err) {
                console.error(err)
            } 
        }

        fetchData()
    }, [])  


    if(!routes) {
        return null
    }

    return (
        <React.Fragment>
            <ModalDialog />

            <Switch>
                {typeof routes.entries !== 'undefined' ? (
                    routes.entries.map((route, i) => 
                        <Route key={i} exact path={route.path} component={RouteComponent(route.component, cockpit)} />
                    )
                ) : null}
            </Switch>
        </React.Fragment>
    )
}

const RouteComponent = (component, cockpit) => (props) => {
    const Component = components[component];
    return <Component {...props} cockpit={cockpit} />       
}

const mapState = (state) => ({
    cockpit: state.cockpit,
})
const mapDispatch = (dispatch) => ({
    setCockpit: (payload) => dispatch(cockpitAction.cockpit(payload)),
})

export default connect(mapState, mapDispatch)(Routes)
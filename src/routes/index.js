import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

export default class Routes extends React.Component {

    render() {
        console.log('Routes', this.props)
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </React.Fragment>
        )
    }
}
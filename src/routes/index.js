import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Puretrees from './Portfolio/puretrees'
import Hindhead from './Portfolio/hindhead'
import Gametimeblitz from './Portfolio/gametimeblitz'
import Habbocreate from './Portfolio/habbocreate'
import Kaitenbun from './Portfolio/kaitenbun'
import ThePensionAdmin from './Portfolio/thepensionadmin'
import Tipsntoes from './Portfolio/tipsntoes'
import ModalDialog from '../components/Modal'
import ArticleOne from './Articles/One'

export default class Routes extends React.Component {

    render() {
        return (
            <React.Fragment>
                <ModalDialog />

                <Switch>
                    <Route exact path="/" component={Home} />

                    {/* Portfolio */}
                    <Route path="/portfolio/puretrees" component={Puretrees} />
                    <Route path="/portfolio/hindheadproperty" component={Hindhead} />
                    <Route path="/portfolio/gametimeblitz" component={Gametimeblitz} />
                    <Route path="/portfolio/habbocreate" component={Habbocreate} />
                    <Route path="/portfolio/kaitenbun" component={Kaitenbun} />
                    <Route path="/portfolio/thepensionadministrator" component={ThePensionAdmin} />
                    <Route path="/portfolio/tipsntoes" component={Tipsntoes} />

                    {/* Articles  */}
                    <Route exact path="/fresh" component={ArticleOne} />
                </Switch>
            </React.Fragment>
        )
    }
}
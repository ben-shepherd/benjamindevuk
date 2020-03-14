import React from 'react'
import { connect } from 'react-redux'
import Sidebar from '../sidebar'
import appActions from '../../_actions/app.action'
import MenuIcon from '@material-ui/icons/Menu';

const SiteWrapperSidebar = (props) => {
    return (
        <div>
            <div className={`site-wrapper with-sidebar ${props.sidebarFull ? 'full-sidebar' : ''}`}>

                {/* <div className="open-sidebar"><MenuIcon /> Menu</div>

                <div className="app-sidebar" onClick={() => props.setSidebarFull(!props.sidebarFull)}>
                    <Sidebar />
                </div> */}

                <div className="app-content">
                    {props.content}
                </div>
            </div>

        </div>
    )
}

const mapState = (state) => ({
    sidebarFull: state.app.sidebarFull,
})
const mapDispatch = (dispatch) => ({
    setSidebarFull: (payload) => dispatch(appActions.sidebarFull(payload))
})

export default connect(mapState, mapDispatch)(SiteWrapperSidebar)
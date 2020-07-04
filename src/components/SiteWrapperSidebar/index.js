import React from 'react'
import { connect } from 'react-redux'
import appActions from '../../_actions/app.action'

const SiteWrapperSidebar = (props) => {
    return (
        <div>
            <div className={`site-wrapper with-sidebar ${props.sidebarFull ? 'full-sidebar' : ''}`}>
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
import React from 'react'
import Sidebar from '../sidebar'

const SiteWrapper = (props) => {
    return (
        <div>
            <div className="site-wrapper">
                {/* <div className="app-sidebar">
                    <Sidebar />
                </div> */}

                <div className="app-content">
                    {props.content}
                </div>
            </div>

        </div>
    )
}

export default SiteWrapper
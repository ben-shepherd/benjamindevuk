import React from 'react'

const SiteWrapper = (props) => {
    return (
        <div>
            <div className="site-wrapper">
                <div className="app-content">
                    {props.content}
                </div>
            </div>

        </div>
    )
}

export default SiteWrapper
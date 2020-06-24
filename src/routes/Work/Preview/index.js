import React from 'react'
import { withRouter } from 'react-router-dom'
import { getStorageUrl } from '../../../apis/cockpit'

const WorkPreview = (props) => {
    const {
        projectName,
        projectColor,
        projectThumb,
        projectThumbOptions,
        route
    } = props
    
    const imageOptions = {
        backgroundImage: `url(${getStorageUrl(projectThumb.path)})`,
        ...projectThumbOptions,
    }

    const handleClick = () => {
        props.history.push(route.display)
    }

    return (
        <div className="WorkPreviewComponent" title={projectName} onClick={handleClick}>
            <div className="brandColor" style={{backgroundColor: projectColor}}>
                <div className="image" style={imageOptions}></div>
            </div>
        </div>
    )
}

export default withRouter(WorkPreview)
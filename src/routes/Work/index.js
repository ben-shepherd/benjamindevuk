import React, { useState, useEffect } from 'react'
import SiteWrapperSidebar from '../../components/SiteWrapperSidebar'
import { getStorageUrl } from '../../apis/cockpit'
import '../../_scss/work.scss';

const WorkContainer = (props) => {

    const { cockpit } = props
    const { portfolio } = cockpit
    const [project, setProject] = useState(null)

    
    useEffect(() => {
        const url = props.match.path
        const projectData = portfolio.entries.find(entry => {
            return entry.route.display === url
        })

        setProject(projectData)
    }, [props.match.path])

    if(!project) {
        return null
    }
    
    const projectClassName = project.projectName.replace(/[^a-zA-Z_]+/, '').toLowerCase()

    return (
        <SiteWrapperSidebar content={(
            <div className={`WorkContainer project-${projectClassName}`}>
                <Work {...props} project={project} />
            </div>
        )} />
    )
}

const Work = (props) => {
    const { project } = props

    const has = (key) => (typeof project[key] !== 'undefined' && project[key] !== null)
    const hasLogo = has('logo')

    return (
        <div className="WorkComponent">

            <div className="backBtn" onClick={() => props.history.push('/')}>Back</div>

            <div className="top">
                <div className="topContent">

                    {!hasLogo ? (
                        <h1 className="projectName" style={{color: project.projectNameColor}}>{project.projectName}</h1>
                    ) : (
                        <img class="projectLogo" src={getStorageUrl(project.logo.path)} alt={project.projectName} title={project.projectName} />
                    )}
                </div>
                <div className="bgColor" style={{backgroundColor: project.projectColor}}>
                    <div className="bgCurve"></div>
                </div>
            </div>    
            <div className="workContent">
                <div className="container">
                    <div className="text-center pb-4">
                        <a  href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
                    </div>
                    <div className="projectDescription" dangerouslySetInnerHTML={{__html: project.projectDescription}}></div>
                    
                    {has('roles') && project.roles.length ? (
                        <div className="projectRoles projectList">
                            <div className="title">Roles & Responsibilities</div>
                            <div className="roles" dangerouslySetInnerHTML={{__html: project.roles}}></div>
                        </div>
                    ) : null}

                    {has('features') && project.features.length ? (
                        <div className="projectFeatures projectList">
                            <div className="title">{project.projectName} Features</div>
                            <div className="roles" dangerouslySetInnerHTML={{__html: project.features}}></div>
                        </div>
                    ) : null}

                </div>
            </div>
        </div>
    )
}

export default WorkContainer
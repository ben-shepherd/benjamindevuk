import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import cockpitActions from '../../_actions/cockpit.action'
import SiteWrapperSidebar from '../../components/SiteWrapperSidebar'
import { getStorageUrl, hasValue } from '../../apis/cockpit'
import '../../_scss/work.scss';
import PageCurved from '../../components/PageCurved'

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

    return (
        <PageCurved
            externalNewTab={true}
            externalText={project.url}
            externalName={project.projectName}
            externalTooltip={`Visit ${project.projectName}`}
            externalUrl={project.url}
            logoText={project.projectName}
            logoColor={project.projectNameColor}
            logoUrl={hasValue('logo') ? getStorageUrl(project.logo.path) : null}
            curveColor={project.projectColor}
            content={(
                <Fragment>
                    <div className="projectDescription" dangerouslySetInnerHTML={{__html: project.projectDescription}}></div>
                    
                    {hasValue('roles') && project.roles.length ? (
                        <div className="projectRoles projectList">
                            <div className="title">Roles & Responsibilities</div>
                            <div className="roles" dangerouslySetInnerHTML={{__html: project.roles}}></div>
                        </div>
                    ) : null}

                    {hasValue('features') && project.features.length ? (
                        <div className="projectFeatures projectList">
                            <div className="title">{project.projectName} Features</div>
                            <div className="roles" dangerouslySetInnerHTML={{__html: project.features}}></div>
                        </div>
                    ) : null}
                </Fragment>
            )}
            />
    )
}

const mapState = (state) => ({
    cockpit: state.cockpit,
})
const mapDispatch = (d) => ({
    setCockpit: (p) => d(cockpitActions.cockpit(p)),
})

export default connect(mapState, mapDispatch)(WorkContainer)
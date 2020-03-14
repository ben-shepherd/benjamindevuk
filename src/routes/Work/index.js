import React, { useState, useEffect } from 'react'

const Work = (props) => {

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


    useEffect(() => {
        console.log('Work Project', {project})
    }, [project])

    useEffect(() => {
        console.log('Work props', {props})
    }, [props])

    if(!project) {
        return null
    }
    
    return (
        <div className="WorkComponent">

        </div>
    )
}

export default Work
import React from 'react'
import { useParams } from 'react-router-dom'

const Work = (props) => {

    let { id } = useParams()
    console.log('Work', {props}, {id})

    
    return (
        <div className="WorkComponent">

        </div>
    )
}

export default Work
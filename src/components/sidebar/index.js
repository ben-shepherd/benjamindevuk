import React from 'react'
import { Link } from 'react-router-dom'

export default class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar">
                <div className="top">
                    <div className="basic d-flex">
                        <div className="picture-container">
                            <div className="picture"></div>
                        </div>
                        <div className="author">
                            <h1>Benjamin</h1>
                            <h2>Website Developer</h2>
                        </div>
                    </div>
                    {/* <div className="text">
                        <h2>Freelance Web Developer</h2>
                    </div> */}
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/">About</Link></li>
                        <li><Link href="/">Work</Link></li>
                        <li><Link href="/">Contact</Link></li>
                        <li><Link href="/">Free Quote</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
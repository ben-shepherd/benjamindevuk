import React from 'react'

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
                        </div>
                    </div>
                    <div className="text">
                        <h2>Freelance Web Developer</h2>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
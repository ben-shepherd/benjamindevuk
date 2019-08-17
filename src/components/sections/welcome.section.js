import React from 'react'
import Particles from 'react-particles-js'
import config from '../../config';
import AutoType from '../AutoType'
import { Link } from 'react-router-dom'

const introTexts = [
    'A website for my business',
    'Web Crawlers',
    'Content Management System',
    'Socially Interactive Features',
    'Photo galleries',
    'Protected API(s)',
    'Automated Scripts',
    'E-Commerce & Payments',
    'Social Logins',
    'File Uploader',
    'Microservices',
    'Permissions & roles system',
    'Dynamically served content',
    'Profile customization',
    'Contact form',
    'Instant Messaging',
]


const Welcome = () => (
    <section className="Welcome full-height d-relative">
        <div className="catchy">
            <h1>Bespoke Website Solutions</h1>
            <h2>Custom tailored websites</h2>
        </div>

        <div className="intro container">
            <div className="row">
                <div className="col-12 col-md-6 offset-md-3">
                    <h3>I'm looking for...</h3>
                    <AutoType textList={introTexts} />
                </div>
            </div>
        </div>

        <div className="welcome-contact">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-4 offset-md-4">
                        <Link className="btn btn-primary" to="/contact">Get a free quote</Link>
                    </div>
                </div>
            </div>
        </div>

        <div className="logos">
            <div className="logo laravel"></div>
            <div className="logo nodejs"></div>
            <div className="logo reactjs"></div>
        </div>

        <div className="ParticlejsContainer">
            <Particles params={config.particlejs} />
        </div>

    </section>
)

export default Welcome
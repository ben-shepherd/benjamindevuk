import React from 'react'
import SiteWrapper from '../../components/SiteWrapper';

const tpma = () => (
    <SiteWrapper content={
        <section className="portfolio-page tpma">
            <div className="container-fluid">
                <div className="portfolio-title">
                    <h1>The Pension Administrator</h1>
                </div>
                <div className="portfolio-url">
                    <p><strong>Website URL</strong>: <a href="https://thepensionadministrator.com/" target="_blank" rel="noopener noreferrer">https://thepensionadministrator.com/</a></p>
                </div>

                <h4>Project description</h4>
                <p>The Pension Administrator provide a full range of support services to facilitate compliance with workplace pension legislation.</p>

                <h4>Built with</h4>
                <div className="built-with-container">
                    <div className="built-with php" title="PHP"></div>
                    <div className="built-with laravel" title="Laravel Framework"></div>
                </div>

                <h4>Features</h4>
                <ul className="feature-list">
                    <li>Administrative Dashboard</li>
                    <li>Content Management System</li>
                    <li>Fast page speed</li>
                    <li>Blog</li>
                    <li>Custom Apply form</li>
                </ul>

                <h4>Screenshots</h4>
                <div className="screenshots-container">
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/thepensionadmin1.jpg)' }}></div>
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/thepensionadmin2.jpg)' }}></div>
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/thepensionadmin3.jpg)' }}></div>
                </div>
            </div>
        </section>
    } />
)

export default tpma
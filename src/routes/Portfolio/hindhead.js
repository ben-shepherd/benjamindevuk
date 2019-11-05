import React from 'react'
import SiteWrapper from '../../components/SiteWrapper';

const hindhead = () => {
    return (
        <SiteWrapper content={
            <section className="portfolio-hindhead hindhead">
                <div className="container-fluid">
                    <div className="portfolio-title">
                        <h1>Hindhead Property</h1>
                    </div>
                    <div className="portfolio-url">
                        <p><strong>Website URL</strong>: No longer available</p>
                    </div>

                    <h4>Project description</h4>
                    <p>Hindhead property is an estate agent based in Plymouth, Devon.</p>
                    <p>It features properties to buy and let.</p>

                    <h4>Built with</h4>
                    <div className="built-with-container">
                        <div className="built-with php" title="PHP"></div>
                        <div className="built-with laravel" title="Laravel Framework"></div>
                        <div className="built-with js" title="JavaScript"></div>
                    </div>

                    <h4>Features</h4>
                    <ul className="feature-list">
                        <li>Content Management System</li>
                        <li>Daily cron to syncronise properties listing with external API</li>
                    </ul>

                    <h4>Screenshots</h4>
                    <div className="screenshots-container">
                        <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/sites/hindheadproperty.jpg)' }}></div>
                    </div>
                </div>
            </section>
        } />
    )
}

export default hindhead
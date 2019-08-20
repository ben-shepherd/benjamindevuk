import React from 'react'

const gtblitz = () => (
    <section className="portfolio-page gtblitz">
        <div className="container-fluid">
            <div className="portfolio-title">
                <h1>Tips 'N' Toes</h1>
            </div>
            <div className="portfolio-url">
                <p><strong>Website URL</strong>: <a href="https://tipsntoes.clinic/" target="_blank" rel="noopener noreferrer">https://tipsntoes.clinic</a></p>
            </div>

            <h4>Project description</h4>
            <p>Tips 'N' Toes is a beauty salon that offers a wide range of services such as nails, manicures, laser hair removal, massages and much more.</p>

            <h4>Built with</h4>
            <div className="built-with-container">
                <div className="built-with php" title="PHP"></div>
                <div className="built-with laravel" title="Laravel Framework"></div>
            </div>

            <h4>Features</h4>
            <ul className="feature-list">
                <li>Administrative Dashboard</li>
                <li>Content Management System</li>
            </ul>

            <h4>Screenshots</h4>
            <div className="screenshots-container">
                <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/tnt1.png)' }}></div>
                <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/tnt2.png)' }}></div>
                <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/tnt3.png)' }}></div>
            </div>
        </div>
    </section>
)

export default gtblitz
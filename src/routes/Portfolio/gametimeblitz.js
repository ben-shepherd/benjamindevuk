import React from 'react'

const gtblitz = () => (
    <section className="portfolio-page gtblitz">
        <div className="container-fluid">
            <div className="portfolio-title">
                <h1>GametimeBlitz</h1>
            </div>
            <div className="portfolio-url">
                <p><strong>Website URL</strong>: Private</p>
            </div>

            <h4>Project description</h4>
            <p>GametimeBlitz is a gaming App that members will play and vote against sports gameplay while visiting bars or other social areas.</p>
            <p>The purpose of this App is for the bar owners (the client) to be able to see statistics on the members who play their games. They are able to see statistics, see active, upcomming or past games.</p>
            <p>There's also a special display mode designed to allow you to display the website on a TV.</p>

            <h4>Built with</h4>
            <div className="built-with-container">
                <div className="built-with react" title="React JavaScript Library"></div>
            </div>

            <h4>Features</h4>
            <ul className="feature-list">
                <li>Mobile & Tablet ready</li>
                <li>Fast page speed</li>
                <li>User friendly</li>
                <li>Game leaderboards & prizes</li>
                <li>A special TV mode (Temporarily hides the header bar)</li>
            </ul>

            <h4>Screenshots</h4>
            <div className="screenshots-container">
                <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/sites/gtblitz.jpg)' }}></div>
            </div>
        </div>
    </section>
)

export default gtblitz
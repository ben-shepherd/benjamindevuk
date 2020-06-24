import React from 'react'
import SiteWrapper from '../../components/SiteWrapper'

const habbocreate = () => (
    <SiteWrapper content={
        <section className="portfolio-page habbocreate">
            <div className="container-fluid">
                <div className="portfolio-title">
                    <h1>HabboCreate</h1>
                </div>
                <div className="portfolio-url">
                    <p><strong>Website URL</strong>: <a href="https://www.habbocreate.com" target="_blank" rel="noopener noreferrer"    >https://www.habbocreate.com</a></p>
                </div>

                <h4>Project description</h4>
                <p>Habbocreate is a built for purpose creative platform for <a href="https://www.habbo.com/" target="_blank" rel="noopener noreferrer">Habbo Hotel</a>, allowing users to upload, share and interact with the game in a variety of new ways. The site features some of the most advanced, unique features ever to be seen on a Habbo fansite which lead the site to become the largest, most active and engaging website for Habbo within the first year of opening.</p>
                <p>The website is now officially recognised by Habbo hotel as a fansite.</p>

                <h4>Built with</h4>
                <div className="built-with-container">
                    <div className="built-with php" title="PHP"></div>
                    <div className="built-with laravel" title="Laravel Framework"></div>
                    <div className="built-with js" title="JavaScript"></div>
                </div>

                <h4>Features</h4>
                <ul className="feature-list">
                    <li>Admin dashboard</li>
                    <li>Portal for agency members</li>
                    <li>Social features
                    <ul>
                            <li>Comments</li>
                            <li>Hearts / Likes</li>
                        </ul>
                    </li>
                    <li>User creations</li>
                    <li>User profiles
                    <ul>
                            <li>Fully customizable</li>
                            <li>Add / remove widgets</li>
                            <li>Place "Stickers"</li>
                            <li>Change colors</li>
                        </ul>
                    </li>
                    <li>Live DJ / Radio Requests</li>
                    <li>Guides / Quests</li>
                    <li>Tournaments / Site mini games</li>
                    <li>Loot Crates</li>
                    <li>Virtual shop / virtual currency</li>
                    <li>Font creator</li>
                    <li>HabboCreator (Game Avatar Designer)</li>
                    <li>Personal Messaging</li>
                    <li>Wiki</li>
                    <li>Name customization (Colors, icons)</li>
                    <li>Many many more...</li>
                </ul>

                <h4>Screenshots</h4>
                <div className="screenshots-container">
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/habbocreate1.jpg)' }}></div>
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/habbocreate2.jpg)' }}></div>
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/habbocreate3.jpg)' }}></div>
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/habbocreate4.jpg)' }}></div>
                    <div className="screenshot bg-left" style={{ backgroundImage: 'url(/img/portfolio/screenshots/habbocreate5.jpg)' }}></div>
                    <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/habbocreate6.jpg)' }}></div>
                </div>
            </div>
        </section>
    } />
)

export default habbocreate
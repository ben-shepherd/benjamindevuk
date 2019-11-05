import React from 'react'
import SiteWrapper from '../../components/SiteWrapper';

const kaitenbun = () => {
    return (
        <SiteWrapper content={
            <section className="portfolio-kaitenbun hindhead">
                <div className="container-fluid">
                    <div className="portfolio-title">
                        <h1>Kaitenbun</h1>
                    </div>
                    <div className="portfolio-url">
                        <p><strong>Website URL</strong>: Not currently available</p>
                    </div>

                    <h4>Project description</h4>
                    <p>Kaitenbun is a web based app that was designed to help learn the Japanese language.</p>
                    <p>It features a Japanese dictionary with a built in flashcard system which allows users to review vocabulary daily.</p>

                    <h4>Built with</h4>
                    <div className="built-with-container">
                        <div className="built-with js" title="Latest JavaScript"></div>
                        <div className="built-with nodejs" title="Node.js"></div>
                        <div className="built-with react" title="React JavaScript Library"></div>
                    </div>

                    <h4>Features</h4>
                    <ul className="feature-list">
                        <li>Content Management System
                        <ul>
                                <li>Includes attaching audio files to articles</li>
                                <li>English Translations</li>
                                <li>Highlighted vocabulary (Ties in with Flashcards)</li>
                            </ul>
                        </li>
                        <li>Japanese Dictionary
                        <ul>
                                <li>A huge database of searchable Japanese Kanji</li>
                            </ul>
                        </li>
                        <li>Flashcards
                        <ul>
                                <li>Add vocabulary to your personal flashcards</li>
                                <li>Review flashcards daily</li>
                            </ul>
                        </li>
                    </ul>

                    <h4>Screenshots</h4>
                    <div className="screenshots-container">
                        <div className="screenshot bg-left" style={{ backgroundImage: 'url(/img/portfolio/screenshots/kaitenbun1.png)' }}></div>
                        <div className="screenshot bg-left" style={{ backgroundImage: 'url(/img/portfolio/screenshots/kaitenbun2.png)' }}></div>
                        <div className="screenshot bg-left" style={{ backgroundImage: 'url(/img/portfolio/screenshots/kaitenbun3.png)' }}></div>
                        <div className="screenshot" style={{ backgroundImage: 'url(/img/portfolio/screenshots/kaitenbun4.png)' }}></div>
                    </div>
                </div>
            </section>
        } />
    )
}

export default kaitenbun
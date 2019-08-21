import React from 'react'

const LARAVEL_URL = 'https://laravel.com/'
const NWKC_URL = 'https://www.northkent.ac.uk/'

const About = () => {
    return (
        <section className="About bg-dark section-padding-3 text-white">
            <div className="row">
                <div className="col-12 col-md-6 text-left">
                    <h3>— I'm Benjamin. A freelance web developer based in the UK, working with local international businesses.</h3>
                    <h2 className="mt-5">What I do</h2>

                    <div className="Services ml-3">
                        <h5 className="frontend-title">Frontend</h5>
                        <ul>
                            <li>UI/UX</li>
                            <li>Mobile/Tablet ready designs</li>
                            <li>Website layouts</li>
                            <li>Dynamic content</li>
                        </ul>
                        <h5 className="backend-title">Backend</h5>
                        <ul>
                            <li>Databases</li>
                            <li>Server-side logic</li>
                            <li>Security & Authentication</li>
                            <li>Website APIs</li>
                            <li>Server Management</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 AboutMe">
                    <div className="AboutMe">
                        {/* <h6 className="text-center">A little about me</h6> */}

                        {/* <p>I have been exposed to technology my whole life, tinkering with computers from young age.
                        In 2011 I studied Hadware, Networking and software at <a href={NWKC_URL} target="_blank" rel="noopener noreferrer">North West Kent College in Gravesend</a>.
                            During that time I had taken a massive interest into Visaul Basic, and C# programming languages and began creating
                            apps. At the height of my short C# writing career I had developed a perosonal
                        app that allowed me to track my course work and see how well I was doing overall.</p>

                        <p>It wasn't till the 2nd year that I had begun learning the core basics of web development (HTML, CSS, JavaScript). Eventually moving
                        onto backend and learning PHP, the <a href={LARAVEL_URL} target="_blank" rel="noopener noreferrer">Laravel framework</a> and creating some truly awesome websites.</p> */}
                    </div>
                    <div className="Interests">
                        <h6 className="text-center mt-5 mb-5">SKILL SET</h6>
                        <div class="interest-parent frontend">
                            <div className="title">Frontend</div>
                            <p class="interest-item">UI/UX</p>
                            <p class="interest-item">HTML</p>
                            <p class="interest-item">JavaScript (es6)</p>
                            <p class="interest-item">CSS3</p>
                            <p class="interest-item">Canvas</p>
                            <p class="interest-item">Responsive Design</p>
                            <p class="interest-item">Boostrap 3/4</p>
                            <p class="interest-item">Materializecss</p>
                            <p class="interest-item">ReactJS</p>
                        </div>
                        <div className="interest-parent backend">
                            <div className="title">Backend</div>
                            <p className="interest-item">PHP</p>
                            <p className="interest-item">Node.js</p>
                            <p className="interest-item">Express</p>
                            <p className="interest-item">APIs</p>
                            <p className="interest-item">Bots</p>
                            <p className="interest-item">Website Scrapers</p>
                            <p className="interest-item">Laravel Framework</p>
                            <p className="interest-item">Web Crawlers</p>
                            <p className="interest-item">MySQL</p>
                            <p className="interest-item">NoSQL</p>
                        </div>
                        <div className="interest-parent 3rdparty">
                            <div className="title">Third Party Support</div>
                            <p className="interest-item">Facebook</p>
                            <p className="interest-item">Twitter</p>
                            <p className="interest-item">Instagram</p>
                            <p className="interest-item">Twitch</p>
                            <p className="interest-item">Firebase</p>
                            <p className="interest-item">Amazon Bucket (S3)</p>
                        </div>
                        <div className="interest-parent os">
                            <div className="title">Server Management</div>
                            <p className="interest-item">Windows Server (Apache)</p>
                            <p className="interest-item">Ubuntu 16.04 (Apache, Nginx, MySQL, NoSQL)</p>
                            <p className="interest-item">Heroku</p>
                        </div>
                        <div className="interest-parent version-control">
                            <div className="title">Version Control</div>
                            <p className="interest-item">Git / Github / BitBucket</p>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default About
import React from 'react'
import SiteWrapper from '../../components/SiteWrapper';

const puretrees = () => {
    return (
        <SiteWrapper content={
            <section className="portfolio-puretrees puretrees">
                <div className="container-fluid">
                    <div className="portfolio-title">
                        <h1>Puretree Worktops</h1>
                    </div>
                    <h4>Project description</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat in velit ut mollis. Morbi vel imperdiet ipsum. Suspendisse vitae nibh vulputate, faucibus purus nec, viverra turpis. Cras et elit vitae diam scelerisque blandit ac eget lorem. Donec rutrum posuere dolor, eu ultricies est dapibus semper. Donec tempor velit non justo cursus accumsan. Nullam convallis massa sed sem sagittis, eu eleifend libero vehicula. Proin dictum gravida elit, ut aliquam velit interdum ac. Nunc luctus, massa id lobortis rutrum, tortor tortor interdum sapien, in tempor mi turpis vitae tortor. Ut fringilla libero nec condimentum vestibulum. Sed ut euismod sapien. Duis ut quam vel ex hendrerit dapibus hendrerit ac lectus. Cras interdum eros neque, sed lobortis diam tincidunt sed.</p>

                    <h4>Built with</h4>
                    <div className="built-with-container">
                        <div className="built-with php" title="PHP"></div>
                        <div className="built-with js" title="JavaScript"></div>
                    </div>

                    <h4>Features</h4>
                    <ul className="feature-list">
                        <li>Feature One</li>
                        <li>Feature Two</li>
                        <li>Feature Three</li>
                    </ul>
                </div>
            </section>
        } />
    )
}

export default puretrees
import React from 'react'
import urlService from '../../../_services/url.service';

const URL = urlService.routes.portfolio.gametimeblitz()
const gtblitz = (props) => (
    <div className="portfolio-item gtblitz" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/sites/gtblitz.jpg')` }}>
            <div className="portfolio-title">GametimeBlitz</div>
        </div>
    </div>
)

export default gtblitz
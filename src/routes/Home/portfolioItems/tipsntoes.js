import React from 'react'
import urlService from '../../../_services/url.service';

const URL = urlService.routes.portfolio.tipsntoes()
const thepensionadmin = (props) => (
    <div className="portfolio-item tipsntoes" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/screenshots/tnt1.png')` }}>
            <div className="portfolio-title">Tips 'N' Toes</div>
        </div>
    </div>
)

export default thepensionadmin
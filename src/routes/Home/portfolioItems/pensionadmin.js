import React from 'react'
import urlService from '../../../_services/url.service';

const URL = urlService.routes.portfolio.thepensionadmin()
const thepensionadmin = (props) => (
    <div className="portfolio-item thepensionadmin" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/screenshots/thepensionadmin1.jpg')` }}>
            <div className="portfolio-title">The Pension Administrator</div>
        </div>
    </div>
)

export default thepensionadmin
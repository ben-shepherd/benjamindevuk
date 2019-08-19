import React from 'react'
import urlService from '../../../_services/url.service';

const URL = urlService.routes.portfolio.hindhead()
const hindhead = (props) => (
    <div className="portfolio-item hindhead" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/sites/hindheadproperty.jpg')` }}>
            <div className="portfolio-title">Hindhead Property</div>
        </div>
    </div>
)

export default hindhead
import React from 'react'
import urlService from '../../../_services/url.service';

const URL = urlService.routes.portfolio.habbocreate()
const hbc = (props) => (
    <div className="portfolio-item habbocreate" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/sites/hbcv3.jpg')` }}>
            <div className="portfolio-title">HabboCreate</div>
        </div>
    </div>
)

export default hbc
import React from 'react'
import urlService from '../../../_services/url.service';

const URL = urlService.routes.portfolio.kaitenbun()
const kaitenbun = (props) => (
    <div className="portfolio-item kaitenbun" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/sites/kaitenbun.jpg')` }}>
            <div className="portfolio-title">Kaitenbun</div>
        </div>
    </div>
)

export default kaitenbun
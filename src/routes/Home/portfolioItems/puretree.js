import React from 'react'
import urlService from '../../../_services/url.service'

const URL = urlService.routes.portfolio.puretrees()

const Puretree = (props) => (
    <div className="portfolio-item puretree" onClick={() => props.onClick(URL)}>
        <div className="background" style={{ backgroundImage: `url('/img/portfolio/sites/puretreeworktops.jpg')` }}>
            <div className="portfolio-title">PureTree Worktops</div>
        </div>
    </div>
)

export default Puretree
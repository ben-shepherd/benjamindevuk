import React from 'react'
import { withRouter } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import urlService from '../../_services/url.service'

const ROUTES = urlService.routes

export default withRouter(class Sidebar extends React.Component {

    onClick = (target) => {
        if(target === 'home') {
            scroll.scrollToTop()
            this.props.history.push('/')
        }
        else {
            var el = document.querySelector(`a[name=${target}]`);
            if(el) {
                scroll.scrollTo(el.offsetTop)
                this.props.history.push({pathname: `/#${target}`})
            }
        }
    } 

    render() {
        return (
            <div className="sidebar">
                <div className="top">
                    <div className="basic d-flex">
                        <div className="picture-container">
                            <div className="picture"></div>
                        </div>
                        <div className="author">
                            <h1>Benjamin</h1>
                            <h2>Website Developer</h2>
                        </div>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><a href={ROUTES.home()} onClick={() => this.onClick('home')}>Home</a></li>
                        <li><a href={ROUTES.about()} onClick={() => this.onClick('about')}>About</a></li>
                        <li><a href={ROUTES.work()} onClick={() => this.onClick('portfolio')}>Work</a></li>
                        <li><a href={ROUTES.quote()} onClick={() => this.onClick('contact')}>Quote</a></li>
                        <li><a href={ROUTES.contact()} onClick={() => this.onClick('contact')}>Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
})
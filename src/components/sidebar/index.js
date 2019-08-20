import React from 'react'
import { withRouter } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import urlService from '../../_services/url.service'
import PhoneLinkRing from '@material-ui/icons/PhonelinkRing'
const ROUTES = urlService.routes

export default withRouter(class Sidebar extends React.Component {

    onClick = (target, e) => {
        if(typeof e !== 'undefined') {
            e.preventDefault()
        }

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
                    <div className="social">
                        <div className="phone">
                            <PhoneLinkRing /> 01234567890
                        </div>
                        <div className="social-icon facebook"></div>
                        <div className="social-icon twitter"></div>
                    </div> 
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li><a href={ROUTES.home()} onClick={(e) => this.onClick('home', e)}>Home</a></li>
                        <li><a href={ROUTES.about()} onClick={() => this.onClick('about')}>About</a></li>
                        <li><a href={ROUTES.work()} onClick={() => this.onClick('portfolio')}>Work</a></li>
                        <li><a href={ROUTES.quote()} onClick={() => this.onClick('contact')}>Quote</a></li>
                        <li><a href={ROUTES.contact()} onClick={() => this.onClick('contact')}>Contact</a></li>
                    </ul>
                </nav>
                <ul className="secondary-nav">
                    <a href={ROUTES.privacy()} >Privacy</a>
                    <a href={ROUTES.terms()}>Terms &amp; Conditions</a>
                    <a href="https://github.com/ben-shepherd" target="_blank" rel="noopener noreferrer">GitHub</a>
                </ul>
            </div>
        )
    }
})
import React from 'react'
import { withRouter } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'
import urlService from '../../_services/url.service'
import PhoneLinkRing from '@material-ui/icons/PhonelinkRing'
import MenuIcon from '@material-ui/icons/Menu';
const ROUTES = urlService.routes

export default withRouter(class Sidebar extends React.Component {
    state = {
        mobileMenuOpen: false,
    }

    handleMobileMenu = () => this.setState({ mobileMenuOpen: !this.state.mobileMenuOpen })

    onClick = (target, e) => {
        if (e) {
            e.preventDefault()
        }
        const scrollOptions = {
            delay: 0,
        }

        if (target === 'home') {
            scroll.scrollToTop(scrollOptions)
            this.props.history.push('/')
            this.setState({ mobileMenuOpen: false })
        }
        else {
            var el = document.querySelector(`a[name=${target}]`);
            if (el) {
                scroll.scrollTo(el.offsetTop, scrollOptions)
                this.props.history.push({ pathname: `/#${target}` })
                this.setState({ mobileMenuOpen: false })
            }
        }
    }

    render() {
        const { mobileMenuOpen } = this.state

        return (
            <React.Fragment>
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
                                <PhoneLinkRing /> (+44) 07775437508
                            </div>
                            <div className="email">
                                <p>hi@benjamindev.uk</p>
                            </div>
                            {/* <div className="social-icon facebook"></div>
                            <div className="social-icon twitter"></div> */}
                        </div>
                    </div>
                    <nav className="sidebar-nav">
                        {this.renderMenu()}
                    </nav>
                    {this.renderSecondaryMenu()}
                </div>
                <div className="sidebar-mobile">
                    <div className="toggle-menu" onClick={this.handleMobileMenu}>
                        <MenuIcon fontSize="large" />
                    </div>
                    <div className={`sidebar-dropdown ${mobileMenuOpen ? 'active' : ''}`}>
                        {this.renderMenu()}
                        {this.renderSecondaryMenu()}
                    </div>
                </div>
            </React.Fragment>
        )
    }

    renderMenu() {
        return (
            <ul>
                <li><a href={ROUTES.home()} onClick={(e) => this.onClick('home', e)}>Home</a></li>
                <li><a href={ROUTES.about()} onClick={() => this.onClick('about')}>About</a></li>
                <li><a href={ROUTES.work()} onClick={() => this.onClick('portfolio')}>Work</a></li>
                <li><a href={ROUTES.quote()} onClick={() => this.onClick('contact')}>Quote</a></li>
                <li><a href={ROUTES.contact()} onClick={() => this.onClick('contact')}>Contact</a></li>
            </ul>
        )
    }

    renderSecondaryMenu() {
        return (
            <ul className="secondary-nav">
                <a href={ROUTES.privacy()} target="_blank" rel="noopener noreferrer">Privacy</a>
                <a href={ROUTES.terms()} target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a>
                <a href="https://github.com/ben-shepherd" target="_blank" rel="noopener noreferrer">GitHub</a>
            </ul>
        )
    }
})
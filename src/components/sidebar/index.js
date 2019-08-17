import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'


export default withRouter(class Sidebar extends React.Component {

    componentDidMount() {
        console.log('Sidebar mounted', {props: this.props})
    }

    onClick = (e, target) => {
        e.preventDefault()
        console.log('onClick', {e, target}, e.target)

        if(target === 'home') {
            scroll.scrollToTop()
            this.props.history.push('/')
            return
        }

        var el = document.querySelector(`a[name=${target}]`);

        if(el) {
            scroll.scrollTo(el.offsetTop)
            this.props.history.push({pathname: `/#${target}`})
        }

        return false
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
                        <li><Link href="/" onClick={(e) => this.onClick(e, 'home')}>Home</Link></li>
                        <li><Link href="/#about" onClick={(e) => this.onClick(e, 'about')}>About</Link></li>
                        <li><Link href="/#portfolio" onClick={(e) => this.onClick(e, 'portfolio')}>Work</Link></li>
                        <li><Link href="/#contact" onClick={(e) => this.onClick(e, 'contact')}>Contact</Link></li>
                        <li><Link href="/#contact" onClick={(e) => this.onClick(e, 'contact')}>Free Quote</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
})
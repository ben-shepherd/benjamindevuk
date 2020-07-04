import React from 'react'
import propTypes from 'prop-types'
import { Tooltip, IconButton } from '@material-ui/core'
import VisitIcon from '@material-ui/icons/CallMissedOutgoing';
import './PageCurved.scss'

const PageCurved = (props) => {

    let {
        className,
        externalText,
        externalName,
        externalUrl,
        externalNewTab,
        logoUrl,
        logoText,
        logoColor,
        curveColor,
        content
    } = props


    /**
     * Use provided class name
     * Or generate from externalName
     */
    const getClassName = () => externalName.replace(/[^a-zA-Z_]/, '').toLowerCase()
    className = typeof className === 'undefined' ? '' : className;
    className = typeof externalName !== 'undefined' && className === '' ? getClassName() : '';

    externalNewTab = typeof externalNewTab === 'undefined' ? false : externalNewTab;
    logoColor = typeof logoColor === 'undefined' ? '#fff' : logoColor;
    curveColor = typeof curveColor === 'undefined' ? '#000007' : curveColor;

    const has = (v) => (typeof v !== 'undefined' && v !== null)
    const hasLogo = has('logo')

    React.useEffect(() => {
        console.log('PageCurved props', {props})
    }, [props])

    return (
        <div className="PageCurvedContainer">
            <div className={`PageCurved ${className}`}>
                <div className="top">
                    <div className="topContent">

                        {hasLogo ? (
                            <h1 className="PageCurvedLogo" style={{color: logoColor}}>{logoText}</h1>
                        ) : (
                            <img class="PageCurvedLogo" src={logoUrl} alt={logoText} title={logoText} />
                        )}
                    </div>
                    <div className="bgColor" style={{backgroundColor: curveColor}}>
                        <div className="bgCurve"></div>
                    </div>
                </div>    

                <div className="PageContent">
                    <div className="container">
                        
                        {typeof externalName !== 'undefined' && externalUrl !== 'undefined' ? (
                            <div className="text-center pb-4">
                                <p className="external-text">{externalText}</p>
                                <Tooltip title={`${externalName}`} aria-label="visit">
                                    <IconButton onClick={() => window.open(externalUrl, externalNewTab ? '_blank' : '_self')} aria-label={`Visit ${externalName}`}>
                                        <VisitIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        ) : null}
                        
                        <div className="PageBody">
                            {content}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

PageCurved.propTypes = {
    className: propTypes.string,

    externalNewTab: propTypes.bool,
    externalText: propTypes.string,
    externalName: propTypes.string,
    externalTooltip: propTypes.string,
    externalUrl: propTypes.string,

    logoUrl: propTypes.string,
    logoText: propTypes.string.isRequired,
    logoColor: propTypes.string,
    curveColor: propTypes.string,

    content: propTypes.element,
}

export default PageCurved
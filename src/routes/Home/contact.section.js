import React from 'react'
import fetch from '../../_services/api.service'
import FormContact from './contact/contact'
import FormQuote from './contact/quote'
import appAction from '../../_actions/app.action'
import Button from '@material-ui/core/Button'
import './contact.scss';

const NetworkError = () => (
    <React.Fragment>
        <div>
            <p>There was a problem connecting, if this problem persists please contact us manually.</p>
            <a href="mailto:hi@benjamindev.uk">hi@benjamindev.uk</a>
        </div>
    </React.Fragment>
)

export default class Contact extends React.Component {
    state = {
        showContactForm: true,
    }

    handleFormToggle = () => {
        this.setState({ showContactForm: !this.state.showContactForm })
    }

    render() {
        const { showContactForm } = this.state

        return (
            <section className="Contact">
                <div className="pre-contact section-dark">
                    <div className="section-title">
                        <h1>Get in touch with Benjamin</h1>
                        <a href="mailto:hi@benjamindev.uk">hi@benjamindev.uk</a>
                        <p>Available Monday through Friday (9AM - 10PM)</p>
                    </div>
                </div>
                <div className="form-selection-container d-flex">
                    <div className="text">
                        {showContactForm ? (
                            <React.Fragment>
                                <h3><strong>Contact</strong> / Quote</h3>
                                <div className="seperator"></div>
                                <p>Get in touch with Benjamin</p>
                                <Button variant="contained" color="primary" onClick={this.handleFormToggle}>Get a quote</Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h3>Contact / <strong>Quote</strong></h3>
                                <div className="seperator"></div>
                                <p>Project Enquiries </p>
                                <Button variant="contained" color="secondary" onClick={this.handleFormToggle}>Leave a message</Button>
                            </React.Fragment>
                        )}
                        <div className="mb-3"></div>
                    </div>
                </div>

                <FormContact showForm={showContactForm} />
                <FormQuote showForm={!showContactForm} />
            </section>
        )
    }
}
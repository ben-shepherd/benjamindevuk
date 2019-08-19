import React from 'react'
import Button from '@material-ui/core/Button';

import FormContact from './contact/contact'
import FormQuote from './contact/quote'

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
                <div className="pre-contact">
                    <div className="section-title">
                        <h1>Get in touch with Benjamin</h1>
                    </div>
                </div>
                <div className="form-selection-container d-flex">
                    <div className="text">
                        {showContactForm ? (
                            <React.Fragment>
                                <h3><strong>Contact</strong> / Quote</h3>
                                <p>Got a project in mind?</p>
                                <Button variant="contained" color="primary" onClick={this.handleFormToggle}>Get a quote</Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h3>Contact / <strong>Quote</strong></h3>
                                <p>Need to get in touch?</p>
                                <Button variant="contained" color="secondary" onClick={this.handleFormToggle}>Leave a message</Button>
                            </React.Fragment>
                        )}
                    </div>
                </div>

                <FormContact showForm={showContactForm} />
                <FormQuote showForm={!showContactForm} />
            </section>
        )
    }
}
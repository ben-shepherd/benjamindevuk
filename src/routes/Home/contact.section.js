import React from 'react'
import Button from '@material-ui/core/Button';
import fetch from '../../_services/api.service'
import FormContact from './contact/contact'
import FormQuote from './contact/quote'
import appAction from '../../_actions/app.action'

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

    submitMessage = async (formData) => {
        console.log({formData})
        if(formData.body.length < 50) {
            appAction.createModal('Message is too short')
            return
        }

        fetch('contact/message', formData).then(response => {
            if(response.status) {
                appAction.createModalTitle(
                    'Successfully sent',
                    <React.Fragment>
                        <p>Your message has been sent.</p> 
                        <p>We'll get back to you as soon as possible during the work week.<br /> (Monday - Friday)</p>
                    </React.Fragment>
                )
            }
            return Promise.resolve()
        })
        .catch(err => {
            console.log(err, err.code)
            if(err.message === 'Network Error') {
                appAction.createModalTitle('Whoops...', <NetworkError />)
            }
            else {
                appAction.createModalTitle('Unsuccessful', 'Please make sure you have entered your name, email and message.')
            }
            return Promise.resolve()
        })
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
                        {/* {showContactForm ? (
                            <React.Fragment>
                                <h3><strong>Contact</strong> / Quote</h3>
                                <div className="seperator"></div>
                                <p>Got a project in mind?</p>
                                <Button variant="contained" color="primary" onClick={this.handleFormToggle}>Get a quote</Button>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <h3>Contact / <strong>Quote</strong></h3>
                                <div className="seperator"></div>
                                <p>Need to get in touch?</p>
                                <Button variant="contained" color="secondary" onClick={this.handleFormToggle}>Leave a message</Button>
                            </React.Fragment> */}
                            <h3>Leave a message</h3>
                            <div className="seperator"></div>
                    </div>
                </div>

                <FormContact showForm={showContactForm} onSubmit={this.submitMessage} />
                <FormQuote showForm={!showContactForm} />
            </section>
        )
    }
}
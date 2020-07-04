import React, { useState} from 'react'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import appAction from '../../../_actions/app.action'
import fetch from '../../../_services/api.service'

const Form = (props) => {

    const [state, setState] = useState({
        formData: {
            name: '',
            email: '',
            body: '',
        },
        submitting: false,
        completed: false
    })

    const {
        name,
        email,
        body
    } = state.formData
    const { showForm } = props
    const { submitting } = state

    const handleChange = (e) => {
        setState({
            ...state,
            formData: {
                ...state.formData,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = async (e) => {
        if(typeof e !== 'undefined') {
            e.preventDefault()
        }

        if(!name.length || !email.length || body.length < 26) {
            appAction.createModalTitle('Unsuccessful', 'Please make sure you have entered your name, email and message.')
        }
        
        try {
            setState({...state, submitting: true})
            const response = await fetch('mail', state.formData)
            
            if(response['status']) {
                setState({...state, submitting: false, completed: true})
            }
        }
        catch (err) {
            appAction.createModalTitle('Whoops', err.toString())
        }
    
    }

    var bodyCountClassName = body.length || body.length < 25 ? 'too-short' : ''
    bodyCountClassName = body.length > 25 ? 'good' : bodyCountClassName

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-offset-10 offset-sm-1 col-md-6 offset-md-3">
                    <form className={`ContactForm ${showForm ? 'active' : 'hidden'}`} onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Your Name</label>
                            <input type="text" name="name" className="form-control" required placeholder="Name" value={name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Your Email</label>
                            <input type="email" name="email" className="form-control" required placeholder="Email Address" value={email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label>Write your message</label>
                            <textarea name="body" className="form-control" placeholder="Write your message" value={body} onChange={handleChange} required maxLength={2000} />
                            {body.length ? (
                                <div className={`body-count ${bodyCountClassName}`}>
                                    {body.length}/2000
                                </div>
                            ) : null}
                        </div>

                        {!state.completed ? (
                            <div className="formButtons">
                                <Button variant="contained" color="primary" className="pull-right" type="submit" disabled={submitting}>Send Message</Button>
                            </div>
                        ) : null}

                        <div className={`enquiry-loading ${state.submitting ? 'active' : ''}`}>
                            <CircularProgress />
                        </div>

                        <div className={`enquiry-completed text-center ${state.completed ? 'active' : ''}`}>
                            <div className  ="icon">
                                <CheckIcon />
                            </div>
                            <p>Yourn message has been sent.</p>
                            <p>I will get back to you as soon as possible.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
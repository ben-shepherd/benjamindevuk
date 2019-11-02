import React from 'react'
import Button from '@material-ui/core/Button';
import LoopIcon from '@material-ui/icons/Loop';

class Form extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            body: '',
        },
        submitting: false,
    }

    handleChange = (e)  => {
        const { name, value } = e.target
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value,
            }
        })
    }

    render() {
        const { showForm } = this.props
        const { submitting } = this.state 
        const { name, email, body } = this.state.formData

        const handleSubmit = async (e) => {
            e.preventDefault()
            this.setState({submitting: true})
            
            this.props.onSubmit({
                name, email, body
            })

            this.setState({submitting: false})
        }

        var bodyCountClassName = body.length || body.length < 50 ? 'too-short' : ''
        bodyCountClassName = body.length > 50 ? 'good' : bodyCountClassName

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-offset-10 offset-sm-1 col-md-6 offset-md-3">
                        <form className={`ContactForm ${showForm ? 'active' : 'hidden'}`} onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Your Name</label>
                                <input type="text" name="name" className="form-control" required placeholder="Name" value={name} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Your Email</label>
                                <input type="email" name="email" className="form-control" required placeholder="Email Address" value={email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Write your message</label>
                                <textarea name="body" className="form-control" placeholder="Write your message" value={body} onChange={this.handleChange} required maxLength={2000} />
                                {body.length ? (
                                    <div className={`body-count ${bodyCountClassName}`}>
                                        {body.length}/2000
                                    </div>
                                ) : null}
                            </div>

                            <div className={`submitting ${submitting ? 'active' : ''}`}>
                                <LoopIcon />
                                <p>Sending Message...</p>
                            </div>

                            <Button variant="contained" color="primary" className="pull-right" type="submit" disabled={submitting}>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
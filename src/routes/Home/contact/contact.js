import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
    state = {
        formData: {
            name: '',
            email: '',
            body: '',
        }
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
        const { name, email, body } = this.state.formData

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-offset-10 offset-sm-1 col-md-6 offset-md-3">
                        <form className={`ContactForm ${showForm ? 'active' : 'hidden'}`}>
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
                                <textarea name="body" className="form-control" placeholder="Write your message" value={body} onChange={this.handleChange} />
                            </div>
                            <Button variant="contained" color="primary" className="pull-right">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
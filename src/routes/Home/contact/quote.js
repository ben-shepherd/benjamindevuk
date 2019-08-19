import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Form extends React.Component {
    state = {
        step: 1,
        formData: {
            name: '',
            email: '',
            home_phone: '',
            mobile_phone: '',
            skype: '',
            discord: '',
            project_description: '',
        }
    }

    getStepClassName = (currentStep) => {
        return this.state.step === currentStep ? 'active' : 'hidden'
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

    handleNextStep = () => this.setState({step: this.state.step + 1})

    handlePrevStep = () => this.setState({step: this.state.step - 1})

    render() {
        const { showForm } = this.props

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-offset-10 offset-sm-1 col-md-6 offset-md-3">
                        <form className={`ContactForm ${showForm ? 'active' : 'hidden'}`}>
                            {this.renderStepOne()}
                            {this.renderStepTwo()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }

    renderStepOne() {
        const {
            name,
            email,
            home_phone,
            mobile_phone,
            skype,
            discord,
        } = this.state.formData

        return (
            <div className={`form-step one ${this.getStepClassName(1)}`}>
                <h4 className="mb-3 text-center">Let's find out your contact details first...</h4>
                <div className="form-group">
                    <label>Your Name <span className="req">*</span></label>
                    <input type="text" name="name" className="form-control" placeholder="Name" required
                        value={name} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Your Email <span className="req">*</span></label>
                    <input type="email" name="email" className="form-control" placeholder="Email Address" required
                        value={email} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Home Phone (Optional)</label>
                    <input name="home_phone" className="form-control" placeholder="Telephone"
                        value={home_phone} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Mobile Phone (Optional)</label>
                    <input name="mobile_phone" className="form-control" placeholder="Mobile"
                        value={mobile_phone} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Skype (Optional)</label>
                    <input name="skype" className="form-control" placeholder="Skype Username or Email"
                        value={skype} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Discord (Optional)</label>
                    <input name="discord" className="form-control" placeholder="Username#5678"
                        value={discord} onChange={this.handleChange} />
                </div>
                <Button variant="contained" color="primary" className="pull-right" onClick={this.handleNextStep}>Next Step</Button>
            </div>
        )
    }

    renderStepTwo() {
        const { project_description } = this.state.formData

        return (
            <div className={`form-step two ${this.getStepClassName(2)}`}>
                <div className="text-center">
                    <h4>Describe your project</h4>
                    <p>In as much detail as you can, tell me about your project.</p>
                </div>
                <div className="form-group mb-3">
                    <textarea name="project_description" style={{height:'200px'}} className="form-control" placeholder="Describe your project..."
                        value={project_description} onChange={this.handleChange}></textarea>
                </div>

                <Button variant="contained" color="primary" className="pull-left" onClick={this.handlePrevStep}>Edit contact details</Button>
                <Button variant="contained" color="primary" className="pull-right">Next Step</Button>
            </div>
        )
    }
}

export default Form
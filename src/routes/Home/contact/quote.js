import React, { Fragment, useState } from 'react'
import Button from '@material-ui/core/Button';
import appActions from '../../../_actions/app.action'
import fetch from '../../../_services/api.service'
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';

const Form = (props) => {

    const [state, setState] = useState({
        step: 1,
        formData: {
            name: '',
            email: '',
            home_phone: '',
            mobile_phone: '',
            skype: '',
            discord: '',
            project_description: '',
        },
        submitting: false,
    });
    const { showForm } = props
    const {
        name,
        email,
        home_phone,
        mobile_phone,
        skype,
        discord,
        project_description,
    } = state.formData
    const {
        submitting,
        completed
    } = state

    const getStepClassName = (currentStep) => {
        return state.step === currentStep ? 'active' : 'hidden'
    }

    const handleChange = (e)  => {
        const { name, value } = e.target
        setState({
            ...state,
            formData: {
                ...state.formData,
                [name]: value,
            }
        })
    }

    const handleStep1Complete = () => {
        if(!state.formData.name.length || !state.formData.email.length) {
            appActions.createModal(
                <Fragment>
                    <p>Name is marked as required.</p>
                    <p>Email address is marked as required.</p>
                </Fragment>
            )
            return;
        }
        handleNextStep();
    }

    const handleStep2Complete = async () => {
        try {
            if(state.formData.project_description.length < 21) {
                appActions.createModal(
                    <Fragment>
                        <p>Your project description is too short. Add some more details and try again.</p>
                    </Fragment>
                )
                return;
            }

            setState({...state, submitting: true})
            const response = await fetch('enquiry', state.formData)

            if(response.status) {
                setState({...state, completed: true, submitting: false})
            }
        }
        catch (err) {
            setState({...state, submitting: false})
            appActions.createModal(
                <Fragment>
                    <p>Something went wrong...</p>
                    {err.toString()}
                </Fragment>
            )
        }
    }

    const handleNextStep = () => setState({...state, step: state.step + 1})

    const handlePrevStep = () => setState({...state, step: state.step - 1})

    const renderStep = () => {
        if(state.step === 1) {
            return (
                <div className={`form-step one ${getStepClassName(1)}`}>
                    <h4 className="mb-3 text-center">Let's find out your contact details first...</h4>
                    <div className="form-group">
                        <label>Your Name <span className="req">*</span></label>
                        <input type="text" name="name" className="form-control" placeholder="Name" required
                            value={name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Your Email <span className="req">*</span></label>
                        <input type="email" name="email" className="form-control" placeholder="Email Address" required
                            value={email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Home Phone (Optional)</label>
                        <input name="home_phone" className="form-control" placeholder="Telephone"
                            value={home_phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mobile Phone (Optional)</label>
                        <input name="mobile_phone" className="form-control" placeholder="Mobile"
                            value={mobile_phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Skype (Optional)</label>
                        <input name="skype" className="form-control" placeholder="Skype Username or Email"
                            value={skype} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Discord (Optional)</label>
                        <input name="discord" className="form-control" placeholder="Username#5678"
                            value={discord} onChange={handleChange} />
                    </div>
                    <Button variant="contained" color="primary" className="pull-right" onClick={handleStep1Complete}>Next Step</Button>
                </div>
            )
        }
        if(state.step === 2) {
            var bodyCountClassName = project_description.length || project_description.length < 25 ? 'too-short' : ''
            bodyCountClassName = project_description.length > 25 ? 'good' : bodyCountClassName

            return (
                <div className={`form-step two ${getStepClassName(2)}`}>
                    <div className="text-center">
                        <h4>Describe your project</h4>
                        <p>In as much detail as you can provide, describe your project and provide all necessary information for the most accurate quote.</p>
                    </div>
                    <div className="form-group mb-3">
                        <textarea name="project_description" style={{height:'200px'}} className="form-control" placeholder="Describe your project..."
                            value={project_description} onChange={handleChange}></textarea>

                        {project_description.length ? (
                            <div className={`body-count ${bodyCountClassName}`}>
                                {project_description.length}/2000
                            </div>
                        ) : null}
                    </div>

                    {!state.completed ? (
                        <div className="formButtons">
                            <Button variant="contained" color="primary" className="float-left" disabled={submitting || completed} onClick={handlePrevStep}>Edit contact details</Button>
                            <Button variant="contained" color="primary" className="float-right" disabled={submitting || completed} onClick={handleStep2Complete}>Send Enquiry</Button>
                        </div>
                    ) : null}

                    <div className={`enquiry-loading ${state.submitting ? 'active' : ''}`}>
                        <CircularProgress />
                    </div>

                    <div className={`enquiry-completed text-center ${state.completed ? 'active' : ''}`}>
                        <div className  ="icon">
                            <CheckIcon />
                        </div>
                        <p>Your enquiry has been sent.</p>
                        <p>I will get back to you as soon as possible.</p>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-offset-10 offset-sm-1 col-md-6 offset-md-3">
                    <form className={`ContactForm ${showForm ? 'active' : 'hidden'}`}>
                        {renderStep()}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
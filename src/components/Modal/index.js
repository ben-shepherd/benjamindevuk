import React from 'react'
import { connect } from 'react-redux'
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core'
import appActions from '../../_actions/app.action'

export const Button = (props) => {
    return (
        <button className={`btn ${props.className || ''}`} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export const DefaultButton = () => {
    return <Button className="btn-primary" text="Okay" onClick={appActions.hideModal} />
}

const Modal = (props) => {
    const { title, body, buttons } = props.modal
    console.log('Modal', {title, body, buttons})
    if(!body) {
        return null;
    }

    return (
        <Dialog
            open={body}
            fullWidth={true}
            maxWidth={'sm'}>
            <React.Fragment>
                {title ? (
                    <DialogTitle>
                        <p>{title}</p>
                    </DialogTitle>
                ) : null}

                <DialogContent>
                    {body}
                </DialogContent>

                <DialogActions>
                    {buttons}
                </DialogActions>
            </React.Fragment>
        </Dialog>
    )
}

const mapState = (state) => ({
    modal: state.app.modal,
})
const connected = connect(mapState)(Modal)

export default connected

import cockpitActions from '../_actions/cockpit.action';

const initialState = {
    loaded: false,
    routes: null,
    welcome: null,
    portfolio: null,
}

const app = (state = initialState, action) => {
    switch (action.type) {
        case cockpitActions.COCKPIT:
            return {
                ...state,
                ...action.payload,
                loaded: true,
            }
        default:
            return state
    }
}

export default app
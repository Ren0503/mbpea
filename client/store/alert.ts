import {
    Alert,
    AlertTypes,
    AlertAlignment,
    AlertActionTypes,
    OPEN_ALERT,
    CLOSE_ALERT,
} from 'interfaces';

// Actions
export function openAlert(alert: Alert): AlertActionTypes {
    return {
        type: OPEN_ALERT,
        payload: alert
    };
}

export function closeAlert(): AlertActionTypes {
    return {
        type: CLOSE_ALERT,
    };
}

// Reducer
const initialState: Alert = {
    message: null,
    type: AlertTypes.Success,
    autoClose: true,
    alignment: AlertAlignment.Top,
};

export function alertReducer(state = initialState, action: AlertActionTypes): Alert {
    switch (action.type) {
        case OPEN_ALERT:
            return {
                ...state,
                ...action.payload,
            };
        case CLOSE_ALERT:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}
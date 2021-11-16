import {
    AuthUser,
    AuthState,
    PopupType,
    AuthActionTypes,
    ADD_USER_COVER,
    ADD_USER_FOLLOWING,
    ADD_USER_IMAGE,
    ADD_USER_NOTIFICATION,
    CLEAN_USER_NOTIFICATIONS,
    CLEAR_AUTH_USER,
    CLOSE_AUTH_POPUP,
    OPEN_AUTH_POPUP,
    REMOVE_USER_FOLLOWING,
    REMOVE_USER_NOTIFICATION,
    SET_AUTH_USER,
    SET_SOCKET,
    SET_TOKEN,
} from 'interfaces';
import { Socket } from 'socket.io-client';

// Actions
export function setAuthUser(user: AuthUser): AuthActionTypes {
    return {
        type: SET_AUTH_USER,
        payload: user,
    };
}

export function setToken(token: string): AuthActionTypes {
    return {
        type: SET_TOKEN,
        payload: token,
    };
}

export function setSocket(socket: Socket): AuthActionTypes {
    return {
        type: SET_SOCKET,
        payload: socket,
    };
}

export function clearAuthUser(): AuthActionTypes {
    return {
        type: CLEAR_AUTH_USER,
    };
}

export function openAuthPopup(popupType: PopupType): AuthActionTypes {
    return {
        type: OPEN_AUTH_POPUP,
        payload: popupType,
    };
}

export function closeAuthPopup(): AuthActionTypes {
    return {
        type: CLOSE_AUTH_POPUP,
    };
}

export function addUserNotification(notification: any): AuthActionTypes {
    return {
        type: ADD_USER_NOTIFICATION,
        payload: notification,
    };
}

export function removeUserNotification(id: string): AuthActionTypes {
    return {
        type: REMOVE_USER_NOTIFICATION,
        payload: id,
    };
}

export function cleanUserNotifications(): AuthActionTypes {
    return {
        type: CLEAN_USER_NOTIFICATIONS,
    };
}

export function addUserImage({ image: image, imagePublicId: imagePublicId }): AuthActionTypes {
    return {
        type: ADD_USER_IMAGE,
        payload: { image, imagePublicId },
    };
}

export function addUserCover({ coverImage: coverImage, coverImagePublicId: coverImagePublicId }): AuthActionTypes {
    return {
        type: ADD_USER_COVER,
        payload: { coverImage, coverImagePublicId },
    };
}

export function addUserFollowing(follow: any): AuthActionTypes {
    return {
        type: ADD_USER_FOLLOWING,
        payload: follow,
    };
}

export function removeUserFollowing(id: string): AuthActionTypes {
    return {
        type: REMOVE_USER_FOLLOWING,
        payload: id,
    };
}

// Reducer
const initialState: AuthState = {
    user: null,
    token: null,
    socket: null,
    popupType: null,
    isPopupOpen: false,
};

export function authReducer(state = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.payload,
            }
        case CLEAR_AUTH_USER:
            return {
                ...state,
                user: null,
            };
        case SET_SOCKET:
            return {
                ...state,
                socket: action.payload,
            };
        case OPEN_AUTH_POPUP:
            return {
                ...state,
                isPopupOpen: true,
                popupType: action.payload,
            };
        case CLOSE_AUTH_POPUP:
            return {
                ...state,
                isPopupOpen: false,
            };
        case ADD_USER_NOTIFICATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    notifications: [...state.user.notifications, action.payload],
                },
            };
        case REMOVE_USER_NOTIFICATION:
            return {
                ...state,
                user: {
                    ...state.user,
                    notifications: state.user.notifications.filter((n: any) => n._id !== action.payload),
                },
            };
        case ADD_USER_FOLLOWING:
            return {
                ...state,
                user: {
                    ...state.user,
                    following: [...state.user.following, action.payload],
                },
            };
        case REMOVE_USER_FOLLOWING:
            return {
                ...state,
                user: {
                    ...state.user,
                    following: state.user.following.filter((f: any) => f._id !== action.payload),
                },
            };
        case CLEAN_USER_NOTIFICATIONS:
            return {
                ...state,
                user: {
                    ...state.user,
                    notifications: [],
                },
            };
        case ADD_USER_IMAGE:
            return {
                ...state,
                user: {
                    ...state.user,
                    image: action.payload.image,
                    imagePublicId: action.payload.imagePublicId,
                },
            };
        case ADD_USER_COVER:
            return {
                ...state,
                user: {
                    ...state.user,
                    coverImage: action.payload.coverImage,
                    coverImagePublicId: action.payload.coverImagePublicId,
                },
            };
        default:
            return state;
    }
}
import { UserRole } from 'constants/types';
import { Socket } from 'socket.io-client';

export interface AuthUser {
    _id: string;
    role: UserRole;
    email?: string;
    username?: string;
    image?: string;
    imagePublicId?: string;
    coverImagePublicId?: string;
    coverImage?: string;
    fullName?: string;
    facebookId?: string;
    googleId?: string;
    githubId?: string;
    about?: string;
    website?: string;
    notifications: any[];
    followers: any[];
    following: any[];
    isOnline: boolean;
};

export enum PopupType {
    Sign_Up = 'SIGN_UP',
    Log_In = 'LOG_IN',
    Forgot_Password = 'FORGOT_PASSWORD',
};

export interface AuthState {
    user: AuthUser | null;
    socket: Socket | null;
    token: string | null;
    isPopupOpen: boolean;
    popupType: null | PopupType;
};

export const SET_AUTH_USER = 'SET_AUTH_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_SOCKET = 'SET_SOCKET';
export const CLEAR_AUTH_USER = 'CLEAR_AUTH_USER';
export const OPEN_AUTH_POPUP = 'OPEN_AUTH_POPUP';
export const CLOSE_AUTH_POPUP = 'CLOSE_AUTH_POPUP';
export const ADD_USER_NOTIFICATION = 'ADD_USER_NOTIFICATION';
export const REMOVE_USER_NOTIFICATION = 'REMOVE_USER_NOTIFICATION';
export const CLEAN_USER_NOTIFICATIONS = 'CLEAN_USER_NOTIFICATIONS';
export const ADD_USER_IMAGE = 'ADD_USER_IMAGE';
export const ADD_USER_COVER = 'ADD_USER_COVER';
export const ADD_USER_FOLLOWING = 'ADD_USER_FOLLOWING';
export const REMOVE_USER_FOLLOWING = 'REMOVE_USER_FOLLOWING';

export interface setAuthUserAction {
    type: typeof SET_AUTH_USER;
    payload: AuthUser;
};

export interface clearAuthUserAction {
    type: typeof CLEAR_AUTH_USER;
};

export interface setTokenAction {
    type: typeof SET_TOKEN;
    payload: string;
};

export interface setSocketAction {
    type: typeof SET_SOCKET;
    payload: Socket;
};

export interface openAuthPopupAction {
    type: typeof OPEN_AUTH_POPUP;
    payload: PopupType;
};

export interface closeAuthPopupAction {
    type: typeof CLOSE_AUTH_POPUP;
};

export interface addUserNotificationAction {
    type: typeof ADD_USER_NOTIFICATION;
    payload: any;
};

export interface removeUserNotificationAction {
    type: typeof REMOVE_USER_NOTIFICATION;
    payload: string;
};

export interface cleanUserNotificationsAction {
    type: typeof CLEAN_USER_NOTIFICATIONS;
};

export interface addUserImageAction {
    type: typeof ADD_USER_IMAGE;
    payload: any;
};

export interface addUserCoverAction {
    type: typeof ADD_USER_COVER;
    payload: any;
};

export interface addUserFollowingAction {
    type: typeof ADD_USER_FOLLOWING;
    payload: any;
};

export interface removeUserFollowingAction {
    type: typeof REMOVE_USER_FOLLOWING;
    payload: string;
};

export type AuthActionTypes =
    | setAuthUserAction
    | setTokenAction
    | clearAuthUserAction
    | openAuthPopupAction
    | closeAuthPopupAction
    | addUserNotificationAction
    | removeUserNotificationAction
    | cleanUserNotificationsAction
    | addUserFollowingAction
    | removeUserFollowingAction
    | setSocketAction
    | addUserImageAction
    | addUserCoverAction;
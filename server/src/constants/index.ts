export const NotificationType = {
    LIKE: 'LIKE',
    FOLLOW: 'FOLLOW',
    COMMENT: 'COMMENT',
    MESSAGE: 'MESSAGE',
};

export const DefaultCommunity = {
    communityName: 'Mpea',
    communityLogo:
        'https://res.cloudinary.com/dsvc4kfvh/image/upload/v1635601985/logo_cg1fgm.png',
    communityLogoPublicId: '',
    primaryColor: '#919191',
    isEmailVerificationRequired: false,
};

export enum ErrorCodes {
    Bad_Request = 400,
    Un_Authorized = 401,
    Not_Found = 404,
    Internal = 500,
};

export enum ErrorMessages {
    Generic = 'Oops! Something went wrong. Please send an error report to help us improve your experience.',
};

export const Events = {
    CREATE_NOTIFICATION: 'CREATE_NOTIFICATION',
    DELETE_NOTIFICATION: 'DELETE_NOTIFICATION',
    CREATE_NOTIFICATION_REQUEST: 'CREATE_NOTIFICATION_REQUEST',
    DELETE_NOTIFICATION_REQUEST: 'DELETE_NOTIFICATION_REQUEST',
    CREATE_MESSAGE: 'CREATE_MESSAGE',
    SEND_MESSAGE: 'SEND_MESSAGE',
    REQUEST_USER_SOCKET_ID: 'REQUEST_USER_SOCKET_ID',
    SEND_USER_SOCKET_ID: 'SEND_USER_SOCKET_ID',
    SIGNAL: 'SIGNAL',
    CALL_USER: 'CALL_USER',
    ACCEPT_CALL: 'ACCEPT_CALL',
    CALL_ACCEPTED: 'CALL_ACCEPTED',
};

export const EmailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export enum Subscriptions {
    Message_Created = 'MESSAGE_CREATED',
    Is_User_Online = 'IS_USER_ONLINE',
    New_Conversation = 'NEW_CONVERSATION',
    Notification_Created_Or_Deleted = 'NOTIFICATION_CREATED_OR_DELETED',
};

export enum UserRole {
    Regular = 'Regular',
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin',
};

export interface AuthUser {
    _id?: string;
    id: string;
    role: UserRole;
    fullName?: string;
    email?: string;
    createdAt: Date;
    facebookId?: string;
    googleId?: string;
    githubId?: string;
    about?: string;
    website?: string;
};

export interface AuthSocialPayload {
    auth: 'social';
    responseType: 'success' | 'error';
    provider: 'Github' | 'Facebook' | 'Google';
    token: string;
};

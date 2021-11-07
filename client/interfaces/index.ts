export enum UserRole {
    Regular = 'Regular',
    Admin = 'Admin',
    SuperAdmin = 'SuperAdmin',
};

export interface AuthUser {
    _id: string;
    role: UserRole;
    fullName?: string;
    email?: string;
    createdAt?: Date;
    notifications: [];
    followers: [];
    following: [];
    facebookId?: string;
    googleId?: string;
    githubId?: string;
    about?: string;
    website?: string;
};

export interface Channel {
    _id?: string;
    name: string;
    authRequired: boolean;
    description?: string;
    order: number;
};

export interface Post {
    _id: string;
    title: string;
    image?: string;
    imagePublicId?: string;
    channel: Channel;
    author: any;
    createdAt: string;
    updatedAt: string;
    favorites: [];
    comments: [];
    pinned?: boolean;
};

export const NotificationType = {
    FAVORITE: 'FAVORITE',
    FOLLOW: 'FOLLOW',
    COMMENT: 'COMMENT',
    MESSAGE: 'MESSAGE',
};

export const MaxImageSize = {
    Post: 3000000,
};

export const Layout = {
    SIDEBAR_DESKTOP_WIDTH: 280,
    SIDEBAR_MOBILE_WIDTH: 240,
    HEADER_HEIGHT: 60,
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

export const DataLimit = {
    PostsByFollowing: 6,
    PostsByChannelName: 6,
    PostsByAuthorId: 6,
    Members: 40,
    AdminUsers: 40,
};

export const DefaultCommunity = {
    communityName: 'Mpea',
    communityLogo:
        'https://res.cloudinary.com/dsvc4kfvh/image/upload/v1635601985/logo_cg1fgm.png',
    communityLogoPublicId: '',
    primaryColor: '#919191',
    isEmailVerificationRequired: false,
    facebookLoginEnabled: false,
    googleLoginEnabled: false,
    githubLoginEnabled: false,
};
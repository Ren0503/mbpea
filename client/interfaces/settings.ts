export const SET_COMMUNITY_NAME = 'SET_COMMUNITY_NAME';
export const SET_COMMUNITY_LOGO = 'SET_COMMUNITY_LOGO';
export const SET_COMMUNITY_LOGO_PUBLIC_ID = 'SET_COMMUNITY_LOGO_PUBLIC_ID';
export const SET_PRIMARY_COLOR = 'SET_PRIMARY_COLOR';
export const SET_IS_EMAIL_VERIFICATION_REQUIRED = 'SET_IS_EMAIL_VERIFICATION_REQUIRED';
export const SET_FACEBOOK_LOGIN_ENABLED = 'SET_FACEBOOK_LOGIN_ENABLED';
export const SET_GOOGLE_LOGIN_ENABLED = 'SET_GOOGLE_LOGIN_ENABLED';
export const SET_GITHUB_LOGIN_ENABLED = 'SET_GITHUB_LOGIN_ENABLED';

export interface Settings {
    communityName: string;
    communityLogo: string;
    communityLogoPublicId?: string;
    primaryColor: string;
    isEmailVerificationRequired: boolean;
    facebookLoginEnabled: boolean;
    googleLoginEnabled: boolean;
    githubLoginEnabled: boolean;
};

export interface setCommunityNameActionType {
    type: typeof SET_COMMUNITY_NAME;
    payload: string;
};

export interface setCommunityLogoActionType {
    type: typeof SET_COMMUNITY_LOGO;
    payload: string;
};

export interface setCommunityLogoPublicIdActionType {
    type: typeof SET_COMMUNITY_LOGO_PUBLIC_ID;
    payload: string;
};

export interface setPrimaryColorActionType {
    type: typeof SET_PRIMARY_COLOR;
    payload: string;
};

export interface setIsEmailVerificationRequiredActionType {
    type: typeof SET_IS_EMAIL_VERIFICATION_REQUIRED;
    payload: boolean;
};

export interface setFacebookLoginEnabledActionType {
    type: typeof SET_FACEBOOK_LOGIN_ENABLED;
    payload: boolean;
};

export interface setGoogleLoginEnabledActionType {
    type: typeof SET_GOOGLE_LOGIN_ENABLED;
    payload: boolean;
};

export interface setGithubLoginEnabledActionType {
    type: typeof SET_GITHUB_LOGIN_ENABLED;
    payload: boolean;
};

export type SettingsActionTypes =
    | setCommunityNameActionType
    | setCommunityLogoActionType
    | setPrimaryColorActionType
    | setCommunityLogoPublicIdActionType
    | setIsEmailVerificationRequiredActionType
    | setFacebookLoginEnabledActionType
    | setGoogleLoginEnabledActionType
    | setGithubLoginEnabledActionType;
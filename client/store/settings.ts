import { DefaultCommunity } from 'constants/Community';
import {
    Settings,
    SettingsActionTypes,
    SET_COMMUNITY_LOGO,
    SET_COMMUNITY_LOGO_PUBLIC_ID,
    SET_COMMUNITY_NAME,
    SET_FACEBOOK_LOGIN_ENABLED,
    SET_GITHUB_LOGIN_ENABLED,
    SET_GOOGLE_LOGIN_ENABLED,
    SET_IS_EMAIL_VERIFICATION_REQUIRED,
    SET_PRIMARY_COLOR,
} from 'interfaces';

// Actions
export const setCommunityName = (name: string): SettingsActionTypes => {
    return {
        type: SET_COMMUNITY_NAME,
        payload: name,
    };
}

export const setCommunityLogo = (logo: string): SettingsActionTypes => {
    return {
        type: SET_COMMUNITY_LOGO,
        payload: logo
    };
}

export const setCommunityLogoPublicId = (id: string): SettingsActionTypes => {
    return {
        type: SET_COMMUNITY_LOGO_PUBLIC_ID,
        payload: id,
    };
}

export const setPrimaryColor = (color: string): SettingsActionTypes => {
    return {
        type: SET_PRIMARY_COLOR,
        payload: color,
    };
}

export const setIsEmailVerificationRequired = (isRequired: boolean): SettingsActionTypes => {
    return {
        type: SET_IS_EMAIL_VERIFICATION_REQUIRED,
        payload: isRequired,
    };
}

export const setFacebookLoginEnabled = (isEnabled: boolean): SettingsActionTypes => {
    return {
        type: SET_FACEBOOK_LOGIN_ENABLED,
        payload: isEnabled,
    };
}

export const setGoogleLoginEnabled = (isEnabled: boolean): SettingsActionTypes => {
    return {
        type: SET_GOOGLE_LOGIN_ENABLED,
        payload: isEnabled,
    };
}

export const setGithubLoginEnabled = (isEnabled: boolean): SettingsActionTypes => {
    return {
        type: SET_GITHUB_LOGIN_ENABLED,
        payload: isEnabled,
    };
}

// Reducer
const initialState: Settings = {
    communityName: DefaultCommunity.communityName,
    communityLogo: DefaultCommunity.communityLogo,
    communityLogoPublicId: DefaultCommunity.communityLogoPublicId,
    primaryColor: DefaultCommunity.primaryColor,
    isEmailVerificationRequired: DefaultCommunity.isEmailVerificationRequired,
    facebookLoginEnabled: DefaultCommunity.facebookLoginEnabled,
    googleLoginEnabled: DefaultCommunity.googleLoginEnabled,
    githubLoginEnabled: DefaultCommunity.githubLoginEnabled
};

export function settingsReducer(state = initialState, action: SettingsActionTypes): Settings {
    switch (action.type) {
        case SET_COMMUNITY_LOGO:
            return {
                ...state,
                communityLogo: action.payload,
            };
        case SET_COMMUNITY_LOGO_PUBLIC_ID:
            return {
                ...state,
                communityLogoPublicId: action.payload,
            };
        case SET_COMMUNITY_NAME:
            return {
                ...state,
                communityName: action.payload,
            };
        case SET_PRIMARY_COLOR:
            return {
                ...state,
                primaryColor: action.payload,
            };
        case SET_IS_EMAIL_VERIFICATION_REQUIRED:
            return {
                ...state,
                isEmailVerificationRequired: action.payload,
            };
        case SET_FACEBOOK_LOGIN_ENABLED:
            return {
                ...state,
                facebookLoginEnabled: action.payload,
            };
        case SET_GOOGLE_LOGIN_ENABLED:
            return {
                ...state,
                googleLoginEnabled: action.payload,
            };

        case SET_GITHUB_LOGIN_ENABLED:
            return {
                ...state,
                githubLoginEnabled: action.payload,
            };
        default:
            return state;
    }
}

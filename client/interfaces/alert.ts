export enum AlertTypes {
    Error = 'error',
    Success = 'success',
    Info = 'info',
    Warning = 'warning',
}

export enum AlertAlignment {
    Top = 'top',
    Bottom = 'bottom'
}

export const OPEN_ALERT = 'OPEN_ALERT';
export const CLOSE_ALERT = 'CLOSE_ALERT';

export interface Alert {
    message: string;
    type: AlertTypes;
    autoClose?: boolean;
    alignment?: AlertAlignment;
}

export interface OpenAlertAction {
    type: typeof OPEN_ALERT;
    payload: Alert;
}

export interface CloseAlertAction {
    type: typeof CLOSE_ALERT;
}

export type AlertActionTypes = OpenAlertAction | CloseAlertAction;
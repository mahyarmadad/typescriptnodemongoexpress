
export const ADDTASK = "ADDTASK";
export const EDITTASK = "EDITTASK";
export const DELETETASK = "DELETETASK";
export const GETTASK = "GETTASK";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT = "LOGOUT";
export const LOAD_USER = "LOAD_USER";
export const AUTH_ERROR = "AUTH_ERROR";

export const SETALERT = "SETALERT";
export const REMOVEALERT = "REMOVEALERT";



export type Auth = {
    token: any,
    isAutenticated: any,
    loading: boolean,
    error: any,
    user: any,
    loadUser: any;
};
export type Alert = {
    alert: [],
    setAlert: any
}
export type User = {
    id: number;
    username: string;
    email: string;
};
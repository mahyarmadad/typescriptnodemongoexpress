import { REGISTER_SUCCESS, REGISTER_FAILED, LOGOUT, LOAD_USER, LOGIN_SUCCESS, LOGIN_FAILED, AUTH_ERROR, CLEARERROR } from "../Types";
export default (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                isAutenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_SUCCESS:
            localStorage.setItem("token", action.payload);
            return {
                ...state,
                ...action.payload,
                isAutenticated: true,
                loading: false,

            }
        case REGISTER_FAILED:
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                isAutenticated: false,
                loading: false,
                user: false,
                error: action.payload
            }
        case CLEARERROR:
            return {
                ...state,
                error: null
            };
        default: return state
    }
}
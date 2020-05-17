import { REGISTER_SUCCESS, REGISTER_FAILED, LOGOUT, LOAD_USER, LOGIN_SUCCESS, LOGIN_FAILED, AUTH_ERROR } from "../Types";
export default (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case LOAD_USER:
            return {
                ...state,
                isAutenticated: true,
                loading: false,
                user: action.payload
            }
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
        default: return state
    }
}
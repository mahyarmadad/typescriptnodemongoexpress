import axios from "axios";
const AuthToken = (token: String) => {
    if (token) {
        axios.defaults.headers.common["x-auth-token"] = token;
    } else {
        delete axios.defaults.headers.common["x-auth-token"];
    }
}
export default AuthToken;
import { createContext } from "react";
import { Auth } from "../Types";
const AuthContext = createContext<Partial<Auth>>({});
export default AuthContext;

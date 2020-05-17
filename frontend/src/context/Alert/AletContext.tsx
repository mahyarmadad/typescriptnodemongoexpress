import { createContext } from "react";
import { Alert } from "../Types";
const AlertContext = createContext<Partial<Alert>>({});
export default AlertContext;
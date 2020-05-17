import { SETALERT, REMOVEALERT } from "../Types"


export default (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case SETALERT:
            return [...state, action.payload];
        case REMOVEALERT:
            return state.filter((alert: any) => alert.id !== action.payload);
        default: return state;
    }
}

import {
    SHOW_HOME_VIEW
} from "./actions/actionTypes";

export function changeIndexHome(payload) {
    return { type: SHOW_HOME_VIEW, payload };
}


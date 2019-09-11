import { SHOW_HOME_VIEW } from '../actions/actionTypes'

export default function globalState(state = {}, action) {
    switch (action.type) {
        case SHOW_HOME_VIEW:
            switch (action.payload) {
                case 0:
                    return { ...state, presentationIndex: 0 }
                case 1:
                    return { ...state, presentationIndex: 1 }
                default:
                    break;
            }
        default:
            return state
    }
}
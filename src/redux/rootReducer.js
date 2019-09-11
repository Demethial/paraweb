import reduceReducers from 'reduce-reducers';
import globalState from './reducers/globalState';

const initialState = {
    presentationIndex: 0,
};


const rootReducer = reduceReducers(initialState, globalState);


export default rootReducer;
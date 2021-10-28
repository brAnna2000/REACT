import { GET_DATA } from './actions';
import { getData } from '../ducks/info';

export const getDataMiddleware = store => next => action => {
    if (action.type === GET_DATA) {
        return store.dispatch(getData());
    }
    next(action);
};

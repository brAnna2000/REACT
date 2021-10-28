import { Reducer } from '../ducks/info';
import { FindReducer } from '../ducks/finder';
import { SortReducer } from '../ducks/sort';
import { PaginationReducer } from '../ducks/pagination';

export default {
    info: Reducer,
    find: FindReducer,
    sort: SortReducer,
    pagination: PaginationReducer,
};

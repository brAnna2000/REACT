import { initialState } from '../ducks/info';
import { initialFindState } from '../ducks/finder';
import { initialSortState } from '../ducks/sort';
import { initialPaginationState } from '../ducks/pagination';

export default {
    info: initialState,
    find: initialFindState,
    sort: initialSortState,
    pagination: initialPaginationState
};
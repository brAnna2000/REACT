// ACTIONS
export const SORT_ASC_EMAIL_COLUMN = 'SORT_ASC_EMAIL_COLUMN';
export const SORT_ASC_STATE_COLUMN = 'SORT_ASC_STATE_COLUMN';
export const SORT_ASC_PHONE_COLUMN = 'SORT_ASC_PHONE_COLUMN';
export const SORT_ASC_FIRSTNAME_COLUMN = 'SORT_ASC_FIRSTNAME_COLUMN';
export const SORT_ASC_LASTNAME_COLUMN = 'SORT_ASC_LASTNAME_COLUMN';

export const SORT_DESC_EMAIL_COLUMN = 'SORT_DESC_EMAIL_COLUMN';
export const SORT_DESC_STATE_COLUMN = 'SORT_DESC_STATE_COLUMN';
export const SORT_DESC_PHONE_COLUMN = 'SORT_DESC_PHONE_COLUMN';
export const SORT_DESC_FIRSTNAME_COLUMN = 'SORT_DESC_FIRSTNAME_COLUMN';
export const SORT_DESC_LASTNAME_COLUMN = 'SORT_DESC_LASTNAME_COLUMN';


// ACTION CREATORS/MIDDLEWARES
export const sortAscEmailColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_EMAIL_COLUMN,
    });
}
export const sortAscStateColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_STATE_COLUMN,
    });
}
export const sortAscPhoneColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_PHONE_COLUMN,
    });
}
export const sortAscFirstNameColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_FIRSTNAME_COLUMN,
    });
}
export const sortAscLastNameColumn = () => (dispatch) => {
    dispatch({
        type: SORT_ASC_LASTNAME_COLUMN,
    });
}
export const sortDescEmailColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_EMAIL_COLUMN,
    });
}
export const sortDescStateColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_STATE_COLUMN,
    });
}
export const sortDescPhoneColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_PHONE_COLUMN,
    });
}
export const sortDescFirstNameColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_FIRSTNAME_COLUMN,
    });
}
export const sortDescLastNameColumn = () => (dispatch) => {
    dispatch({
        type: SORT_DESC_LASTNAME_COLUMN,
    });
}

// INITIAL STATE
export const initialSortState = {
    email:
    {
        ascending: false,
        descending: false
    },
    state:
    {
        ascending: false,
        descending: false
    },
    lastName:
    {
        ascending: false,
        descending: false
    },
    firstName:
    {
        ascending: false,
        descending: false
    },
    phone:
    {
        ascending: false,
        descending: false
    },
}

// REDUCER
export const SortReducer = (state = initialSortState, action) => {
    switch (action.type) {
        case SORT_ASC_EMAIL_COLUMN:
            return {
                ...initialSortState,
                email: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_STATE_COLUMN:
            return {
                ...initialSortState,
                state: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_PHONE_COLUMN:
            return {
                ...initialSortState,
                phone: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_FIRSTNAME_COLUMN:
            return {
                ...initialSortState,
                firstName: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_ASC_LASTNAME_COLUMN:
            return {
                ...initialSortState,
                lastName: {
                    ascending: true,
                    descending: false
                },
            }
        case SORT_DESC_EMAIL_COLUMN:
            return {
                ...initialSortState,
                email: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_STATE_COLUMN:
            return {
                ...initialSortState,
                state: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_PHONE_COLUMN:
            return {
                ...initialSortState,
                phone: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_FIRSTNAME_COLUMN:
            return {
                ...initialSortState,
                firstName: {
                    ascending: false,
                    descending: true
                },
            }
        case SORT_DESC_LASTNAME_COLUMN:
            return {
                ...initialSortState,
                lastName: {
                    ascending: false,
                    descending: true
                },
            }
        default:
            return {
                ...state,
            }
    }
}

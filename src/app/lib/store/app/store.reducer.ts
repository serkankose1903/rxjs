import { createReducer, on } from '@ngrx/store';
import { setPageNumber, addLastView, setUserInputSearch } from './store.actions';
import { initialState } from './store.state';


const _storeReducer = createReducer(
    initialState,
    on(setPageNumber, (state, action) => {
        return {
            ...state,
            page: action.page,
        };
    }),
    on(addLastView, (state, action) => {
        const oldUser = state.lastViewedUsers.filter(
            (user) => user.id !== action.lastViewedUsers.id
        );
        return {
            ...state,
            lastViewedUsers: [action.lastViewedUsers, ...oldUser].slice(0, 5),
        };
    }),
    on(setUserInputSearch, (state, action) => {
        return {
            ...state,
            input: action.input,
        };
    }),

)
export function storeReducer(state: any, action: any) {
    return _storeReducer(state, action);
}



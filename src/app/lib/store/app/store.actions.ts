import { createAction, props } from '@ngrx/store';
import { LoadUserData } from "../../models/data.model";

export const SET_PAGE_DATA = '[store state] set page data';
export const ADD_LAST_VIEW = '[store state] add last view data';
export const SET_USER_INPUT_SEARCH_ACTION = '[store state] set user input data';

export const setPageNumber = createAction(
    SET_PAGE_DATA,
    props<{ page: number }>()
);

export const addLastView = createAction(
    ADD_LAST_VIEW,
    props<{ lastViewedUsers: LoadUserData }>()
);

export const setUserInputSearch = createAction(
    SET_USER_INPUT_SEARCH_ACTION,
    props<{ input: string }>()
);
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StoreState } from './store.state';

export const STORE_STATE_NAME = 'shared';


export const getStoreState = createFeatureSelector<StoreState>(
  STORE_STATE_NAME
);

export const setPageData = createSelector(getStoreState, (state) => {
  return state.page;
});

export const setLastView = createSelector(getStoreState, (setLastView) => {
  return setLastView;
});
export const getUserInputSearch = createSelector(getStoreState, ({ input }) => {
  return input;
});

export const getLastView = createSelector(getStoreState,
  ({ lastViewedUsers }) => {
    return lastViewedUsers;
  }
);

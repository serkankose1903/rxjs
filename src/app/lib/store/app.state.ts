import { storeReducer } from './app/store.reducer';
import { STORE_STATE_NAME } from './app/store.selector';
import { StoreState } from './app/store.state';

export interface AppState {
  [STORE_STATE_NAME]: StoreState;
}

export const appReducer = {
  [STORE_STATE_NAME]: storeReducer,
};

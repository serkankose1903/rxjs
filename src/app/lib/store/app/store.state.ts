import { LoadUserData } from "../../models/data.model";

export interface StoreState {
  page: number;
  input: string;
  lastViewedUsers: LoadUserData[];
}

export const initialState: StoreState = {
  page: null || 1,
  input: '',
  lastViewedUsers: [],
};

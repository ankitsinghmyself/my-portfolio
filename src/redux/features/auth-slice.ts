import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type initialState = {
  value: AuthState;
};
type AuthState = {
  isAuth: boolean;
  username: string;
};
const initialState = {
  value: {
    isAuth: false,
    username: "",
  } as AuthState,
} as initialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
        },
      };
    },
  },
});

export const { login, logout } = auth.actions;
export default auth.reducer;
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { apiReducer } from "./apiSlice";
import { cartReducer } from "./cartSlice";
import { authReducer } from "./authSlice";

export const store = configureStore({
	reducer: {
		cartReducer,
		authReducer,
		apiReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

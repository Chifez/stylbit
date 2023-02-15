import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface authUser {
	user: boolean;
}

const initialState: authUser = {
	user: false,
};

const authSlice = createSlice({
	name: "authUser",
	initialState,
	reducers: {
		userAuth: (
			authState,
			action: PayloadAction<{ user: boolean; userId?: string }>
		) => {
			authState.user = action.payload.user;
			localStorage.setItem("signedInUser", action.payload.userId!);
		},
	},
});

export const authReducer = authSlice.reducer;
export const { userAuth } = authSlice.actions;

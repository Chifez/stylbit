import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface apiType {
  getApi: string;
}

const initialState: apiType = {
  getApi: "allproducts",
};

const apiSlice = createSlice({
  name: "getApi",
  initialState,
  reducers: {
    getProduct: (getApiState, action: PayloadAction<{ getApi: string }>) => {
      const api = action.payload;
      return (getApiState = api);
    },
  },
});

export const apiReducer = apiSlice.reducer;
export const { getProduct } = apiSlice.actions;

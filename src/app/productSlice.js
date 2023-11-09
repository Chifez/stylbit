import { createSlice } from '@reduxjs/toolkit';
import useProdFetch from '../hooks/useProdFetch';

const initialState = {
  products: [],
  loading: false,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductList: (state, action) => {
      console.log('payload', action.payload);
      state.products = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const productReducer = productSlice.reducer;
export const { setProductList, setLoading } = productSlice.actions;

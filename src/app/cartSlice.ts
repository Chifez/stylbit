import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { product } from "../Data/Types";

// type Cart = {
// 	id: number;
// 	image: any;
// 	name: string;
// 	desc: string;
// 	newprice: number;
// 	quantity: number;
// };

interface cartSlices {
	cart: {
		id: string;
		image: any;
		name: string;
		desc?: string;
		newprice: number;
		quantity: number;
	}[];
}

const initialState: cartSlices = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (
			state,
			action: PayloadAction<{
				id: string;
				image: any;
				name: string;
				desc?: string;
				newprice: number;
				prod_quantity?: number;
			}>
		) => {
			const itemIncart = state.cart.find(
				(item) => item.id === action.payload.id
			);
			itemIncart
				? itemIncart.quantity++
				: state.cart.push({
						...action.payload,
						quantity: action.payload.prod_quantity
							? action.payload.prod_quantity
							: 1,
				  });
		},
		incrementQuantity: (
			state,
			action: PayloadAction<{ id: string; quantity: number }>
		) => {
			const item = state.cart.find((item) => item.id === action.payload.id);
			item && item.quantity++;
		},
		decrementQuantity: (
			state,
			action: PayloadAction<{ id: string; quantity: number }>
		) => {
			const item = state.cart.find((item) => item.id === action.payload.id);
			item && (item.quantity === 1 ? (item.quantity = 1) : item.quantity--);
		},
		removeItem: (state, action: PayloadAction<{ id: string }>) => {
			const removeItem = state.cart.filter(
				(item) => item.id !== action.payload.id
			);
			state.cart = removeItem;
		},
	},
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
	cartSlice.actions;

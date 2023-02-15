interface cart {
	id: string;
	image: any;
	name: string;
	desc?: string;
	newprice: number;
	quantity: number;
}

export const getTotal = (products: cart[]) => {
	let totalQuantity = 0;
	let totalPrice = 0;
	products.forEach((item: cart) => {
		totalQuantity += item.quantity;
		totalPrice += item.newprice * item.quantity;
	});
	return { totalPrice, totalQuantity };
};

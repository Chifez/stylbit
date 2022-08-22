export type product = {
	id: number;
	image: string;
	name: string;
	newprice: string;
	oldprice: string;
	category: string;
};

export type Select = {
	optionId: string;
	options: (string | number)[];
};

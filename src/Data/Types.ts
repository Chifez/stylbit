export type product = {
	id: number;
	image: any;
	name: string;
	newprice: string;
	oldprice: string;
	category: string;
};

export type Select = {
	optionId: string;
	options: (string | number)[];
};

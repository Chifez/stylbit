export type product = {
	id: string;
	image: string;
	name: string;
	desc?: string;
	fulldesc: string;
	instock: boolean;
	newprice: string;
	oldprice: string;
	category: string;
	toppick: boolean;
};

export type Select = {
	optionId: string;
	options: (string | number)[];
};

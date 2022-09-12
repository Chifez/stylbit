export type product = {
	id: string;
	image: string;
	name: string;
	desc?: string;
	fulldesc: string;
	instock: boolean;
	newprice: number;
	oldprice: number;
	category: string;
	toppick: boolean;
};

export type Select = {
	optionId: string;
	options: (string | number)[];
};

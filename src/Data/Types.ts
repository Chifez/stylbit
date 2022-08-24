export type product = {
	id: string;
	image: string;
	name: string;
	desc?: string;
	newprice: string;
	oldprice: string;
	category: string;
	toppick: boolean;
};

export type Select = {
	optionId: string;
	options: (string | number)[];
};

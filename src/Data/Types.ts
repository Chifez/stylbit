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
  quantity?: number;
};

export type SelectFilter = {
  optionId: string;
  options: {
    title: string | number;
    value: string;
    getCategory?: () => Promise<void>;
  }[];
};

export type SelectOptions = {
  optionId: string;
  options: string[] | number[];
};

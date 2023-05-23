import { useState } from "react";
import { BsSearch, BsFilterLeft } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import InputForm from "../../components/InputInfo";
import SelectInput from "../../components/SelectFilter";
// import {
// 	searchProducts,
// 	getMensProducts,
// 	getWomenProducts,
// } from "../../features/api/product.api";

const categoryOptions = {
  optionId: "category",
  options: [
    {
      title: "Men's wear",
      //  getCategory: getMensProducts
    },
    {
      title: "Female's wear",
      // getCategory: getWomenProducts
    },
  ],
};
const sortOptions = {
  optionId: "sortby",
  options: [{ title: "PRICE" }, { title: "A-Z" }, { title: "Z-A" }],
};
const languageOptions = {
  optionId: "Language",
  options: [{ title: "EN" }, { title: "ESP" }],
};

const ProductFilter = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <>
      <div className="hidden md:block">
        <DesktopProductFilter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
      <div className="block md:hidden">
        <MobileProductFilter
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </div>
    </>
  );
};

const DesktopProductFilter = ({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: (e: string) => void;
}) => {
  return (
    <div className="flex justify-between">
      <SelectInput
        Options={categoryOptions}
        initialstate="--select category--"
        extraclass="w-[11rem] p-2"
      />
      <div className="flex items-center justify-between gap-1 px-2 border">
        <input
          type="text"
          placeholder="Search keyword"
          className="flex-1 outline-none bg-transparent p-2"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <BsSearch
          className=" fill-white"
          // onClick={() => searchProducts(searchInput)}
        />
      </div>
      <div className="flex gap-3">
        <SelectInput
          Options={sortOptions}
          initialstate="--sort products--"
          extraclass="w-[10rem] p-2"
        />
        <SelectInput
          Options={languageOptions}
          initialstate={languageOptions.options[0].title}
          extraclass="w-20 p-2"
        />
      </div>
    </div>
  );
};

const MobileProductFilter = ({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: (e: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="relative flex justify-between items-center gap-2">
      <BsFilterLeft
        className="w-10 h-10 border"
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className=" flex-1 flex items-center justify-between gap-1 px-2 border">
        <input
          type="text"
          placeholder="Search keyword"
          className="flex-1 outline-none bg-transparent p-2"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <BsSearch
          className=" fill-white"
          // onClick={() => searchProducts(searchInput)}
        />
      </div>
      <div
        className={`absolute top-full p-2 ${
          isOpen
            ? "-translate-x-[4vw] transition-all"
            : "-translate-x-[100vw] transition-all"
        } bg-primary `}
      >
        <FilterSlider setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

const FilterSlider = ({ setIsOpen }: { setIsOpen: (e: boolean) => void }) => {
  return (
    <>
      <IoMdClose
        onClick={() => setIsOpen(false)}
        className="absolute right-0 top-1 h-9 w-9"
      />
      <div className={`flex flex-col justify-around p-2 w-[80vw] h-[50vh]`}>
        <SelectInput
          Options={categoryOptions}
          initialstate="--select category--"
          extraclass="w-[11rem] p-2"
        />

        <SelectInput
          Options={sortOptions}
          initialstate="--sort products--"
          extraclass="w-[10rem] p-2"
        />
        <SelectInput
          Options={languageOptions}
          initialstate={languageOptions.options[0].title}
          extraclass="w-20 p-2"
        />
      </div>
    </>
  );
};

export default ProductFilter;

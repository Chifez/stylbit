import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SelectFilter } from '../Data/Types';
import { RiArrowDropDownLine } from 'react-icons/ri';
import useProdFetchId from '../hooks/useProdFetchId';
const SelectInput = (props: {
  openSlide?: (arg: boolean) => void;
  Options: SelectFilter;
  initialstate: string;
  extraclass: string;
}) => {
  const { options } = props.Options;

  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const [selectedInput, setSelectedInput] = useState(props.initialstate);

  const [filterValue, setFilterValue] = useState(
    queryParams.get(props.Options.optionId)
  );
  const [open, setOpen] = useState(false);

  function handleFilterUpdate() {
    if (filterValue) {
      queryParams.set(props.Options.optionId, filterValue);
    }
    navigate({ search: queryParams.toString() });
  }
  const filterType = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
    e.preventDefault();
    handleFilterUpdate();
    setFilterValue((e.target as HTMLInputElement).value);
    setSelectedInput((e.target as HTMLInputElement).value);
    setOpen(false);
    if (props.openSlide) {
      props.openSlide(false);
    }
  };

  const getCategoryId = (input: string) => {
    if (props.Options.optionId == 'category') {
      const optionId = options.filter(
        (categoryOption) => categoryOption.title === input
      );
      return optionId[0]?.value;
    }
  };
  useProdFetchId(props.Options.optionId, getCategoryId(selectedInput));

  useEffect(() => {
    handleFilterUpdate();
  }, [selectedInput]);
  return (
    <div>
      <div
        className={`relative`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(!open)}
          className={`flex items-center relative justify-between bg-transparent border rounded-md ${props.extraclass} cursor-pointer`}
        >
          <div>{selectedInput}</div>

          <RiArrowDropDownLine className="w-5 h-5" />
        </div>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } w-full border absolute bg-primary cursor-pointer z-20`}
        >
          {options.map((item, index) => (
            <option
              className="hover:bg-[grey] px-2"
              key={index}
              value={item?.title}
              onClick={
                (e) => filterType(e)

                //   {
                //   setSelectedInput((e.target as HTMLInputElement).value);
                //   setOpen(false);
                //   // useProdFetchId(props.Options.optionId, selectedInput);
                //   // item.getCategory && item.getCategory();
                // }
              }
            >
              {item.title}
            </option>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectInput;

import React, { useState } from 'react';
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

  function handleFilterUpdate(
    e: React.MouseEvent<HTMLOptionElement, MouseEvent>
  ) {
    e.preventDefault();

    if (filterValue) {
      queryParams.set(props.Options.optionId, filterValue);
    }
    navigate({ search: queryParams.toString() });
  }
  const filterType = (e: React.MouseEvent<HTMLOptionElement, MouseEvent>) => {
    e.preventDefault();
    setSelectedInput((e.target as HTMLInputElement).value);
    setFilterValue((e.target as HTMLInputElement).value);
    handleFilterUpdate(e);
    setOpen(false);
    if (props.openSlide) {
      props.openSlide(false);
    }
  };

  useProdFetchId(props.Options.optionId, selectedInput);
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
              value={item?.value}
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

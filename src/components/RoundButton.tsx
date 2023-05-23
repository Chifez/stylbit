import React, { ReactNode } from "react";

const RoundButton = (props: {
  extraclasses?: string;
  children: string | number | ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={props.onClick}
      className={`flex items-center justify-center bg-white text-black text-sm text-center rounded-full cursor-pointer ${props.extraclasses}`}
    >
      <span>{props.children}</span>
    </div>
  );
};
export default RoundButton;

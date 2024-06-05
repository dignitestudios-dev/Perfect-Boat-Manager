import React from "react";

const AddFleetInput = ({ label, state, setState, disabled }) => {
  return (
    <div className="w-full h-auto flex flex-col gap-1 justify-start items-start">
      <label className="text-[16px] font-medium leading-[21.6px]">
        {label}
      </label>
      <input
        type="text"
        value={state}
        disabled={disabled}
        onChange={(e) => setState(e.target.value)}
        className="w-full h-[52px] bg-[#1A293D] disabled:text-white/50 outline-none  px-3 focus:border-[1px] focus:border-[#55C9FA] rounded-xl"
      />
    </div>
  );
};

export default AddFleetInput;

import React, { useContext, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { GlobalContext } from "../../../contexts/GlobalContext";

const BoatType = ({
  boatTypeDropdownOpen,
  toggleBoatTypeDropdown,
  boatType,
  setBoatType,
}) => {
  const { dropDown } = useContext(GlobalContext);
  const dropdownRef = useRef(null);

  const handleCheckboxChange = (boat) => {
    setBoatType(boat);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        boatTypeDropdownOpen
      ) {
        toggleBoatTypeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [boatTypeDropdownOpen, toggleBoatTypeDropdown]);

  return (
    <span
      className="w-full flex justify-start items-center relative"
      ref={dropdownRef}
    >
      Boat Type
      <FaCaretDown
        className={`ml-2 cursor-pointer ${
          boatTypeDropdownOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={toggleBoatTypeDropdown}
      />
      {boatTypeDropdownOpen && (
        <div className="max-h-[300px] overflow-auto absolute top-full left-0 mt-1 w-48 bg-[#1A293D] text-white rounded-md shadow-lg z-10">
          <label className="flex items-center p-2 cursor-pointer hover:bg-[#000]/10">
            <input
              checked={boatType === "all"}
              onChange={() => handleCheckboxChange("all")}
              type="checkbox"
              className="form-checkbox text-[#199BD1] mr-2"
            />
            All
          </label>
          {dropDown?.boatTypeDropDown?.map((boat, index) => (
            <label
              key={index}
              className="flex items-center p-2 cursor-pointer hover:bg-[#000]/10"
            >
              <input
                checked={boatType === boat}
                onChange={() => handleCheckboxChange(boat)}
                type="checkbox"
                className="form-checkbox text-[#199BD1] mr-2"
              />
              {boat?.charAt(0).toUpperCase() + boat?.slice(1)}
            </label>
          ))}
        </div>
      )}
    </span>
  );
};

export default BoatType;

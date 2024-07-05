import React, { useRef, useState } from "react";
import { Application, Card, Calendar } from "react-rainbow-components";
import moment from "moment";

const theme = {
  rainbow: {
    palette: {
      brand: "#199BD1",
    },
    shadows: {
      brand: "none",
    },
  },
};

const DateModal = ({ isOpen, setIsOpen }) => {
  const today = moment();
  const [date, setDate] = useState(today.toDate()); // Initialize date with today's date
  const dateRef = useRef();

  const toggleModal = (e) => {
    if (dateRef.current && !dateRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  return (
    <div
      onClick={toggleModal}
      className={`fixed z-[10000] top-0 p-2 left-0 transition-all duration-300 w-screen h-screen flex justify-center items-center bg-transparent ${
        isOpen ? "scale-1" : "scale-0"
      }`}
    >
      <div
        ref={dateRef}
        className="w-full lg:w-[748px] h-auto md:h-[557px] divide-x-2 divide-[#eaeaea] shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex  justify-start items-start bg-[#243347] rounded-3xl"
      >
        <div className="w-[40%] md:flex hidden h-full  p-10  flex-col justify-between items-center">
          <h1 className="text-[#fff]/[0.5] text-xl font-medium">
            {new Date(date).toLocaleString("en-US", { weekday: "long" })}
          </h1>
          <h1 className="text-[#199BD1] text-9xl font-bold">
            {new Date(date).getDate()}
          </h1>
          <h1 className="text-[#fff]/[0.5] text-xl font-medium">
            {new Date(date).toLocaleString("en-US", { month: "long" })}
          </h1>
        </div>
        <div className="w-full md:w-[60%] px-2 pt-10 pb-4 h-full flex flex-col gap-4 justify-start items-start">
          <div className="w-full flex flex-col gap-1 justify-start items-start  px-8">
            <h1 className="text-2xl text-white font-bold">Select Date</h1>
            <p className="text-md text-white/50 font-normal">
              Choose the perfect date for the task deadline
            </p>
          </div>
          <div
            id="calendar_div"
            className="flex flex-col bg-[#243347] gap-1 w-full h-[22rem]"
          >
            <Application
              theme={theme}
              className="w-full h-[23rem] bg-[#243347] flex gap-4 flex-col items-center justify-start"
            >
              <Card
                className="rainbow-p-around_large bg-[#243347] w-full h-full"
                style={{ boxShadow: "none", borderRadius: 0, border: "none" }}
              >
                <Calendar
                  className="h-full"
                  id="calendar-1"
                  value={date}
                  minDate={today.toDate()}
                  onChange={(value) => {
                    setDate(value);
                    console.log(value);
                  }}
                />
              </Card>
            </Application>
          </div>

          <button className="w-full h-14 rounded-lg flex justify-center items-center text-md font-medium bg-[#199BD1] text-white">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateModal;

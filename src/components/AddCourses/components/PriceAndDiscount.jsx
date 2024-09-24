import React, { useState, useEffect } from "react";
import InputBox from "./InputBoxs";

const PriceAndDiscount = ({ courseDetails, setCourseDetails }) => {
  const defaultStartDate = new Date().toISOString().slice(0, 16);
  const [startDate, setStartDate] = useState(defaultStartDate);

  useEffect(() => {
    setCourseDetails({
      ...courseDetails,
      courseStartDate: startDate,
    });
  }, [startDate]);

  const handleInputChange = (e) => {
    setCourseDetails({
      ...courseDetails,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name, e.target.value);
  };

  return (
    <div>
      <fieldset className="flex flex-col gap-4 py-6 pl-20 pr-16 justify-center lg:mx-[4rem] xl:w-[64rem] 2xl:w-[93rem]">
        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Course Price and Discount
        </h1>
        <div className="flex flex-row  gap-4 px-4 py-6 rounded-md bg-gradient-to-r from-greenColor to-green-300 w-full">
          <InputBox
            label="Base Price"
            type="number"
            placeholder="Base Price"
            name="base_price"
            value={courseDetails.base_price}
            onChange={(e) => handleInputChange(e)}
          />
          <InputBox
            label="Discount Percentage"
            type="number"
            placeholder="Discount Percentage"
            name="discount_percentage"
            value={courseDetails.discount_percentage}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <h1 className="text-greenColor text-3xl font-semibold font-Montserrat">
          Starting Date & Duration
        </h1>
        <div id="date-range-picker" className="flex flex-row lg:grid-cols-2 md:grid-cols-2 gap-4 px-4 py-6 rounded-md bg-gradient-to-r from-greenColor to-green-300 w-full">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 pr-3 h-4 text-white white:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            {/* <label htmlFor="datepicker-range-start" className="text-white font-semibold text-center">Start date</label> */}
            <InputBox
              id="datepicker-range-start"
              label={"Start Date"}
              name="start"
              type="datetime-local"
              className="w-[15vw] h-10 rounded-xl p-4 bg-white"
              placeholder="Select date start"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <InputBox
              label="Duration"
              name="duration"
              type="number"
              className="w-[15vw] h-10 rounded-xl p-4 bg-white"
              placeholder="Duration"
              value={courseDetails.duration}
              onChange={(e) => handleInputChange(e)}
            />
        </div>

      </fieldset>
    </div>
  );
};

export default PriceAndDiscount;

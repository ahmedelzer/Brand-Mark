import { data } from "autoprefixer";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatepickerComponent({ setInfo, name, ...props }) {
  const [selectedDate, setSelectedDate] = useState("");
  return (
    <div>
      <DatePicker
        id="datePicker"
        name={name}
        {...props}
        // placeholderText={}
        selected={selectedDate}
        onChange={(data) => setSelectedDate(data)}
        showYearDropdown
        className={`font-medium w-full mt-1 p-2 pl-3  rounded-lg border-1 text-[#02295a] text-[15px] hover:border-[#02295a] focus:border-white focus:ring-[#bfe2fd]`}
      />
    </div>
  );
}

export default DatepickerComponent;

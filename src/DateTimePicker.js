import React, { useState } from "react";
import moment from "moment";
import "./DateTimePicker.css";

moment.locale("en"); // Set locale to U.S. English

const DateTimePicker = ({ onChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(
    value ? moment(value) : moment()
  );

  const handleDateChange = (event) => {
    const date = moment(event.target.value, "YYYY-MM-DD");
    if (date.isValid()) {
      setSelectedDate(date);
      if (onChange) {
        onChange(date);
      }
    }
  };

  return (
    <div className="datetime-picker">
      <div className="picker-dropdown">
        <input
          type="date"
          value={selectedDate.format("YYYY-MM-DD")}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
